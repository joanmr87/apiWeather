const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
console.log('llego a main')

router.get('/', mainController.main); 

module.exports = router;
