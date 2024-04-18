saludar();

// funciones

// reglas y convenciones
// nombres: caracter al principio diferente de número, punto, coma, guón medio
// cualquier caracter no especial (ñ, -`+*)
// sintaxis
// function name() {}

const nombre = "pedro";
console.log("mi nombre es: ", nombre);

// impresión de un mensaje
function saludar(){
  // console.info("Hola1");
  alert("hola");
  // saludar();
}

const numero2 = 45;

// Parametros
function sumaNumeros(numero1 = 0, numero2 = 3.14, numero3) {
  numero1 = !numero1 ? 0 : numero1;
  numero2 = !numero2 ? 3.14 : numero2;
  console.log(numero1)
  console.log(numero2)
  console.log(numero3)
  console.log(numero1 + numero2 + numero3); 
}

sumaNumeros(undefined, undefined, 2); // 5.14


// Parametros rest
function sumarest(...numeros) {
  console.log("num", numeros)
} 


sumarest(5,6,7,8,8,9,3,3,2,2,2);

// funcion anónima
// function() {}
// asignandolas a una variable o a una propiedad

// nos diga si una persona puede votar
const evaluaEdad = function(edad) {
  if (edad < 18) {
    alert("No puedes votar")
    return
  }

  alert("Puedes votar")

};

evaluaEdad(18);

// objetos
// propiedades y metodos

const maria = {
  nombre: "maria",
  hablar: function(){}
}

maria.hablar();

// return

// Parametros
function sumaNumeros(numero1 = 0, numero2 = 3.14, numero3) {
  // numero1 = !numero1 ? 0 : numero1;
  // numero2 = !numero2 ? 3.14 : numero2;
  console.log(numero1)
  console.log(numero2)
  console.log(numero3)
  return numero1 + numero2 + numero3
}

const resultado = sumaNumeros(undefined, undefined, 2); // 5.14


// funciones de flecha - arrow functions
// one liner, sintaxis de una línea 
// return implicito
// sintaxis = () => {}
// _ para especificar que un parametro no se ocupa

const funcion = (numero1 = 0, numero2 = 3.14, numero3) => numero1 + numero2 + numero3

console.log("arrow---", funcion(undefined, undefined, 2))

const funcion1= (numero1 = 0, numero2 = 3.14, numero3) => {
  console.log(numero1)
  console.log(numero2)
  console.log(numero3)
  return numero1 + numero2 + numero3
};

const funcion2 = (_, parametro) => alert("desde una arrowfunction "+parametro)

funcion2("accion", "ahora");



