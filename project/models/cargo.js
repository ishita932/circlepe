const mongoose = require('mongoose');

const cargoSchema = new mongoose.Schema({
    shipment_id: { type: String, required: true, unique: true },
    origin: String,
    destination: String,
    items: Array,
    status: { type: String, default: 'Dispatched' },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Cargo', cargoSchema);
