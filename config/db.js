const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST  ||'localhost',
    user: process.env.DB_USER ||'root',   
    password: process.env.DB_PASSWORD|| '',
    database: process.env.DB_NAME ||'lookup',
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        return;
    }
    console.log('MySQL connected');
});

module.exports = connection;
