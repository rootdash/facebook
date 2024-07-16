const { database } = require("../utils/db");

class Book {
    static async createBook(data) {
        try {
            const books = database.collection('books');
            const result = await books.insertOne(data);
            return result;
        } catch (error) {
            throw new Error(error);
        }
    }
}
module.exports = Book;