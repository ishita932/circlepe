const Cargo = require('../models/cargo');

exports.createCargo = async (req, res) => {
    const { origin, destination, items } = req.body;
    const shipmentId = `SHIP-${Date.now()}`;
    try {
        const newCargo = new Cargo({ shipment_id: shipmentId, origin, destination, items });
        await newCargo.save();
        res.status(201).json({ shipment_id: shipmentId, status: 'Dispatched' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create cargo shipment' });
    }
};

exports.getCargoById = async (req, res) => {
    try {
        const cargo = await Cargo.findOne({ shipment_id: req.params.shipmentId });
        if (!cargo) return res.status(404).json({ error: 'Cargo not found' });
        res.json(cargo);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving cargo' });
    }
};
