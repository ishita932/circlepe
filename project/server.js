const app = require('./app');
const dotenv = require('dotenv');
const mysql = require('./config/db');

// Load environment variables
dotenv.config();

// MySQL Connection Check
mysql.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1);
    }
    if (connection) {
        console.log('MySQL connected...');
        connection.release(); // Release the connection back to the pool
    }
});

// Start the server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
