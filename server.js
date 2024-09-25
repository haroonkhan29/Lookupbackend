const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db'); 
require('dotenv').config();

const app = express();

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.message);
        process.exit(1);
    } else {
        console.log('MySQL connected');
    }
});

app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', require('./routes/authRoutes'));

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
