const express = require('express'); // Make sure to import express
const userController = require('../controllers/UserController');
const router = express.Router(); // Create a router instance
const smoothieController = require('../controllers/SmoothieController');


router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/smoothies', smoothieController.getAllSmoothies )

module.exports = router; 