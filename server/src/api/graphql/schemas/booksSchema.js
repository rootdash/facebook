const booksSchema = `#graphql
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
  type Mutation {
    createBook(title: String, author: String): Book
  }
`;

module.exports = booksSchema;