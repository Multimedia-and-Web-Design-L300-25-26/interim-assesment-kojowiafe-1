const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');

// Route files
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cryptoRoutes = require('./routes/crypto');


dotenv.config();

// connect the database
connectDB();

const app = express();

app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: 'https://bucolic-melba-24fc14.netlify.app',
  credentials: true
}));

// routers
app.use('/api/auth', authRoutes);
app.use('/api/profile', userRoutes);
app.use('/api/crypto', cryptoRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
