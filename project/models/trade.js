const db = require('../config/db');

const Trade = {
    create: async (tradeData) => {
        const query = `INSERT INTO trades (buyer, seller, items, total_cost) VALUES (?, ?, ?, ?)`;
        const [result] = await db.execute(query, [tradeData.buyer, tradeData.seller, JSON.stringify(tradeData.items), tradeData.total_cost]);
        return result;
    },
    findById: async (tradeId) => {
        const query = `SELECT * FROM trades WHERE trade_id = ?`;
        const [rows] = await db.execute(query, [tradeId]);
        return rows[0];
    }
};

module.exports = Trade;
