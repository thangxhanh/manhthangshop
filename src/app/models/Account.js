const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    email: String,
    password: String,
  });

module.exports = mongoose.model('account', account);