/* 
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/
//declarando una funcion para realizar operaciones
function operaciones(numeros) {
    //declarando las variables a utilizar 
    let suma = 0;
    //si usamos 0 en mutilplicacion nos dara 0 todas las operaciones, por eso usamos 1
    let multiplicacion = 1;
    //creamos el ciclo
    for (let num of numeros) {
    // hacemos las operaciones
      suma += num;         
      multiplicacion *= num;     
    }
    //indicamos una interpolacion para que se impriman los resultados en un string
    console.log(`La suma es ${suma}. El producto es ${multiplicacion}.`);
  }
  //indicamos los numeros a utilizar para que se realicen las operaciones
  operaciones([1, 2, 3, 4]);
  