/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   let arregloNuevo = [];
   
   for (let prop in objeto){
      arregloNuevo.push([prop,objeto[prop]]);
      
   }

   return arregloNuevo;
}

//let objeto = {D: 1, B: 2, C: 3} ;
//console.log(deObjetoAarray(objeto));

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   let letras = string.split('').sort(); //Sort ordena alfabeticamente
   
   let objeto = {};
   for (let i=0 ; i<letras.length ; i++){
     
     if (!objeto.hasOwnProperty(letras[i])){
         objeto[letras[i]] = 1;
     } else {
         objeto[letras[i]] = objeto[letras[i]] + 1;
     }
   }
   return objeto;
}

//console.log(numberOfCharacters('adsjfdsfsfjsdjfhacabcsbajda'));

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

   letras = string.split('');
   ArrayMayusculas = [];
   ArrayMinusulas= [];
   nuevoString = '';
   for (let j = 0; j< letras.length ; j++){
      if (letras[j] === letras[j].toUpperCase()){
         ArrayMayusculas.push(letras[j]);
      } else {
         ArrayMinusulas.push(letras[j]);
      }
   }
   nuevoString = ArrayMayusculas.concat(ArrayMinusulas).join('');
   return nuevoString;
}

//console.log(capToFront('soyHENRY'));
//console.log(capToFront('DESArrollaDOR'));

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:

   palabras = frase.split(' ');
   unaPalabra = '';
   nuevo = [];
   letras = [];

   for(let i=0 ; i< palabras.length; i++){
        unaPalabra = palabras[i];
        nuevo = unaPalabra.split('');
        letras.push(nuevo.reverse().join(''));       
   }
   return letras.join(' ');
}

//console.log(asAmirror('I love you so much!'));

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   let numString = numero.toString();
   let numInvertido = numString.split('').reverse().join('');
   if (numString === numInvertido){
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }
}

//console.log(capicua(9102019));
//console.log(capicua(14578));

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:

   let cadena = string.split('');
   let newLetra = [];
   
   for(let i=0 ; i<cadena.length; i++){
      if (cadena[i] != 'a' && cadena[i] != 'b' && cadena[i] !='c'){
         newLetra.push(cadena[i]);
      }
   }
   return newLetra.join('');
}

//console.log(deleteAbc('abecedariocr'));

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort(
      function(a,b){
         return a.length - b.length;
      }
   );
}

//array = ["You", "are", "beautiful", "looking",'mouse'];
//console.log(sortArray(array));

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   nuevoArray = [];
   for(let i=0; i< array1.length; i++){
      if(array2.includes(array1[i])){
         nuevoArray.push(array1[i]);
      }
   }
   return nuevoArray;
}

//console.log(buscoInterseccion([1, 2, 3], [1, 5, 8, 3]));
//console.log(buscoInterseccion([1, 20, 3],[22, 5, 7]));

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
