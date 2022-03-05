const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./profileSeeds.json');
const postsSeeds = require('./postsSeeds.json');

db.once('open', async () => {
  // try {
    await User.deleteMany({});
    await Post.deleteMany({});

    const posts = await Post.create(postsSeeds);
    const users = await User.create(userSeeds);
    users.forEach(async(user, i)=> {
      console.log('user', user._id)
      const updateUser = await User.findOneAndUpdate({
        _id: user._id
      },
      {
        $push: { savedPosts: { _id: posts[i]._id } }
      },
      {
        new: true
      })
      console.log('updateUser', updateUser)
      console.log('post', posts[i]._id)
    });
    

    console.log('all done!');
    process.exit(0);
  // } catch (err) {
  //   throw err;
  // }
});