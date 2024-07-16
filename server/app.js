if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const booksSchema = require('./src/api/graphql/schemas/booksSchema');
const booksResolver = require('./src/api/graphql/resolvers/booksResolver');
const userSchema = require('./src/api/graphql/schemas/userSchema');
const userResolver = require('./src/api/graphql/resolvers/userResolver');
const { verifyToken } = require('./src/helpers/jwt');
const postSchema = require('./src/api/graphql/schemas/postSchema');
const postsResolver = require('./src/api/graphql/resolvers/postsResolver');
const followSchema = require('./src/api/graphql/schemas/followSchema');
const followResolver = require('./src/api/graphql/resolvers/followResolver');

const server = new ApolloServer({
    typeDefs: [booksSchema, userSchema, postSchema, followSchema],
    resolvers: [booksResolver, userResolver, postsResolver, followResolver],
});

const port = process.env.PORT || 4000;
startStandaloneServer(server, {
    listen: { port },
    context: async ({ req }) => {
        return {
            auth: () => {
                const authorization = req.headers.authorization;
                if (!authorization) {
                    throw new Error('Please Login First');
                }
                const [type, token] = authorization.split(' ');
                if (type !== 'Bearer') {
                    throw new Error('Invalid token type');
                }
                const user = verifyToken(token);
                return user
            }
        }
    }
}).then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});