var express = require('express');
var router = express.Router();
var Rentals = require('../models/rental.schema');

router.get('/', function (req, res) {
    
    Rentals.find({}, function (errorMakingDatabaseQuery, data) {
        if (errorMakingDatabaseQuery) {
            console.log('error with listing find', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.send(data);
            // res.sendStatus(200);
        }
    })
});

router.post('/', function (req, res) {
    var addRental = new Rentals(req.body);
    addRental.save(function(errorMakingDatabaseQuery, data){
        if (errorMakingDatabaseQuery) {
            console.log('error with movie save', errorMakingDatabaseQuery);
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
    });
});

module.exports = router;