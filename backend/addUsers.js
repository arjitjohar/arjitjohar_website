const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const users = [
  {
    username: 'Arjit Johar',
    email: 'johararjit@gmail.com',
    password: 'password123',
  },
  {
    username: 'Jane Doe',
    email: 'jane.doe@example.com',
    password: 'password456',
  },
  {
    username: 'John Smith',
    email: 'john.smith@example.com',
    password: 'password789',
  },
];

const addUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    for (const userData of users) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(userData.password, salt);
      const user = new User({ ...userData, password: hashedPassword });
      await user.save();
    }

    console.log('Users added successfully');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error adding users:', error);
    await mongoose.disconnect();
  }
};

addUsers();
