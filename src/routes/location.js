const express = require('express');
const router = express.Router();
const location = require('../utils/location');




router.get('/', location.getLocation);



module.exports = router;
