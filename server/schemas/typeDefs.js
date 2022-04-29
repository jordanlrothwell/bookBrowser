const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    savedBooks: [Book]
  }
  type Book {
    _id: ID
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
    title: String
  }
  type Query {
    books: [Book]
    users: [User]
  }
  type Mutation {
    addBook(
      bookId: String!
      title: String!
      authors: [String]
      description: String
      image: String
      link: String
    ): Book
    addUser(name: String!, email: String): User
    addSavedBook(userId: ID!, bookId: String!): User
    removeSavedBook(userId: ID!, bookId: String!): User
  }
`;

module.exports = typeDefs;
