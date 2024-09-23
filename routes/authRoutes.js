const express = require('express');
const router = express.Router();
const { register, login, getAllUsers, getUserByEmail } = require('../controllers/authController');


router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers);
router.get('/user/:email', getUserByEmail);

module.exports = router;
