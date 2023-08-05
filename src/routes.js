const express = require('express');
const router = express.Router();

const CarController = require('./controllers/carController');

router.get('/carros', CarController.listAll);
router.get('/carros/:id', CarController.findCar);
router.post('/carros', CarController.createCar);
router.put('/carros/:id', CarController.updateCar);
router.delete('/carros/:id', CarController.deleteCar);

module.exports = router;
