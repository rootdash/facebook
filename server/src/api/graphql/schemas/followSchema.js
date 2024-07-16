const followSchema = `#graphql
type Follow {
    _id: String
    followingId: String
    followerId: String
    createdAt: String
    updatedAt: String
}

type Mutation {
    createFollow(followingId: String): Follow
}

`;

module.exports = followSchema;