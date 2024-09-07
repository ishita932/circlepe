const express = require('express');
const router = express.Router();
const tradeController = require('../controllers/tradeController');

router.post('/', tradeController.createTrade);
router.get('/:transactionId', tradeController.getTradeById);

module.exports = router;
