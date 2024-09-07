const Inventory = require('../models/inventory');

exports.getInventoryByStationId = async (req, res) => {
    try {
        const inventory = await Inventory.findOne({ station_id: req.params.stationId });
        if (!inventory) return res.status(404).json({ error: 'Station not found' });
        res.json(inventory);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving inventory' });
    }
};
