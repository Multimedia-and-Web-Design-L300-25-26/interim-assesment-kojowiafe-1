const Crypto = require('../models/Crypto');

// @desc    Get all cryptocurrencies
// @route   GET /api/crypto
// @access  Public
const getCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find({});
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get top gainers
// @route   GET /api/crypto/gainers
// @access  Public
const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find({}).sort({ change24h: -1 }); // Sort descending
    res.json(gainers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get new listings
// @route   GET /api/crypto/new
// @access  Public
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find({}).sort({ createdAt: -1 }); // Sort newest to oldest
    res.json(newListings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Add new cryptocurrency
// @route   POST /api/crypto
// @access  Public (in real app this should be admin only, but per task requirements we make it public/accessible)
const createCrypto = async (req, res) => {
  const { name, symbol, price, image, change24h } = req.body;

  try {
    const cryptoExists = await Crypto.findOne({ symbol });

    if (cryptoExists) {
      return res.status(400).json({ message: 'Cryptocurrency already exists' });
    }

    const id = req.body.id || name.toLowerCase().replace(/\s+/g, '-');

    const crypto = await Crypto.create({
      id,
      name,
      symbol,
      price,
      image,
      change24h
    });

    res.status(201).json(crypto);
  } catch (error) {
    res.status(400).json({ message: 'Invalid data', error: error.message });
  }
};

module.exports = {
  getCryptos,
  getGainers,
  getNewListings,
  createCrypto,
};
