const { ObjectId } = require("mongodb");
const { database } = require("../utils/db");

class Post {
    static async createPost(data) {
        try {
            const { content, tags, imgUrl, userId } = data
            const postToInsert = {
                content,
                tags,
                imgUrl,
                authorId: new ObjectId(userId),
                comments: [],
                likes: [],
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const posts = database.collection('posts');

            console.log('Inserting post:', postToInsert);
            const result = await posts.insertOne(postToInsert);
            console.log('Insert result:', result);

            if (!result.acknowledged) {
                throw new Error('Post creation failed');
            }

            return {
                ...postToInsert,
                _id: result.insertedId
            };
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getAllPostsSorted() {
        try {
            const posts = database.collection('posts');
            const agg = [
                {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'authorId',
                        'foreignField': '_id',
                        'as': 'userDetails'
                    }
                }, {
                    '$unwind': {
                        'path': '$userDetails',
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'userDetails.password': 0
                    }
                }
            ];
            const cursor = posts.aggregate(agg);
            const post = await cursor.sort({ createdAt: -1 }).toArray();
            console.log('Post:', post);
            return post;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async getPostById(_id) {
        try {
            const posts = database.collection('posts');
            const agg = [
                {
                    '$match': {
                        '_id': new ObjectId(_id)
                    }
                }, {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'authorId',
                        'foreignField': '_id',
                        'as': 'userDetails'
                    }
                }, {
                    '$unwind': {
                        'path': '$userDetails',
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'userDetails.password': 0
                    }
                }
            ];
            const cursor = posts.aggregate(agg);
            const post = await cursor.toArray();

            console.log('Post:', post);
            return post[0];
        } catch (error) {
            throw new Error(error);
        }
    }

    static async updatePostById(_id, postData) {
        try {
            const posts = database.collection('posts');
            const result = await posts.updateOne({ _id: new ObjectId(_id) }, { $set: postData });
            if (!result.matchedCount) {
                throw new Error('Post not found');
            }
            return postData;
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Post;