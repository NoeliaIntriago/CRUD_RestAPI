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
   const id = req.params.idCliente;

   models.clientes.findByPk(id)
   .then(data => {
      if (data) {
         res.send(data);
      } else {
         res.status(404).send({message: `No se encontró el cliente con el id=${id}.`});
      }
   })
   .catch(err => {
      res.status(500).send({message: "Error retrieving Tutorial with id=" + id});
   });
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
