const db = require('../config/connection');
<<<<<<< HEAD
const { User, Post } = require('../models');
const userSeeds = require('./profileSeeds.json');
const postsSeeds = require('./postsSeeds.json');
=======
const { User } = require('../models');
const profileSeeds = require('./profileSeeds.json');
>>>>>>> 3926825143f6e97015d1532a2a3bbab40cc26595

db.once('open', async () => {
  try {
    await User.deleteMany({});
<<<<<<< HEAD
    await Post.deleteMany({});

    await User.create(userSeeds);
    await Post.create(postsSeeds);
=======
    await User.create(profileSeeds);
>>>>>>> 3926825143f6e97015d1532a2a3bbab40cc26595

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});