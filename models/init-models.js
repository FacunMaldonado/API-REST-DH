var DataTypes = require("sequelize").DataTypes;
var _artistas = require("./artistas");

function initModels(sequelize) {
  var artistas = _artistas(sequelize, DataTypes);


  return {
    artistas,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
