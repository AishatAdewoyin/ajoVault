const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); // Ensure this path is correct

// Login User
router.post('/login', authController.loginUser);

module.exports = router;