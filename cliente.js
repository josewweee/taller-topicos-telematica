module.exports = class Cliente {
  constructor(id, nombre, apellido, genero, fechaNacimiento, estadoCivil) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.genero = genero;
    this.fechaNacimiento = fechaNacimiento;
    this.estadoCivil = estadoCivil;
  }
};
