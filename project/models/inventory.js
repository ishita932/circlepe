const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    station_id: { type: String, required: true, unique: true },
    items: Map,
});

module.exports = mongoose.model('Inventory', inventorySchema);
