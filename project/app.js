const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/mongo');
const tradeRoutes = require('./routes/tradeRoutes');
const cargoRoutes = require('./routes/cargoRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');

dotenv.config();
const app = express();
app.use(express.json());

// MongoDB connection
connectDB();

// API Routes
app.use('/api/trades', tradeRoutes);
app.use('/api/cargo', cargoRoutes);
app.use('/api/inventory', inventoryRoutes);

module.exports = app;
