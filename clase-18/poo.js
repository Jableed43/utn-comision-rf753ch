//autos
//propiedades o atributos
//clave: valor
//key: value
//Mi dato numerico: ¿Es incrementable-disminuible?
//¿Pensas realizarle alguna operacion matematica?

//Preguntas de negocio
//Quiero ver los autos con 20 años de antiguedad o mas
//quiero los 5 autos mas viejos
//quiero los 5 autos mas nuevos

let fiat = {
  marca: "fiat",
  modelo: "siena",
  año: 2005,
  km: 200000,
  color: "rojo",
  motor: "1.6",
  combustible: "nafta",
  gnc: true,
  precio: 5000000,
};

let volkswagen = {
  marca: "volkswagen",
  modelo: "gol",
  año: 2013,
  km: 60000,
  color: "gris",
  motor: "1.6",
  combustible: "nafta",
  gnc: false,
  precio: 8000000,
};

//Molde

class Auto {
  //El constructor reune las propiedades iniciales que quiero del auto
  //Dentro del constructor tenemos parametros para la creacion de la instancia

  //Encendido es otra propiedad, aunque se define por defecto y no por parametro
  encendido = false;
  velocidad = 0;
  constructor(marca, modelo, anio, km, color, motor, combustible, gnc, precio) {
    //Inicializar las propiedades con sus valores
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.km = km;
    this.motor = motor;
    this.color = color;
    this.combustible = combustible;
    this.gnc = gnc;
    this.precio = precio;
  }

  //Metodos
  encenderApagar() {
    if (this.encendido === false) {
      console.log("El auto se ha encendido");
      return (this.encendido = true);
    } else {
      console.log("El auto se ha apagado");
      return (this.encendido = false);
    }
  }

  cambiarColor(color) {
    this.color = color;
    console.log(`El auto ha cambiado al color ${color}`);
    return this.color;
  }

  acelerar(arranque) {
    if (this.encendido === true) {
      this.velocidad = Number(arranque) + this.velocidad;
      console.log(
        `El auto aumento su velocidad en ${arranque}, va a ${this.velocidad}km/h`
      );
    } else {
      this.encenderApagar();
      this.velocidad = Number(arranque) + this.velocidad;
      console.log(
        `El auto aumento su velocidad en ${arranque}, va a ${this.velocidad}km/h`
      );
    }
  }

  frenar(desacelerar) {
    if (this.encendido === true) {
      this.velocidad = this.velocidad - Number(desacelerar);
      console.log(
        `El auto ha desacelerado su velocidad en ${desacelerar}, va a ${this.velocidad}km/h`
      );
    } else {
      this.encenderApagar();
      this.velocidad = this.velocidad - Number(desacelerar);
      console.log(
        `El auto ha desacelerado su velocidad en ${desacelerar}, va a ${this.velocidad}km/h`
      );
    }
  }
}

let golcito = new Auto(
  "volkswagen",
  "gol power",
  2008,
  60000,
  "negro",
  "1.6",
  "nafta",
  false,
  10000000
);

golcito.acelerar(200);
golcito.frenar(20);
golcito.frenar(30);
golcito.frenar(50);
golcito.frenar(100);
golcito.encenderApagar();

//Estado: es el valor de una propiedad en un momento dado
// Binario (Valores absolutos): encendido-apagado
// Cuantitativo (Es medible) : velocidad
