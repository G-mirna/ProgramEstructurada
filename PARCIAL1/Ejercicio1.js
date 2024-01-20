
//EJERCICIO 1
/*
let numero = parseInt(prompt("Cuantos numeros quiere ingresar:"))
const arr=[]
for (let index = 0; index < numero; index++) {
    let arr = parseInt(prompt(`numero ${index}`))
    
}

function sumarnumeros(n) {
    if(n === 0){
        return 0
    }
    return  n + sumarnumeros(n- 1)
    
}
console.log()
*/



//EJERCICIO 2

function sumar_pares_impares(arr) {
    let numeros_pares = 0;
    let numeros_impares = 0;
  
    for (let num of arr) {
      if (num % 2 === 0) {
        numeros_pares += num;
      } else {
        numeros_impares += num;
      }
    }
  
    return [numeros_pares, numeros_impares];
  }
  
  // Solicitar al usuario ingresar los números
  const ingreso_numeros = parseInt(prompt("Ingrese la cantidad de números:"));

  if (isNaN(ingreso_numeros)){
    console.log("Debe ingresar un numero valido")
}else{
  const numeros = [];

  for (let i = 0; i < ingreso_numeros; i++) {
    const numero = parseInt(prompt(`Ingrese el número ${i + 1}:`));
    numeros.push(numero);
  }

  
  const resultados = sumar_pares_impares(numeros);
  console.log("Suma de números pares:", resultados[0]);
  console.log("Suma de números impares:", resultados[1]);
}




  
  




//EJERICIO 3
/*
numero = parseInt(prompt("Ingrese un numero:"))
if (isNaN(numero)){
    console.log("Debe ingresar un numero valido")
}else{
    
if(numero % 3 === 0 && numero % 5 === 0 && numero % 10 === 0){
    console.log(`El numero es multiplo de 3, 5 y 10`)
}else{
    console.log(`El numero no es multiplo 3, 5  y 10`)
}

}
*/

