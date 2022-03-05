const db = require('../config/connection');
const { User, Post } = require('../models');
const userSeeds = require('./profileSeeds.json');
const postsSeeds = require('./postsSeeds.json');

db.once('open', async () => {
  try {
    await User.deleteMany({});
    await Post.deleteMany({});

    await Post.create(postsSeeds);
    await User.create(userSeeds);
    

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});