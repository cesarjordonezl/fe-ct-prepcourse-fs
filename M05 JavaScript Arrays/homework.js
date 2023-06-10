/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0] 
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:

//Opción 1:
   // return array[array.length - 1]
   //Opción 2;
   return array.pop()

}
//console.log(devolverUltimoElemento(['hola','prepcurse',2,false]))

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;

   
}
//console.log(obtenerLargoDelArray(['hola','prepcurse',2,false]))

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:

   //opción 1:
   // var nuevoArray = [];
   // for(var i = 0 ; i < array.length ; i++){
   //    nuevoArray.push(array[i] + 1)
   // }
   // return nuevoArray;
   //Opcion 2:
   var nuevoArray = [];
   array.map(function(elemento){
      nuevoArray.push(elemento + 1)
   })
   return nuevoArray
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.push(elemento)
   return array
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:

   array.unshift(elemento)
   return array
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:

   return palabras.join(' ')
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:

   //Opción 1: for tradicional
   // for(var i = 0 ; i < array.length ; i++){
   //    if(array[i] === elemento) return true;
   // }
   // return false;
   //Opción 2: includes
   // if(array.includes(elemento))return true;
   // else return false;
   return array.includes(elemento)
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:

   //Opción 1: for tradicional:
   // var resultado = 0;
   // for(var i = 0 ; i < arrayOfNums.length ; i++){
   //    resultado = resultado + arrayOfNums[i]
   // }
   // return resultado;

   //Opción 2: reduce...
   // let total = arrayOfNums.reduce((a, b) => a + b, 0);
   // return total 
   return arrayOfNums.reduce(function(resultado, elemento){
      return resultado = resultado + elemento
   },0)
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:

//Opción 1: sin reutilizar la función de arriba
   // var suma = 0;
   // for(var i = 0 ; i < resultadosTest.length ; i++){
   //    suma = suma + resultadosTest[i];
   // }
   // return suma / resultadosTest.length

   //Opción 2: Reutilizando la función agregarNumeros
   return agregarNumeros(resultadosTest)/resultadosTest.length   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:

   //Opción 1: for tradicional
   // for(var i = 0 ; i < arrayOfNums.length ; i++){
   //    if(arrayOfNums[i] > arrayOfNums[i + 1]) return arrayOfNums[i];
   // }

   //Opción 2: forEach
   // var max = 0;
   // arrayOfNums.forEach(function(elemento){
   //    if(max < elemento){
   //       max = elemento
   //    }
   // })
   // return max;

   //Opción 3: Math.max
   return Math.max(...arrayOfNums);

}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:

 var multiplicacion = 1;
   if(arguments.length === 0) return 0
   for(var i = 0 ; i < arguments.length ; i++){
      multiplicacion = multiplicacion * arguments[i];
   }
   return multiplicacion
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:

   // var contador = 0;
   // for(var i = 0 ; i < array.length ; i++){
   //    if(array[i] > 18){
   //       contador = contador + 1;
   //    }
   // }
   // return contador;
   let nuevo= array.filter((elemento)=>elemento>18)
   return nuevo.length
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:

   if(numeroDeDia === 1 || numeroDeDia === 7) return "Es fin de semana";
   else return "Es dia laboral";

}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:

   // var nombre = 2013
   // nombre.toString()
   // console.log(nombre.charAt(2))

   num = num.toString();
   if(num.charAt(0) === '9')return true;
   else return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:

   for(var i = 0 ; i < array.length ; i++){
      if(array[i] === array[i + 1]) return true;
   }
   return false;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:

    var nuevoArray = []
   for(var i = 0 ; i < array.length ; i++){
      if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre"){
         nuevoArray.push(array[i])
      }
   }
   if(nuevoArray.length === 3){
      return nuevoArray
   }else return "No se encontraron los meses pedidos"
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:

    var array = [];
   var numMulti = 0;
   while(numMulti <= 10){
      var resultado = 6 * numMulti;
      array.push(resultado)
      numMulti++;
   }
   return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:

    var nuevoArray = [];
   for(var i = 0 ; i < array.length ; i++){
      if(array[i] > 100){
         nuevoArray.push(array[i])
      }
   }

   return nuevoArray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:

   let newArray= []; 
   let suma = 0;
   let i=1;
   nuevoNum = num;

      while (i <=10){
         nuevoNum = nuevoNum +2;
         newArray.push(nuevoNum);
         //suma = suma + nuevoNum;
          if (i === nuevoNum ){
           break;
          }
          i++
      }

      if(newArray.length<10) return ('Se interrumpió la ejecución');
      return newArray;
      
}

 //breakStatement(5);

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   let newArray= []; 
   let i = 1;
   //nuevoNum = num;

     for (let i=0 ;i <10; i++){
       
       if (i === 5 ){
           continue;
          }
         num = num +2;
         newArray.push(num);
             
     }
            
      
      return newArray;
}

continueStatement(8);

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
