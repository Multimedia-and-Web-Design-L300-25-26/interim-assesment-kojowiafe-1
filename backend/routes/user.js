const express = require('express');
const { protect } = require('../middleware/auth');
const { getUserProfile } = require('../controllers/userController');
const router = express.Router();

router.get('/', protect, getUserProfile);

module.exports = router;
