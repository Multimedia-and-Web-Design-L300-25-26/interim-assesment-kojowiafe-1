require('dotenv').config();
const mongoose = require('mongoose');
const Crypto = require('./models/Crypto');

const cryptoData = [
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: 67845.32,
    change24h: 2.45,
    marketCap: 1329000000000,
    volume24h: 28500000000,
    description: 'Bitcoin is the world\'s first decentralized cryptocurrency...',
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    symbol: 'ETH',
    price: 3542.18,
    change24h: 3.67,
    marketCap: 425000000000,
    volume24h: 15800000000,
    description: 'Ethereum is a decentralized, open-source blockchain platform...',
  },
  {
    id: 'tether',
    name: 'Tether',
    symbol: 'USDT',
    price: 1.00,
    change24h: 0.01,
    marketCap: 95000000000,
    volume24h: 42000000000,
    description: 'Tether is a stablecoin cryptocurrency that aims to maintain a 1:1 value ratio with the US Dollar.',
  },
  {
    id: 'binance-coin',
    name: 'Binance Coin',
    symbol: 'BNB',
    price: 612.85,
    change24h: 1.89,
    marketCap: 89000000000,
    volume24h: 1800000000,
    description: 'Binance Coin is the native cryptocurrency of the Binance ecosystem...',
  },
  {
    id: 'solana',
    name: 'Solana',
    symbol: 'SOL',
    price: 178.42,
    change24h: 5.23,
    marketCap: 78000000000,
    volume24h: 3200000000,
    description: 'Solana is a high-performance blockchain platform...',
  },
  {
    id: 'usdc',
    name: 'USD Coin',
    symbol: 'USDC',
    price: 1.00,
    change24h: 0.00,
    marketCap: 32000000000,
    volume24h: 5600000000,
    description: 'USD Coin is a fully-backed stablecoin pegged to the US Dollar...',
  },
  {
    id: 'cardano',
    name: 'Cardano',
    symbol: 'ADA',
    price: 0.68,
    change24h: -1.23,
    marketCap: 24000000000,
    volume24h: 850000000,
    description: 'Cardano is a proof-of-stake blockchain platform...',
  },
  {
    id: 'ripple',
    name: 'XRP',
    symbol: 'XRP',
    price: 0.52,
    change24h: 1.45,
    marketCap: 28000000000,
    volume24h: 1200000000,
    description: 'XRP is a digital payment protocol...',
  },
  {
    id: 'dogecoin',
    name: 'Dogecoin',
    symbol: 'DOGE',
    price: 0.15,
    change24h: -2.34,
    marketCap: 21000000000,
    volume24h: 980000000,
    description: 'Dogecoin started as a meme cryptocurrency...',
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    symbol: 'DOT',
    price: 7.28,
    change24h: 3.12,
    marketCap: 9500000000,
    volume24h: 320000000,
    description: 'Polkadot is a multi-chain blockchain platform...',
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/coinbase-clone');
    console.log('MongoDB connected for seeding');
    
    await Crypto.deleteMany(); // Clear existing data
    await Crypto.insertMany(cryptoData);
    console.log('Crypto data seeded successfully');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedDB();
