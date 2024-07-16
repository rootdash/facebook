const { ObjectId } = require("mongodb");
const Follow = require("../../../models/Follow");

const followResolver = {
    Query: {
    },
    Mutation: {
        createFollow: async (_, args, context) => {
            const { userId } = context.auth();
            const { followingId } = args;
            const follow = await Follow.createFollow({ followingId: new ObjectId(userId), followerId: new ObjectId(followingId) });
            console.log('Created follow:', follow);
            return follow;
        },
    },
};

module.exports = followResolver;