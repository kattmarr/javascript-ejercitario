// Operadores de comparación
// 1. Comprueba si 10 es mayor o igual que 9 e imprime el resultado en consola.
function compareTenAndNine() {
    console.log(10>=9);
    
}
compareTenAndNine();
// 2. Comprueba si 0 es igual a 0 e imprime el resultado en consola.
function compareZeroAndZero() {
    console.log(0===0);
}
compareZeroAndZero();
// 3. Comprueba si 7 es mayor que 8 y menor que 10, e imprime el resultado en consola.
function compareSeven() {
   console.log(7>8 && 7 < 10);
}
compareSeven();
// Operadores lógicos
// 4. Verifica si puedes comprar un producto de 1500 con un descuento del 25% teniendo 1150€ e imprime si puedes o no.
function canBuyProduct() {
  let productPrice = 1500;
  let discount = 0.25;
  let availableMoney = 1150;

  // Calculamos el precio después del descuento
  let finalPrice = productPrice * (1 - discount);

  // Verificamos si puedes comprarlo
  if (availableMoney >= finalPrice) {
    console.log("Sí, puedes comprar el producto.");
  } else {
    console.log("No, no puedes comprar el producto.");
  }


}
canBuyProduct(); 
// Variables
// 5. Crea una variable llamada `mensaje` y asígnale el valor "Hola JavaScript", luego imprime la variable en consola.
function createMessageVariable() {
    let mensaje = "Hola JavaScript";
    console.log(mensaje);
}
createMessageVariable();
// 6. Crea una variable llamada `resultado` y asígnale la suma de 2 y 3, luego imprime la variable en consola.
function createSumVariable() {
    let resultado = 2+3;
    console.log(resultado);
}
createSumVariable();
// 7. Crea una constante llamada `IS_DISABLED` y asígnale el valor booleano `true`, luego imprime la constante en consola.
function createDisabledConstant() {
  const IS_DISABLED = true; // Creamos la constante con valor booleano true
  console.log(IS_DISABLED); // Imprimimos el valor de la constante
}

createConstant(); 
// Null y Undefined
// 8. Crea una variable con `let` llamada `capacidad` y asígnale un valor `null`, luego imprime la variable en consola.
function createNullVariable() {
  let capacidad = null; // Asignamos null a la variable
  console.log(capacidad); // Imprimimos el valor de la variable

}
createNullVariable(); 
// 9. Crea una variable con `let` llamada `dinero` y asígnale un valor `undefined`, luego imprime la variable en consola.
function createUndefinedVariable() {
  let dinero = undefined;
    console.log(dinero);
}
createUndefinedVariable();
// typeof
// 10. Escribe un código para ver el tipo de una variable llamada `userName` e imprime el tipo de dato en consola.
function checkUserNameType() {
    let userName = "katt";
    console.log(typeof userName);
}
checkUserNameType();
// 11. Asegúrate de que `dogId` es una cadena de texto y luego imprime el tipo de dato en consola.
function checkDogIdIsString() {
  let dogId = 123;
  dogId = String(dogId); // Convertimos a cadena de texto
  console.log(typeof dogId); // Imprimimos el tipo de dato
}

checkDogIdType(); // Llamás a la función



// console.log()
// 12. Imprime un mensaje en la consola utilizando `console.log()`.
function logMessage() {
    console.log("Hola, me llamo Kathia pero pueden decirme Katt");
}

// 13. Utiliza `console.log()` para imprimir el valor de la variable `edad` que tiene el valor 30.
function logAge() {
    let edad = 30;
    console.log(edad);
}
logAge();
// 14. Muestra el mensaje 'La versión de JavaScript es' seguido de la variable `version` con el valor 2024 usando `console.log()`.
function logVersion() {
  let version = 2024; 
  console.log("La versión de JavaScript es " + version);

}
logVersion();
// Exportar todas las funciones para poder usarlas en las pruebas
module.exports = {
    compareTenAndNine,
    compareZeroAndZero,
    compareSeven,
    canBuyProduct,
    createMessageVariable,
    createSumVariable,
    createDisabledConstant,
    createNullVariable,
    createUndefinedVariable,
    checkUserNameType,
    checkDogIdIsString,
    logMessage,
    logAge,
    logVersion,
};
