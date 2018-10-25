// class Obsticle {
//   constructor(ctx){
//     this.ctx = ctx
//     this.x = Math.floor(Math.random()*canvas.height - p1.size)
//     this.y = 0
//     this.width = Math.floor(Math.random()*canvas.height - p1.size)
//     this.height = Math.floor(Math.random()*canvas.height - p1.size)
//   }

//   randomHeight(){
    
//     height = Math.floor(Math.random()*canvas.height - p1.size)
//     if (height < p1.size ){
//       this.randomHeight()
//     }
//    return this.height = height;

//   }
//   randomWidth(){
    
//     width = Math.floor(Math.random()*canvas.width - p1.size)
//     if (this.width < p1.size ){
//       this.randomHeight()
//     }
//    return this.height = height;

//   }

//   drawObs(){
//     this.ctx.beginPath();
//     this.ctx.moveTo(Math.floor(Math.random()*canvas.height - p1.size),0);
//     this.ctx.lineTo(Math.floor(Math.random()*canvas.height - p1.size),this.height)
//     this.ctx.stroke()


//   }
// }

var imageChange = 1
function treasureCollected(){
if (specialCdX == p1.x && specialCdY == p1.y ) {
  treasureSound.play()
  time += 5;
  $('#time').text(time);
  //
  if (changeGame == 1) {
    $('#speech').attr('src','./Images/Encouragement/Layer 0 ('+imageChange+').png')
  
    if (imageChange < 5) {
      imageChange ++ 
      
    } else {
      imageChange = 1
    }
    
  }
  // $('#speech').attr('src','../Images/Encouragement/Layer 0 ('+randomNumber(4)+1+').png')


  newGridArray = [];
  specialCd = [];
  randomArray(10);
  generateSpecial();
  specialCdY = specialCd[0] * 80;
  specialCdX = specialCd[1] * 80;
  createNewGridArray();

  if (counter % 10 == 0 && scoreChange > 1) {
    scoreChange--;
    console.log('counter', counter % 2);
    console.log('counter%', counter);
    console.log('scorechange', scoreChange);

  }
  if (counter % scoreChange == 0) {

    forbiddenColor = randomNumber(4);

    console.log('Random', forbiddenColor);

  }

  if (newGridArray[y - 1] == undefined) {
    while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[9][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)) {
      newGridArray = [];
      createNewGridArray();

      console.log('conditional 1');
    }


  } else if (newGridArray[y+1] == undefined) {
    while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[0][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)) {
      newGridArray = [];
      createNewGridArray();
      console.log('conditional 2');
    }


  } else if (newGridArray[y][x-1]== undefined) {
    while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][9] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)) {
      newGridArray = [];
      createNewGridArray();
      console.log('conditional 3');
    }

  } else if (newGridArray[y][x+1]== undefined) {
    while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][0] == forbiddenColor)) {
      newGridArray = [];
      createNewGridArray();
      console.log('conditional 4');
    }


  } else {

    while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)) {
      console.log('forbidden arrangement prevented');
      newGridArray = [];
      createNewGridArray();
      console.log('conditional 5');
    }
  }





  drawGrid();
  switch (c1) {
    case 1:
      p1.drawP2();
      break;

    default:
      p1.draw();
      break;
  }

  counter++;
  $('#score').text(counter);


}

}

// Math.floor(Math.random()*width/2)
// M