const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const label = new Schema({
    id: String,
    name: String,
  });

module.exports = mongoose.model('label', label);