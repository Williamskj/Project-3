const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },
    posts: async (parent, args , context) => {
      return Post.find()
    },
    // By adding context to our query, we can retrieve the logged in user without specifically searching for them
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user with this email found!');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password!');
      }

      const token = signToken(user);
      return { token, user };
    },

    // Add a third argument to the resolver to access data in our `context`
    addPost: async (parent, { posts }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        try {
          const newPost = await Post.create(
            {
              title: posts.title,
              description: posts.description,
              user: context.user._id,
              comments: []
            }
          );
          return newPost
        } catch (err) {
          console.log('Error Resolvers', err)
        }
        // return User.findOneAndUpdate(
        //   { _id: context.user._id },
        //   {
        //     $addToSet: { savedPosts: posts },
        //   },
        //   {
        //     new: true,
        //     runValidators: true,
        //   }
        // );
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { postId, commentText }, context) => {
      // If context has a `user` property, that means the user executing this mutation has a valid JWT and is logged in
      if (context.user) {
        const updatePost = await Post.findOneAndUpdate(
          { _id: postId },
          { $addToSet: { comments: { commentText } }, },
          {
            new: true,
            runValidators: true,
          }
        );
        return updatePost
      }
      // If user attempts to execute this mutation and isn't logged in, throw an error
      throw new AuthenticationError('You need to be logged in!');
    },
    // Set up mutation so a logged in user can only remove their profile and no one else's
    removeUser: async (parent, args, context) => {
      if (context.user) {
        return User.findOneAndDelete({ _id: context.user._id });
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Make it so a logged in user can only remove a skill from their own profile
    removePost: async (parent, { postId }, context) => {
      if (context.user) {
        const postDelete = await Post.findOneAndDelete(
          {
            _id: postId,
          },
        );
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { posts: postDelete._id } }
        );
        return postDelete
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { postId, commentId }, context) => {
      if (context.user) {
        try {
          const commentDelete = Post.findOneAndUpdate(
            { _id: postId },
            { $pull: { comments: { _id: commentId } } },
            { new: true }
          );
          return commentDelete
        } catch (err) {
          console.log('error in removeComment', err)
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
