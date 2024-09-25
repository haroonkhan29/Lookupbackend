const express = require('express');
const { register, login, getAllUsers, getUserByEmail } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', getAllUsers); 
router.get('/user/:email', getUserByEmail);

module.exports = router;
