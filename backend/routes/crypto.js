const express = require('express');
const { getCryptos, getGainers, getNewListings, createCrypto } = require('../controllers/cryptoController');
const router = express.Router();

router.route('/')
  .get(getCryptos)
  .post(createCrypto);

router.get('/gainers', getGainers);
router.get('/new', getNewListings);

module.exports = router;
