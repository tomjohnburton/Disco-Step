

////////////////////////////////////////// OPENING SCREEN

// $('#game').toggle()
$('.screens').toggle()


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

var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var size = 50
var p1 = new Player(ctx, 80, "black")

var width = canvas.width;
var height = canvas.height;

////////////////////////////////////////// UPDATE AND DRAW


function drawEverything() {
  ctx.clearRect(0,0,canvas.width, canvas.height)
  drawGrid()
  p1.draw()
  
}

  var time = 10
    
  setInterval(function(){
    $('#time').text(time)
    time --
  },1000)
  

    var counter = 0;
    function update() {

      if (specialCdX == p1.x && specialCdY == p1.y){
        time += 5
        $('#time').text(time)
        newGridArray = [];
        specialCd = [];
        randomArray(10);
        generateSpecial();
        specialCdY = specialCd[0]*80;
        specialCdX = specialCd[1]*80;
        // p1.x = 0;
        // p1.y = 0;
        createNewGridArray();
        while(newGridArray[p1.y/80][p1.x/80]===1 ){
          newGridArray = []
          createNewGridArray();
          drawGrid()
          console.log('fish')

        }
        drawGrid();
        counter++;
        $('#score').text(counter)
        

      }



      drawEverything();
    }
    
    // drawObjects()
    update()
    


    ////////////////////////////////////////// PLAYER CONTROLS
    
    document.onkeydown = function (event) {
      event.preventDefault()
      switch (event.code) {
    case "ArrowUp":
      p1.move("up")
      break;
    case "ArrowRight":
      p1.move("right")
      break;
    case "ArrowDown":
      p1.move("down")
      break;
    case "ArrowLeft":
      p1.move("left")
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
      ctx.fillStyle = colors[newGridArray[col][row]]
      ctx.fillRect(row*80,col*80,80,80)}
      }
    }
    }

    console.log(p1.x, p1.y)
    


////////////////////////////////////////// GAME OVER



    var redCd = [p1.y/80,p1.x/80]

    if (newGridArray[redCd[0]][redCd[1]] === 1){
      $('#game').toggle()
      $('#title').css("background-color", "red")

    }

console.log(redCd)

