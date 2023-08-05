const carService = require('../services/carService');

module.exports = {
    listAll: async (req, res) => {
        let json = {error: '', result:[]};

        let car = await carService.listAll();

        for(let i in car) {
            json.result.push({
                codigo: car[i].codigo,
                descricao: car[i].modelo
            });
        }
        res.json(json);
    },

    findCar: async (req, res) => {
        let json = {error: '', result:{}};

        let id = req.params.id;

        let car = await carService.findCar(id);

        if(car) {
            json.result = car;
        };

        res.json(json);
    },

    createCar: async (req, res) => {
        let json = {error: '', result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa) {
            let carId = await carService.createCar(modelo, placa);
            json.result = {
                codigo: carId,
                modelo,
                placa,
            };
        } else {
            json.error = 'Campos não enviados';
        };

        res.json(json);
    }
};