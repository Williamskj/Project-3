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
  user: 
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  
  comments: [
    {
      commentText: {
        type: String,
      //  required: true,
        minlength: 1,
        maxlength: 280,
      },
      commentAuthor: {
        type: String,
       
      },
    },
  ],
});

const Post = model('Post', postSchema);

module.exports = Post;