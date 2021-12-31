var DataTypes = require("sequelize").DataTypes;
var _clientes = require("./clientes");
var _orden_detalles = require("./orden_detalles");
var _ordenes = require("./ordenes");
var _productos = require("./productos");

function initModels(sequelize) {
  var clientes = _clientes(sequelize, DataTypes);
  var orden_detalles = _orden_detalles(sequelize, DataTypes);
  var ordenes = _ordenes(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);

  ordenes.belongsTo(clientes, { as: "cliente", foreignKey: "clienteId"});
  clientes.hasMany(ordenes, { as: "ordenes", foreignKey: "clienteId"});
  orden_detalles.belongsTo(ordenes, { as: "orden", foreignKey: "ordenId"});
  ordenes.hasMany(orden_detalles, { as: "orden_detalles", foreignKey: "ordenId"});
  orden_detalles.belongsTo(productos, { as: "producto", foreignKey: "productoId"});
  productos.hasMany(orden_detalles, { as: "orden_detalles", foreignKey: "productoId"});

  return {
    clientes,
    orden_detalles,
    ordenes,
    productos,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
