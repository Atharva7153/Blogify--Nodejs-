const express = require('express');
const userController = require('../controllers/userController');


const router = express.Router();

router.get('/', userController.HomePage)

module.exports = router;