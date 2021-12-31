var express = require('express');
var router = express.Router();

const sequelize = require('../models/index.js').sequelize;
var initModels = require("../models/init-models");
var models = initModels(sequelize); 

/* GET clientes. */
router.get('/clientes', (req, res, next) => {
  models.clientes.findAll({ 
     attributes: { exclude: ["updatedAt"] }
   })
   .then(clientes => {
      res.send(clientes)
   })
   .catch(error => res.status(400).send(error))
});

/* GET clientes by ID. */
router.get('/clientes/:idCliente', (req, res, next) => {

});

/* POST clientes */
router.post('/clientes', (req, res, next) => {

});

/* PUT clientes */
router.put('/clientes', (req, res, next) => {

});

/* DELETE clientes */
router.delete('/clientes', (req, res, next) => {

});

module.exports = router;
