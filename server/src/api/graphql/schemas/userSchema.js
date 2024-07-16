const userSchema = `#graphql
  type User {
    _id: String
    name: String
    username: String
    email: String
    password: String
  }

  type CreateUser {
    name: String
    username: String
    email: String
  }

  type AuthPayload {
    access_token: String
  }

  type FindUser {
    _id: String
    name: String
    username: String
    email: String
    following: [Following]
    followingDetails: [FollowingDetails]
  }
  
  type Following {
    _id: String
    followingId: String
    followerId: String
    createdAt: String
    updatedAt: String
  }

  type FollowingDetails {
    _id: String
    name: String
    username: String
    email: String
  }

  type Query {
    users: [User],
    findUser(name:String,username: String): [FindUser]
    findUserById(_id: String): FindUser
  }

  type Mutation {
    createUser(name: String, username: String, email: String, password: String): CreateUser
    loginUser(username: String, password: String): AuthPayload
  }

`;

module.exports = userSchema;