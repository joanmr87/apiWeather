const express = require('express');
const router = express.Router();
const currentController = require('../controllers/currentController');




router.get('/:city?', currentController.getCurrent);



module.exports = router;
