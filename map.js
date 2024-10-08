/* 
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10] 
*/

//funcion que contenga un array de numeros y multiplicar por 2 el valor de estos numeros
function numerosAlDoble(numeros) {
//multiplicando los numeros por 2
    const arrayPorDos = numeros.map(num => num * 2);
// imprimiendo el nuevo array
    console.log(arrayPorDos);
  }
//ejecutando la funcion
numerosAlDoble([1, 2, 4, 5]);//(4) [2, 4, 8, 10]
numerosAlDoble([8, 7, 23, 27, 55]);//(5) [16, 14, 46, 54, 110]
  