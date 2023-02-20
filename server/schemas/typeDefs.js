const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    # me: Which returns a User type.
    me: User
  }

  type Mutation {
    # login: Accepts an email and password as parameters; returns an Auth type.
    login(email: String, password: String): Auth

    # addUser: Accepts a username, email, and password as parameters; returns an Auth type.
    addUser(username: String, email: String, password: String): Auth

    # saveBook: Accepts a book author's array, description, title, bookId, image, and link as parameters; returns a User type. (Look into creating what's known as an input type to handle all of these parameters!)

    # removeBook: Accepts a book's bookId as a parameter; returns a User type.
  }

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

    # authors (An array of strings, as there may be more than one author.)

    # description

    # title
    title: String

    # image

    # link
  }

  type Auth {
    # token

    # user (References the User type.)
    user: User
  }
`;

module.exports = typeDefs;
