const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

module.exports = postSchema;

const Post = require('./Post');
const User = require('./User');

module.exports = { Post, User };