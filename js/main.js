/* Comentarios en bloque (son comentarios con varias líneas)
como este*/
// Comentarios en línea

//Código fuente Jquery mediante JavaScript

// Características de la sintaxis JavaScript
// - Ignora los espacios en blanco
// - Es tipo case-sensitive (distingue mayúsculas de minúsculas)
// - Las instrucciones y sentencias finalizan con punto y coma (opcional)

// Variables en JavaScript (almacena los datos)

/* Identificadores:

- Tienen que comenzar por vocal o bien por símbolo $ o _
- No se pueden usar palabras reservadas
- (Buenas prácticas) utilizar camelCase primero minúscula y luego mayúscula (primerApellido)
- (Buenas prácticas) utilizar nombres semánticos

*/

// Declarión de variables en JavaScript

// - Con la palabra reservada let (6 EMACScritp5)

let primerApellido;

// - Asignación de valores

primerApellido = "Miaja";

primerApellido = "Pérez";

// - Inicialización de variables (declaración + asignación)

let telefono = 924285217;

// - Puede declarar varias variables a la vez

let email, codigoPostal, localidad;

// - Constantes

const urlPedidos = "https://www.google.es";

// - Declaración versión clásica con la palabra reservada var

var nombre = "Juan";

nombre = "Pedro";

// - Declaración e inicialización global (no se usa palabra reservada)

numPasaporte = "6866232565-H"; //Mala practica

// Imprimir por consola una variable
console.log(nombre);

/* Tipos de Datos
- El tipado de datos es débil y dinámico
*/

let mail = "dmiaper@hotmail.com";

mail = 202;

// Tipos de datos primitivos:

// - String o cadena de caracteres (Comillas dobles o simples)

let ciudad = "Villa de \n Madrid";
let calle = "Avd. O'Donel";

// - Números en todos los tipos disponibles: enteros, flotantes, exponenciales, etc...

let edad = 20;
let peso = 80.5;

// - Booleano (falso/verdadero)

let existes = false;

// - Undefined (variable sin declarar - no esta definido el tipo)

let marca;

// - Null (tipo-valor)

let lugar = null;

// Operadores

// Operadores aritméticos:
// - (+ y -) suma y resta

let resultado = 6;
let factorCorrecion = 2;

let puntuacion = resultado - factorCorrecion;
console.log(puntuacion);
// - Operador suma en el caso de tipos string los concatena

// - (* y /) multiplicación y división

let a = 10;
let b = 2;

resultado = a / b;
console.log(resultado);
resultado = a * b;
console.log(resultado);

// - (%) muestra el resto de una división
let resto = 13 % 2;
console.log(resto);

// - (++) Incremento [suma una unidad al valor de la variable]
let c = 1;

//según donde se coloque el incremento se sumará antes o después
console.log(c++); //1
console.log(++c); //3

// - (--) Decremento [resta una unidad al valor de la variable]
let d = 10;

//según donde se coloque el decremento se restará antes o después
console.log(d--); //10
console.log(--d); //8

// Procedencia de operaciones
// - De derecha a izquierda y el mismo criterio que matematícas
resultado = 12 + 3 * 8; //Primero la multiplicación y luego la suma = 36
console.log(resultado);

// - Romper la precedencia de operadores
resultado = (12 + 3) * 8; //Primero se suma y luego se multiplica = 120
console.log(resultado);

// Operadores de asignación

// - (=) Asignación
// - Asignación de adición
let puntuacion1 = 4;
let puntuacion2 = 9;

puntuacion1 = +puntuacion2; //suma el valor de la variable puntuacion1 y puntuacion2 (no hace falta incluir la variable puntuacion1)
console.log(puntuacion1);

// - (-=) (*=) (/=) (%=)

// - Operadores de comparación
// - (==) Operadores de igualdad

let caEspania = "Madrid";
let caPortugal = "Lisboa";

let hayCoincidencia = caEspania == caPortugal;
console.log(hayCoincidencia);
caPortugal = "Madrid";
hayCoincidencia = caEspania == caPortugal;
console.log(hayCoincidencia);

// - No es esctricto con los tipos de datos

a = 1;
b = "3";

hayCoincidencia = a == b; //false
console.log(hayCoincidencia);
b = "1";
hayCoincidencia = a == b; //true
console.log(hayCoincidencia);

// - (===) Operador de igualdad estricto [Compara el tipo de dato y si es igual el valor]

hayCoincidencia = a === b; //false
console.log(hayCoincidencia);

// - (!=) Operador de desigualdad
// - (!==) Operador de desigualdad estricta [Compara el tipo de dato y si es igual el valor.]

hayCoincidencia = a != b;
console.log(hayCoincidencia); //false
b = "2";
hayCoincidencia = a != b;
console.log(hayCoincidencia); //true
hayCoincidencia = a !== b;
console.log(hayCoincidencia); //true

