const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    name: String
    email: String
    password: String
    postCount: Int
    savedPosts: [Post]
  }

  type Post {
    _id: ID
    title: String
    description: String
    user: User!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(UserId: ID!): User
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  input SavedPostInput {
    title: String
    description: String
}

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(posts: SavedPostInput): User
    removeUser: User
    removePost(postId: ID!): User
  }
`;

module.exports = typeDefs;