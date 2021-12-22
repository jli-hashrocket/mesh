const express = require('express');
const homeController = require('../controllers/home');

const router = express.Router();
//Home routes
router.get('/', homeController.index);
router.get('/home', homeController.index);

module.exports = router;