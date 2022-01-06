const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const product = new Schema({
    name: String,
    price: Number,
    description: String,
    image: String,
    label: String,
    sold: Number,
    rate: { type: Number, default: 5, min:0, max:5 },
    sale: { type: Number, default: 0, min:0, max:100 },
  });

  module.exports = mongoose.model('product', product);