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
      res.status(500).send({message: "No se encontró el cliente con el id=" + id});
   });
});

/* POST clientes */
router.post('/clientes', (req, res, next) => {
   // Validar que no esté vacío
   if (!req.body.nombre) {
      res.status(400).send({message: "Contenido vacío!"});
      return;
   }
  
   // Crear un cliente
   const cliente = {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fechaNacimiento: req.body.fechaNacimiento,
      estado: req.body.estado ? req.body.estado : false
   };
  
   // Guardar cliente
   models.clientes.create(cliente)
   .then(data => {
      res.send(data);
   })
   .catch(err => {
      res.status(500).send({message: err.message || "Error al crear nuevo cliente"});
   });
});

/* PUT clientes */
router.put('/clientes', (req, res, next) => {

});

/* DELETE clientes */
router.delete('/clientes', (req, res, next) => {

});

module.exports = router;
