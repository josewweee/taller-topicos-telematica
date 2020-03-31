module.exports = class Factura {
  constructor(numFactura, fechaFactura, cliente, estado) {
    this.numFactura = numFactura;
    this.fechaFactura = fechaFactura;
    this.cliente = cliente;
    this.estado = estado;
    this.items = new Array();
    this.totalFactura = 0;
  }

  //funciones para agregar y remover items de la lista
  agregarItem(item) {
    this.items.push(item);
    this.totalFactura += item.valorUnidad;
  }

  eliminarItem(item) {
    this.items = items.filter((x) => x.id != item.id);
  }
};