// - (<) Operador menor que
hayCoincidencia = a < b;
console.log(hayCoincidencia); //true
// - (>) Operador mayor que
hayCoincidencia = a > b;
console.log(hayCoincidencia); //false
// - (<=) Operador menor igual que
hayCoincidencia = a <= b;
console.log(hayCoincidencia); //ture
// - (>=) Operador mayor igual que
hayCoincidencia = a >= b;
console.log(hayCoincidencia); //false

// Operadores lógicos
// - (&&) Operador lógico AND [La comparación para ser TRUE tiene que cumplir los dos condiciones]
a = 1;
b = 2;
c = 3;
d = 4;

resultado = a < b && c === d; //false
console.log(resultado);

// - (||) Operador lógico OR [La comparación para ser TRUE tiene que cumplir solo una condición]
resultado = a < b || c == d; //true
console.log(resultado);

// Estructuras de control de flujo:
// - (if) Estructura condicional - Sin corchetes {} tambien funciona
let aNombre = "lucia";
let aEdad = 17;
let aMayorEdad;

if (aEdad >= 18) {
  aMayorEdad = true;
  console.log(aNombre + " es mayor de edad");
}
// - (if - else) Estructura condicional, segun si es true o false

if (aEdad >= 18) {
  aMayorEdad = true;
  console.log(aNombre + " es mayor de edad");
} else {
  console.log(aNombre + " es menor de edad");
}

// - (if - else if - else)

if (aEdad == 18) {
  aMayorEdad = true;
  console.log(aNombre + " acaba de entrar en la mayoria de edad");
} else if (aEdad >= 18) {
  console.log(aNombre + " es mayor de edad");
} else {
  console.log(aNombre + " es menor de edad");
}

// - (switch) Estructura condicional (recomendada para realizar menús)
let diasSemana = 3;

// - Se evaluan todos los casos hata encontrar breack
switch (diasSemana) {
  case 1:
    console.log("Hoy es Lunes");
    break;
  case 2:
    console.log("Hoy es Martes");
    break;
  case 3:
    console.log("Hoy es Miércoles");
    break;
  case 4:
    console.log("Hoy es Jueves");
    break;
  case 5:
    console.log("Hoy es Viernes");
    break;
  case 6:
    console.log("Hoy es Sábado");
    break;
  case 7:
    console.log("Hoy es Domingo");
    break;
  default:
    console.log("No existe ese día indicado");
    break;
}

// Estructuras Iterativas (Bucles)
// (for) Bucle

let contar = 0;

for (contar; contar < 10; contar++) {
  console.log(contar);
}

// - (while) Bucle mientras se cumpla la condición

while (contar == 10) {
  console.log(contar);
  contar++;
}

contar = 0;
// - (do - while) Se ejecuta el ciclo y luego se evalua
do {
  contar++;
  console.log(contar);
} while (contar <= 10);

// Funciones en JavaScript

function ajustarContar(contar) {
  console.log(contar);

  if (contar < 10) {
    for (contar; contar < 10; contar++) {
      console.log("estoy contando");
    }
    console.log("Ahora ya valgo 10");
  } else if (contar === 10) {
    console.log("Ya soy 10 no puedo seguir sumandome");
  } else {
    console.log("Ahora valgo " + contar);
    for (contar; contar > 10; contar--) {
      console.log("estoy restando mi valor para valer 10");
    }
    console.log("Ahora si valgo " + contar);
  }
}
a = 25;
ajustarContar(a);

// Funciones anonimas
let funPrueba = function (a) {
  return a * a;
};

console.log(funPrueba(6));

// Funciones flecha (ECMAScript 6 2015)
//si tiene un parametro se puede utilizar sin paréntesis

let menosIVA = (a) => {
  return a * a - a * a * 0.21;
};

console.log(menosIVA(8));

// Funcion flecha seguida palabras reservadas
let masIVA = (a, b) => a + b + (a + b) * 0.21;

console.log(masIVA(21, 35));

// - Asignación de tipo de dato ARRAY (arreglos)

let frutas = ["pera", "manzana", "limón", "naranja", "platano"];

// - Lectura de array
console.log(frutas);

// - Asignación nuevo valor a una posición y lectura e según posición
frutas[2] = "kiwi";
console.log(frutas[2]);

// Objetos

let player1 = {
  nombre: "Pedro",
  apellidos: "Martínez Sánchez",
  id: "PMARSAN",
  score: 35200,
  equipo: "Dream",
  nuevoScore(a) {
    this.score = this.score + a;
  },
};

// - Consultar nombre objeto
console.log(player1.nombre);
console.log(player1.score);

// - Insertar nueva puntuación
player1.nuevoScore(250);

// - Consultar nueva puntuación
console.log(player1.score);

// 2ª Forma para declarar objetos con Objet
let player2 = new Object();

// - Asignar variables y valores al nuevo Objeto
player2.nombre = "Carlos";
player2.apellidos = "Ramiro Jaquete";
player2.id = "CRAMJAQ";
player2.score = 45200;
player2.equipo = "Galáctica";

// - Crear función para Objeto
player2.nuevoScore = function (a) {
  this.score = this.score + a;
};

// - Insertar nueva puntuación y consultar valores de player 2
player2.nuevoScore(340);
console.log(player2);

