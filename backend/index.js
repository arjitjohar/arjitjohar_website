const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const authRoute = require('./routes/auth');

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB Connection Successfull'))
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
