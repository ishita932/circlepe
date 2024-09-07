const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');

router.get('/:stationId', inventoryController.getInventoryByStationId);

module.exports = router;