// 3ª Forma de para declarar Objetos mediante funcion constructiva
function Jugador(nombreIn, apellidosIn, idIn, scoreIn, equipoIn) {
  this.nombre = nombreIn;
  this.apellidos = apellidosIn;
  this.id = idIn;
  this.score = scoreIn;
  this.equipo = equipoIn;

  this.nuevoScore = function (scoreIn) {
    this.score = this.score + scoreIn;
  };
}

// - Decalarar nuevo Objeto el constructor
let jugador1 = new Jugador("Carla", "Gil García", "CGILGAR", 48581, "Rabbit");

// - Consultar Jugador 1
console.log(jugador1);

// - Asignar nuevo score
jugador1.nuevoScore(454);

// - Consultar Jugador 1
console.log(jugador1);

// 4ª Forma de declarar Objetos
function Player(nombre, apellidos, id, score, equipo) {
  return {
    nombre,
    apellidos,
    id,
    score,
    equipo,
  };
}

// - Crear nuevo empleado

let player3 = Player("Martín", "Miaja Rosa", "MMIAROS", 25445, "Flax");
console.log(player3);

// (Class) Clases
// - Declaración de Clases (ECMA6)
class Vehicle {
  constructor(marcaIn, modeloIn, colorIn, precioIn) {
    this.marca = marcaIn;
    this.modelo = modeloIn;
    this.color = colorIn;
    this.precio = precioIn;
  }

  getColor() {
    return this.color;
  }

  setColor(color) {
    this.color = color;
  }
  getPrecio() {
    return this.precio;
  }

  getPrecioConIVA(tasaIn) {
    return this.precio + this.precio * tasaIn;
  }
}

// - Instanciar una Clase
let vehiculo1 = new Vehicle("BMW", "320 CC", "negro", 30252);
console.log(vehiculo1);

console.log(vehiculo1.getPrecio() + " sin IVA");
console.log(vehiculo1.getPrecioConIVA(0.21) + " con IVA");

// Propiedades privadas en JS
class Moto {
  marca; //publica
  modelo; //publica
  color; //publica
  precio; //publica
  #numChasis; //privada
  #registro; //privada

  constructor(marcaIn, modeloIn, colorIn, precioIn) {
    this.marca = marcaIn;
    this.modelo = modeloIn;
    this.color = colorIn;
    this.precio = precioIn;
  }

  getMoto() {
    return (
      "Marca: " +
      this.marca +
      " - Marca: " +
      this.modelo +
      " - Color: " +
      this.color +
      " - Precio: " +
      this.precio
    );
  }

  getMarca() {
    return this.marca;
  }
  getModelo() {
    return this.modelo;
  }

  getColor() {
    return this.color;
  }

  getPrecio() {
    return this.precio;
  }

  getPrecioConIVA(tasaIn) {
    return this.precio + this.precio * tasaIn;
  }

  getNumChasis() {
    return this.#numChasis;
  }

  setColor(color) {
    this.color = color;
  }

  setNumChasis(numChasis) {
    this.#numChasis = numChasis;
  }

  //GET and SET otra forma

  get registro() {
    return this.#registro;
  }

  set registro(reg) {
    this.#registro = reg;
  }
}

// - Instanciar una Clase
let moto1 = new Moto("Kawasaki", "750 CC", "Monocromo", 12000);
console.log(moto1);

console.log(moto1.getPrecio() + " sin IVA");
console.log(moto1.getPrecioConIVA(0.21) + " con IVA");

moto1.setNumChasis("EE1258E82DA");

console.log(moto1.getNumChasis());

// GET and SET JS
// - La diferencia es al nombrar y al inserar el valor

moto1.registro = "Pedro Cruz Sánchez";
console.log(moto1.registro); //No se le agregan parentesis solo el nombre del atributo.

// Herencias de Clases de JavaScript

class Triciclo extends Moto {
  constructor(marcaIn, modeloIn, colorIn, precioIn, numRuedasIn) {
    //Tributos heredados de la clase moto
    super(marcaIn, modeloIn, colorIn, precioIn);
    //Tributos propios
    this.numRuedas = numRuedasIn;
  }

  //Mostrar tributos de la clase con herencia de la Clase moto
  getTriciclo() {
    return super.getMoto() + " - Número de ruedas: " + this.numRuedas;
  }
}

let triciclo1 = new Triciclo("Kids", "tribike", "azul", 12.2, 3);

console.log(triciclo1.getTriciclo());
/*



*/
/*
$("document").ready(function () {
  // modificar el estilo de la barra de navegacioón
  $(window).on("scroll", function () {
    let position = $("#ini").offset();
    if ($(window).scrollTop() >= position.top) {
      $("header").removeClass("transparente");
    } else {
      $("header").addClass("transparente");
    }
  });

  // Desplegar menú lateral
  $("#burger").click(function () {
    $("#burger").toggleClass("abierto");
    $(".menu").toggleClass("abierto");
  });

  //smooth scroll
  $("a").on("click", function () {
    if (this.hash !== "") {
      let hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800
      );
    }
  });
});
*/
