const db = require('../db');

module.exports = {
    listAll: () => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM carros', (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });
        });
    },

    findCar: (id) => {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM carros WHERE codigo = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                if(results.length > 0) {
                    resolve(results[0]);
                } else {
                    resolve(false);
                }
            });
        });
    },

    createCar: (modelo, placa) => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO carros (modelo, placa) VALUES (?, ?)',
                [modelo, placa],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results.insertCodigo);
                });
        });
    },

    updateCar: (codigo, modelo, placa) => {
        return new Promise((resolve, reject) => {
            db.query('UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
                [modelo, placa, codigo],
                (error, results) => {
                    if(error) { reject(error); return;}
                    resolve(results);
                });
        });
    },

    deleteCar: (id) => {
        return new Promise((resolve, reject) => {
            db.query('DELETE FROM carros WHERE codigo = ?', [id], (error, results) => {
                if(error) { reject(error); return;}
                resolve(results);
            });
        });
    }
};