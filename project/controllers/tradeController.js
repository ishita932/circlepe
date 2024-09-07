const Trade = require('../models/trade');

exports.createTrade = async (req, res) => {
    const { buyer, seller, items, total_cost } = req.body;
    try {
        const trade = await Trade.create({ buyer, seller, items, total_cost });
        res.status(201).json({ trade_id: trade.insertId, status: 'Initiated' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Trade creation failed' });
    }
};

exports.getTradeById = async (req, res) => {
    try {
        const trade = await Trade.findById(req.params.transactionId);
        if (!trade) return res.status(404).json({ error: 'Trade not found' });
        res.json(trade);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error retrieving trade' });
    }
};
