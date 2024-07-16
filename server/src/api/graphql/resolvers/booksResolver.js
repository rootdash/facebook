const Book = require("../../../models/Book");

const booksResolver = {
    Query: {
        books: () => books,
    },
    Mutation: {
        createBook: async (_, args) => {
            try {
                const data = { ...args };
                await Book.createBook(data);
                return data;
            } catch (error) {
                throw new Error(error);
            }
        },
    },
};

module.exports = booksResolver;