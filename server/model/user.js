const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const userSchema = new Schema({
  name: String,
  desc: String,
  state: String,
  age: Number,
  ethnicity: String,
  race: String,
  sex: String,
  height: Number,
  weight: Number,
});

const User = mongoose.model('User', userSchema);

module.exports = User;