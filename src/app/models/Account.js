const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const account = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
  });

module.exports = mongoose.model('account', account);