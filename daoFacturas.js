module.exports = class DaoFacturas {
  constructor() {
    if (typeof DaoFacturas.instance === 'object') {
      return DaoFacturas.instance;
    }

    this.BDfacturas = new Array();
    DaoFacturas.instance = this;
    return this;
  }

  crearFactura(factura) {
    this.BDfacturas.push(factura);
    console.log('Factura Añadida a BD NoSql...');
  }

  borrarFactura(id) {
    this.BDfacturas = this.BDfacturas.filter((x) => x.numFactura != id);
    console.log(
      'Factura con id = ' +
        id +
        ' borrada de BD NoSql, usar funcion listarFacturas() para ver el cambio...'
    );
  }

  modificarFactura(factura) {}

  leerFactura(id) {
    let respuesta = this.BDfacturas.filter((x) => x.numFactura == id);
    console.log(respuesta);
  }

  listarFacturas() {
    console.log('Facturas de BD NoSql...');
    console.log(this.BDfacturas);
  }
};
