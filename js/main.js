$(document).ready( function() {

////////////////////////////////////////// OPENING SCREEN

// $('#game').toggle()
$('.screens').toggle();


// $('.play-left').click( function(){
//   $('.play-left').toggle()
//   $( '.screen-left' ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     width: "0%"
//   }, 5000, function() {
//     // Animation complete.
//   });
  
//   $( '.screen-right' ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     width: "0%"
//   }, 5000, function() {
//     // Animation complete.
//   });
  
// setTimeout(() => {
//   $('#game').toggle()
//   $('.screens').toggle()
  
// }, 5100);
// })




////////////////////////////////////////// CANVAS DEFINITION

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var size = 50;
var p1 = new Player(ctx, 80, "black");

$('#time').text(time);
var width = canvas.width;
var height = canvas.height;

var img = new Image();
img.src = '/Images/Dancer.gif';

////////////////////////////////////////// UPDATE AND DRAW


function drawEverything() {
  ctx.clearRect(0,0,width, height);
  drawGrid();
  p1.draw();



  
}

  var time = 10
    
  setInterval(function(){
    $('#time').text(time)
    time --
  },1000)

  
  

    var counter = 0;
    var y = specialCd[0]
    var x = specialCd[1];

    if (newGridArray[0][0] == forbiddenColor){
      newGridArray = [];  
      createNewGridArray();
      drawGrid();
    }
    function update() {



      if (specialCdX == p1.x && specialCdY == p1.y){
        time += 5
        $('#time').text(time);
        newGridArray = [];  
        specialCd = [];
        randomArray(10);
        generateSpecial();
        specialCdY = specialCd[0]*80;
        specialCdX = specialCd[1]*80;
        createNewGridArray();
        if (counter % 4 == 0){
        
        forbiddenColor  = randomNumber(4)

        console.log('Random',forbiddenColor);
        
      }
        while(newGridArray[p1.y/80][p1.x/80]===forbiddenColor  || specialCdX == p1.x && specialCdY == p1.y || (newGridArray[y-1][x] == forbiddenColor && newGridArray[y+1][x] == forbiddenColor &&  newGridArray[y][x-1] == forbiddenColor && newGridArray[y][x+1] == forbiddenColor)){
          // console.log(newGridArray)
          console.log('newArray Called')


          newGridArray = [];
          createNewGridArray();
          drawGrid();
          
          
        }
        drawGrid();
        counter++;
        $('#score').text(counter);
        
        
      }
      $('body').css("background-color", colors[forbiddenColor]);
      
      var redCd = [p1.y/80,p1.x/80]
      if (newGridArray[redCd[0]][redCd[1]] === forbiddenColor){      
      gameOver();
      }




      drawEverything();

    }
    
    // drawObjects()
    update();
    


    ////////////////////////////////////////// PLAYER CONTROLS
    
    document.onkeydown = function (event) {
      event.preventDefault();
      switch (event.code) {
    case "ArrowUp":
      p1.move("up");
      break;
    case "ArrowRight":
      p1.move("right");
      break;
    case "ArrowDown":
      p1.move("down");
      break;
    case "ArrowLeft":
      p1.move("left");
      break;
  }
  update()
}


////////////////////////////////////////// REDRAW SPECIAL

function drawGrid(){
  newGridArray[specialCd[0]][specialCd[1]] = 4
  for (var col = 0 ; col < 20; col++){
    for (var row = 0; row < 20; row++){
      if (newGridArray[col][row] == 4){
      ctx.fillStyle = 'black'
      ctx.fillRect(row*80,col*80,80,80)}

    
      if (newGridArray[col][row]<4){
        ctx.fillStyle = 'black'
        ctx.fillRect(row*80,col*80,80,80)
        ctx.stroke()
      ctx.fillStyle = colors[newGridArray[col][row]]
      ctx.fillRect(3+row*80,3+col*80,74,74)
      // ctx.save()
      
    }

      }
    }
    }

    console.log(p1.x, p1.y)
    


////////////////////////////////////////// GAME OVER
function gameOver (){
      // $('#game').toggle()
      $('.title').css("background-color", "chartreuse")
      var col = 0
      var row = 0



      var interval = setInterval(addRed,50)


      function addRed(){

        newGridArray[col][row]= forbiddenColor;
        row++;
        if (col == 10){
          stop();
        }
        if (row == 10){
        col ++;
        row = 0 }
        drawGrid();
      }

      function stop(){
        clearInterval(interval);
      }

      setTimeout(() => {
        ctx.fillStyle = "black"
        ctx.font="200px Arial";
        ctx.fillText('YOU LOSE',300,400,200)
        
      }, 5100);
    }


})