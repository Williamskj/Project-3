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
    user: String
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]!
    user(email: String!): User
    posts: [Post]
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: User
  }

  input SavedPostInput {
    title: String
    description: String
  }

  input SavedCommentInput {
    commentText: String
    commentAuthor: String
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(posts: SavedPostInput): Post
    addComment(postId: ID!, commentText: String!): Post
    removeUser: User
    removePost(postId: ID!): Post
    removeComment(postId: ID!, commentId: ID!): Post
  }
`;

module.exports = typeDefs;