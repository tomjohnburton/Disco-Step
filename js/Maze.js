
var colors = ['blue','red','gold','yellow','black'];
var forbiddenColor = randomNumber(4);



function randomArray (size){
 return new Array(size).fill(0).map(function(){
   
   return Math.floor(Math.random()*4);
 }); 
}

// function blankArray (size){
//  return new Array(size).fill(0); 
// }
// var wallsY = randomArray(20);
// var wallsX = randomArray(20);


// function structuredArray (array){
//   for (var col = 0 ; col < 20; col++){
//     for (var row = 0; row < 20; row++){
//       if(col < wallsY[randomNumber(20)] && col > wallsX[randomNumber(20)]){
//         array[col][row] = 1;
//       }
      
//     }
//   }
//   return array;
// }

var newGridArray = [];

function createNewGridArray(){
for (var i = 0 ; i <20 ; i++) {
newGridArray.push(randomArray(10));
}
return newGridArray;
}


function randomNumber(range){
  return Math.floor(Math.random()*range);
}



var specialCd = [];
function generateSpecial(){
  var special = [randomNumber(10),randomNumber(10)];
  return specialCd = special;
}
generateSpecial()
createNewGridArray()
// structuredArray(newGridArray)

// var specialColor = 4
var specialCdY = specialCd[0]*80
var specialCdX = specialCd[1]*80


console.log('specialCD',specialCd)

console.log('specialCD X,Y', specialCdX,specialCdY)
// var specialCd = [0,2]


// console.log(createNewGridArray())