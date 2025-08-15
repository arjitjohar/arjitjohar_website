const mongoose = require('mongoose');
const User = require('./models/User');
require('dotenv').config();

const removeAllUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to database...');

    // Count existing users before deletion
    const userCount = await User.countDocuments();
    console.log(`Found ${userCount} users in the database`);

    if (userCount === 0) {
      console.log('No users to remove.');
    } else {
      // Delete all users
      const result = await User.deleteMany({});
      console.log(`Successfully removed ${result.deletedCount} users from the database`);
    }

    await mongoose.disconnect();
    console.log('Disconnected from database');
  } catch (error) {
    console.error('Error removing users:', error);
    await mongoose.disconnect();
  }
};

removeAllUsers();
