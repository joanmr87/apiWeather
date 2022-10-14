const express = require('express');
const router = express.Router();
const location = require('../controllers/locationController');




router.get('/', location.getLocation);



module.exports = router;
