const { ObjectId } = require("mongodb");
const { database } = require("../utils/db");
const bcrypt = require('bcryptjs');

class User {
    static async createUser(data) {
        try {
            const users = database.collection('users');
            console.log('Inserting user:', data);
            data.password = await bcrypt.hash(data.password, 10);
            const result = await users.insertOne(data);
            console.log('Insert result:', result);

            if (!result.acknowledged) {
                throw new Error('User creation failed');
            }

            return {
                ...data,
                _id: result.insertedId
            };
        } catch (error) {
            console.error('Error in createUser:', error);
            throw new Error(error);
        }
    }

    static async loginUser(data) {
        try {
            const { username, password } = data;
            const users = database.collection('users');
            const user = await users.findOne({ username });
            console.log('User found:', user);
            if (!user) {
                throw new Error('Username or password is incorrect');
            }
            if (!(await bcrypt.compare(password, user.password))) {
                throw new Error('Username or password is incorrect');
            }
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }
    static async findByName(name) {
        try {
            const users = database.collection('users');
            const userCursor = users.find({ name });
            const userList = await userCursor.toArray();
            return userList;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async findByUsername(username) {
        try {
            const users = database.collection('users');
            const user = await users.findOne({ username });
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async findByEmail(email) {
        try {
            const users = database.collection('users');
            const user = await users.findOne({ email });
            return user;
        } catch (error) {
            throw new Error(error);
        }
    }

    static async findById(_id) {
        try {
            const users = database.collection('users');
            const agg = [
                {
                    '$match': {
                        '_id': new ObjectId(_id)
                    }
                }, {
                    '$unwind': {
                        'path': '$users',
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'password': 0
                    }
                }, {
                    '$lookup': {
                        'from': 'follows',
                        'localField': '_id',
                        'foreignField': 'followerId',
                        'as': 'following'
                    }
                }, {
                    '$lookup': {
                        'from': 'users',
                        'localField': 'following.followingId',
                        'foreignField': '_id',
                        'as': 'followingDetails'
                    }
                }, {
                    '$unwind': {
                        'path': '$users',
                        'preserveNullAndEmptyArrays': true
                    }
                }, {
                    '$project': {
                        'followingDetails.password': 0
                    }
                }
            ];
            // const user = await users.findOne({ _id: new ObjectId(_id) });
            const cursor = users.aggregate(agg);
            const result = await cursor.toArray();
            console.log(result)
            return result[0];
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = User;