const db = require('../config/db');

const User = {
    create: (userData, callback) => {
        const { name, email, phone, password } = userData;
        const sql = 'INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)';
        db.query(sql, [name, email, phone, password], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    },

    findByEmail: (email, callback) => {
        const sql = 'SELECT * FROM users WHERE email = ?';
        db.query(sql, [email], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    }
};

module.exports = User;
