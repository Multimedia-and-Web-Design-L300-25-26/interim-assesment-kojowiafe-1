const mongoose = require('mongoose');

const cryptoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
  },
  symbol: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  change24h: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: false,
  },
  marketCap: {
    type: Number,
    default: 0
  },
  volume24h: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: ''
  }
}, {
  timestamps: true,
});

const Crypto = mongoose.model('Crypto', cryptoSchema);

module.exports = Crypto;
