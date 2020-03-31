const Cliente = require('./cliente');
const Factura = require('./factura.js');
const factoryMaker = require('./factoryMaker.js');
const FabricaItems = require('./fabricaItems.js');
const DaoFacturas = require('./daoFacturas.js');

class App {
  constructor() {
    this.BD = new DaoFacturas();

    //Mensaje bienvenida
    console.log(
      'Bienvenido, para crear mas clientes, mas facturas o manejar el CRUD debes de hacerlo desde el constructor de app.js, ahi encontraras los pasos'
    );

    //PRIMERO CREAMOS LOS CLIENTES USANDO LA SIGUIENTE ESTRUCTURA ( ID, NOMBRE, APELLIDO, SEXO, FECHA NACIMIENTO, ESTADO CIVIL)
    let cliente1 = this.crearNuevoCliente(
      0,
      'jose',
      'mira',
      'hombre',
      '25-05-1996',
      'soltero'
    );

    //SEGUNDO CREAMOS LAS FACTURAS USANDO LA SIGUIENTE ESTRUCTURA ( ID, FECHA, CLIENTE, ESTADO)
    let factura1 = this.crearNuevaFactura(0, '30-03-2020', cliente1, 'nueva');
    let factura2 = this.crearNuevaFactura(1, '1-02-2020', cliente1, 'creada');

    //TERCERO AGREGAMOS LOS ITEMS, LOS UNICOS ITEMS DISPONIBLES SON --> ( POLLO, RES, BROCOLI, MANZANA )
    this.agregarItemsAfactura('manzana', factura1);
    this.agregarItemsAfactura('pollo', factura1);
    this.agregarItemsAfactura('brocoli', factura1);

    this.agregarItemsAfactura('pollo', factura2);
    this.agregarItemsAfactura('brocoli', factura2);

    //CUARTO, PODEMOS INTERACTUAR CON LA BASE DE DATOS
    //LAS FUNCIONES DISPONIBLES SON --> crearFactura( factura ), listarFacturas(), borrarFactura( id ), leerFactura( id )
    this.BD.crearFactura(factura1);
    this.BD.crearFactura(factura2);

    console.log('Aqui tenemos un ejemplo inicial...');

    this.BD.listarFacturas();
    console.log('leemos la factura con el id 1');
    this.BD.leerFactura(1);
    this.BD.borrarFactura(1);
    this.BD.listarFacturas();
  }

  agregarItemsAfactura(item, factura) {
    let fabricaAbstracta = new factoryMaker();
    let FabricaItems = fabricaAbstracta.crearFabrica('items');
    let itemCreado = FabricaItems.crearItems(item);

    let FabricaTipoItems = fabricaAbstracta.crearFabrica('tipoItems');
    let tipoItem = FabricaTipoItems.crearTipoItems(itemCreado.tipoItem);
    itemCreado.tipoItem = tipoItem;
    factura.agregarItem(itemCreado);
    //¿QUIERES VER LAS DESCRIPCIONES DE LOS ITEMS DE LAS FACTURAS?
    console.log(factura.items);
  }

  crearNuevaFactura(id, fecha, cliente, estado) {
    return new Factura(id, fecha, cliente, estado);
  }

  crearNuevoCliente(
    id,
    nombre,
    apellido,
    genero,
    fechaNacimiento,
    estadoCivil
  ) {
    return new Cliente(
      id,
      nombre,
      apellido,
      genero,
      fechaNacimiento,
      estadoCivil
    );
  }
}

var app = new App();
