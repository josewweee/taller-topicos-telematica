const Carnes = require('./carnes');
const Verduras = require('./verduras');
const Frutas = require('./frutas');

module.exports = class FabricaTipoItems {
  constructor() {}

  crearTipoItems(tipo) {
    var instanciaTipoItem;
    switch (tipo) {
      case 'carnes':
        instanciaTipoItem = new Carnes();
        break;
      case 'verduras':
        instanciaTipoItem = new Verduras();
        break;
      case 'frutas':
        instanciaTipoItem = new Frutas();
        break;
      default:
        instanciaTipoItem = null;
        alert('Tipo de item erroneo');
        break;
    }
    return instanciaTipoItem;
  }
};
