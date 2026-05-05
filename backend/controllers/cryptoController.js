const Crypto = require('../models/Crypto');

// Get all cryptocurrencies
const getCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find();
    res.json(cryptos);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get top gainers
const getGainers = async (req, res) => {
  try {
    const gainers = await Crypto.find();
    res.json(gainers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get new listings
const getNewListings = async (req, res) => {
  try {
    const newListings = await Crypto.find({}).sort({ createdAt: -1 }); // Sort newest to oldest
    res.json(newListings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Add new cryptocurrency
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
