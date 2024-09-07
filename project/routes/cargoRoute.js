const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

router.post('/', cargoController.createCargo);
router.get('/:shipmentId', cargoController.getCargoById);

module.exports = router;
