const Post = require("../../../models/Post");
const redis = require("../../../utils/redis");

const postsResolver = {
    Query: {
        getAllPosts: async (_, args, context) => {
            context.auth();
            const cachedPosts = await redis.get('posts:all');
            if (cachedPosts) {
                return JSON.parse(cachedPosts);
            }
            const allPosts = await Post.getAllPostsSorted();
            await redis.set('posts:all', JSON.stringify(allPosts));
            return allPosts;
        },
        getPostId: async (_, args, context) => {
            context.auth();
            const { _id } = args;
            const cachedPostsId = await redis.get(`post:${_id}`);
            if (cachedPostsId) {
                return JSON.parse(cachedPostsId);
            } else {
                const post = await Post.getPostById(_id);
                await redis.set(`post:${_id}`, JSON.stringify(post));
                return post;
            }
        },
    },
    Mutation: {
        createPost: async (_, args, context) => {
            const { userId } = context.auth();
            console.log(userId)
            const { content, tags, imgUrl } = args;
            if (!content) {
                throw new Error('Content is required');
            }
            const post = await Post.createPost({ content, tags, imgUrl, userId });
            await redis.del('posts:all');
            console.log('Created post:', post);
            return post;

        },
        createComment: async (_, args, context) => {
            const { username } = context.auth();
            const { _id, content } = args;
            const post = await Post.getPostById(_id);
            if (!post) {
                throw new Error('Post not found');
            }
            const newComment = {
                content,
                username,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            post.comments.push(newComment);
            const updatedPost = await Post.updatePostById(_id, post);
            await redis.del(`post:${_id}`);
            await redis.del('posts:all');
            return updatedPost;
        },
        likePost: async (_, args, context) => {
            const { _id } = args;
            const { username } = context.auth();
            const post = await Post.getPostById(_id);
            if (!post) {
                throw new Error('Post not found');
            }
            const userIndex = post.likes.findIndex((like) => like.username === username);
            if (userIndex > -1) {
                post.likes.splice(userIndex, 1);
            } else {
                post.likes.push({
                    username,
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                });
            }
            const updatedPost = await Post.updatePostById(_id, post);
            await redis.del(`post:${_id}`);
            await redis.del('posts:all');
            return updatedPost;
        },
    },
};

module.exports = postsResolver;