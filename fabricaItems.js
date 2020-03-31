const Manzana = require('./manzana');
const Pollo = require('./pollo');
const Brocoli = require('./brocoli');
const Res = require('./res');

module.exports = class FabricaItems {
  constructor() {}

  crearItems(tipo) {
    var item;
    switch (tipo) {
      case 'manzana':
        item = new Manzana();
        break;
      case 'pollo':
        item = new Pollo();
        break;
      case 'brocoli':
        item = new Brocoli();
        break;
      case 'res':
        item = new Res();
        break;
      default:
        item = null;
        alert('Item erroneo');
        break;
    }
    return item;
  }
};
