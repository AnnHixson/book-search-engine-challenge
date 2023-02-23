const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    # _id
    _id: ID

    # username
    username: String

    # email
    email: String

    # bookCount
    bookCount: Int

    # savedBooks (This will be an array of the Book type.)
    savedBooks: [Book]
  }

  type Book {
    # bookId (Not the _id, but the book's id value returned from Google's Book API.)
    bookId: String

    # authors (An array of strings, as there may be more than one author.)
    authors: [String]

    # description
    description: String

    # title
    title: String

    # image
    image: String

    # link
    link: String
  }

  type Auth {
    # token
    token: ID!

    # user (References the User type.)
    user: User
  }

  type Query {
    # me: Which returns a User type.
    me: User
  }

  type Mutation {
    # login: Accepts an email and password as parameters; returns an Auth type.
    login(email: String!, password: String!): Auth

    # addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser(username: String, email: String, password: String): Auth

    # saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)
    saveBook(authors: [String], description: String, title: String, bookId: String, image: String, link: String): User

    # removeBook: Accepts a book's bookId as a parameter; returns a User type.
    removeBook(bookId: String!): User
  }
`;

module.exports = typeDefs;
