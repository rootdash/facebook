const postSchema = `#graphql
type Post {
  _id: String
  content: String
  tags: [String]
  imgUrl: String
  authorId: String
  comments: [Comment]
  likes: [Like]
  createdAt: String
  updatedAt: String
  userDetails: UserDetails
}

type UserDetails {
    _id: String
    name: String
    username: String
    email: String
  }

type Comment {
  content: String
  username: String
  createdAt: String
  updatedAt: String
}

type Like {
  username: String
  createdAt: String
  updatedAt: String
}


type Query {
  getAllPosts: [Post]
  getPostId(_id: String): Post
}

type Mutation {
  createPost(content: String, tags: [String], imgUrl: String ): Post
  createComment(_id: String, content: String): Post
  likePost(_id: String): Post
}
`
module.exports = postSchema;