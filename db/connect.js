const mongoose = require('mongoose');

// const connectDB = (url) => {
//   return mongoose.connect(url).then(() => {
//     console.log('Connected to MongoDB');
//   });
// };
const connectDB = (url) => {
  return mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    });
};

module.exports = connectDB;
