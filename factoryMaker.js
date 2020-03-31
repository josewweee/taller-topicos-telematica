const FabricaItems = require('./fabricaItems');
const FabricaTipoItems = require('./fabricaTipoItems');

module.exports = class factoryMaker {
  constructor() {}

  crearFabrica(tipo) {
    var fabrica;

    switch (tipo) {
      case 'items':
        fabrica = new FabricaItems();
        break;
      case 'tipoItems':
        fabrica = new FabricaTipoItems();
        break;
      default:
        fabrica = null;
        break;
    }
    return fabrica;
  }
};
