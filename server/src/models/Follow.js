const { ObjectId } = require("mongodb");
const { database } = require("../utils/db");

class Follow {
    static async createFollow(data) {
        try {
            const { followingId, followerId } = data
            const followToInsert = {
                followingId,
                followerId,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
            };
            const follows = database.collection('follows');

            console.log('Inserting follow:', followToInsert);
            const result = await follows.insertOne(followToInsert);
            console.log('Insert result:', result);

            if (!result.acknowledged) {
                throw new Error('Follow creation failed');
            }

            return {
                ...followToInsert,
                _id: result.insertedId
            };
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = Follow;