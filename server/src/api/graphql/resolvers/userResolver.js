const { generateToken } = require("../../../helpers/jwt");
const User = require("../../../models/User");

const userResolver = {
    Query: {
        users: async () => {
            return [];
        },
        findUser: async (_, args, context) => {
            context.auth();
            const { name, username } = args;
            let result;
            if (name) {
                result = await User.findByName(name);
            } else if (username) {
                result = await User.findByUsername(username);
            }
            if (!result || (Array.isArray(result) && result.length === 0) || (!Array.isArray(result) && !result._id)) {
                throw new Error('User not found');
            }
            return Array.isArray(result) ? result : [result];
        },
        findUserById: async (_, args, context) => {
            context.auth();
            const { _id } = args;
            const result = await User.findById(_id);
            if (!result) {
                throw new Error('User not found');
            }
            return result;
        }
    },
    Mutation: {
        createUser: async (_, args) => {
            const { name, username, email, password } = args;
            if (!name || !username || !email || !password) {
                throw new Error('All fields are required');
            }
            if (password.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }
            if (await User.findByUsername(username)) {
                throw new Error('Username already exists');
            }
            if (await User.findByEmail(email)) {
                throw new Error('Email already exists');
            }

            const user = await User.createUser({ name, username, email, password });
            console.log('Created user:', user);
            return user;
        },
        loginUser: async (_, args) => {
            const user = await User.loginUser(args)
            console.log('Logged in user:', user);
            const access_token = generateToken({ userId: user._id, email: user.email, username: user.username });
            return { access_token }
        },
    },
};

module.exports = userResolver;