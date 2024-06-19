//Predicción 1
// console.log(hello);                             
// var hello = 'world';                                 
/*el console.log va a mostrar undefined*/

//Predicción 2
// var needle = 'haystack';
// test();
// function test(){
// var needle = 'magnet';
// console.log(needle);
// }
/*La llamada de la función test no esta definida,esta definida más abajo
 Y el console.log si ya se ejecuta por que ya se definió de forma correcta*/

 //Predicción 3
//  var brendan = 'super cool';
//  function print(){
//  brendan = 'only okay';
//    console.log(brendan);
//  }
//  console.log(brendan);
 /* Mostrará super cool, por que no se llamo a la función*/
 

 //Predicción 4
//  var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//  food = 'half-chicken';
// console.log(food);
// var food = 'gone';
// }
/*Mostrará en la consola, food y half-chicken*/

//Predicción 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//    console.log(food);
//     var food = "fish";
//     console.log(food);
//   }
// console.log(food);
/*mean no es una función, por eso ya no me ejecuta ninguna linea de codigo*/

//Predicción 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//   genre = "rock";
//   console.log(genre);
//   var genre = "r&b";
//   console.log(genre);
// }
// console.log(genre);

/*El resultado que va a mostrar por consola es unidefine por que no esta definido,
luego se ejecuta la función y va a mostrar rock, r&b, y luego se ejecuta el console.log
de abajo que imprime disco*/

//Predicción 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//   dojo = "seattle";
//   console.log(dojo);
//    var dojo = "burbank";
//    console.log(dojo);
// }
// console.log(dojo);
/*Mostrará "San Jose", luego lo de adentro de la función seattle, burbank
y por ultimo volvera a imprimir San Jose*/


//Prediccion 8
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
  const dojo = {};
   dojo.name = name;
   dojo.students = students;
   if(dojo.students > 50){
    dojo.hiring = true;
  }
   else if(dojo.students <= 0){
   dojo = "closed for now";
  }
   return dojo;
}




 


