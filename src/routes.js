const express = require('express');
const router = express.Router();

const CarController = require('./controllers/carController');

router.get('/carros', CarController.listAll);
router.get('/carros/:id', CarController.findCar);
router.post('/carros', CarController.createCar);

module.exports = router;