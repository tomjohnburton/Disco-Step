$(document).ready(function () {






  ////////////////////////////////////////// OPENING SCREEN

  // $('#game').toggle()
  $('.screens').toggle();
  // $('#canvas').toggle();
  $('#canvasMenu').toggle();
  $('#canvasGameOver').toggle();


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
  var p1 = new Player(ctx, 80, "black");

  $('#time').text(time);
  var width = canvas.width;
  var height = canvas.height;

  var img = new Image();
  img.src = 'Images/DiscoStepTemp.png';

  var arrowImg = new Image();
  arrowImg.src = 'Images/Right-Arrow.png';

  var c1 = 0;

  var changeGame = 0;

  function resize() {
    // Our canvas must cover full height of screen
    // regardless of the resolution
    var height = window.innerHeight * 0.9;

    // So we need to calculate the proper scaled width
    // that should work well with every resolution
    var ratio = canvas.width / canvas.height;
    var width = height * ratio;

    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }

  window.addEventListener('load', resize, false);
  window.addEventListener('resize', resize, false);








  ////////////////////////////////////////// UPDATE AND DRAW
  window.onload = function () {
    updateMenu();
  };


  ////////////////////////////////////////// TIMER 

  var time = 10;
  var countdown = function () {


    setInterval(function () {
      time--;
      console.log(time)
      if (time < 0) {
        time = 0
        stop(countdown)
      }
      $('#time').text(time);
    }, 1000);

  }


  // countdown()


  ////////////////////////////////////////// PREVENT GRID CAUSING INSTANT GAME OVER


  while (newGridArray[9][9] == forbiddenColor) {
    newGridArray = [];
    createNewGridArray();
    drawGrid();

    console.log('pre game impossibility prevention')
  }


  ////////////////////////////////////////// GAME OVER TIMER

  var timeGameOver = setInterval(function () {
    if (time == 0) {
      gameOver()
      console.log('time gameover')

      stop(timeGameOver)
    }

  }, 1000)



  ////////////////////////////////////////// DRAW EVERYTHING FUNCTIONS

  function drawEverythingGameOver() {
    ctx.clearRect(0, 0, width, height);
    drawGridGameOver();
    p1.draw()



  }




  var counter = 0;
  var y = specialCd[0];
  var x = specialCd[1];



  function drawEverythingMenu() {
    ctx.clearRect(0, 0, width, height);
    drawGridMenu();

    if (p1.x == 640 && p1.y == 480) {
      c1 = 1;
    } else if (p1.x == 640 && p1.y == 240) {
      c1 = 0;
    } else if (p1.x == 640 && p1.y == 720) {
      c1 = 2;
    }

    switch (c1) {
      case 1:
        p1.drawP2();
        ctx.fillStyle = 'blue';
        ctx.fillRect(640, 480, 80, 80);
        break;
      case 2:
        ctx.fillStyle = 'blue';
        ctx.fillRect(640, 720, 80, 80);
        changeGame = 1;
        $('.background-GIF').removeClass()

        break;

      default:
        p1.draw();
        ctx.fillStyle = 'blue';
        ctx.fillRect(640, 240, 80, 80);
        break;
    }

    ctx.drawImage(img, 140, 50, 500, 230);
    ctx.drawImage(p1.img, 640 - 10, 240 - 14, 100, 100);
    ctx.drawImage(p1.imgP2, 640 - 10, 480 - 14, 100, 100);
    ctx.drawImage(arrowImg, 650, 730, 60, 60);


    return changeGame;

  }


  console.log('changegame', changeGame);


  function drawEverything() {
    ctx.clearRect(0, 0, width, height);
    drawGrid();
    switch (c1) {
      case 1:
        p1.drawP2()
        break;

      default:
        p1.draw()
        break;
    }
  }





  ////////////////////////////////////////// UPDATE 

  function updateMenu() {
    window.onload = function () {
      drawEverythingMenu();
    };
    drawEverythingMenu();
  }


  function update() {


    if (specialCdX == p1.x && specialCdY == p1.y) {
      time += 5;
      $('#time').text(time);
      newGridArray = [];
      specialCd = [];
      randomArray(10);
      generateSpecial();
      specialCdY = specialCd[0] * 80;
      specialCdX = specialCd[1] * 80;
      createNewGridArray();
      if (counter % 4 == 0) {

        forbiddenColor = randomNumber(4);

        console.log('Random', forbiddenColor);

      }

      while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || specialCdX == p1.x && specialCdY == p1.y || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)) {
        console.log('forbidden arrangement prevented');
        newGridArray = [];
        createNewGridArray();


      }
      console.log(c1)


      drawGrid();
      switch (c1) {
        case 1:
          p1.drawP2()
          break;

        default:
          p1.draw()
          break;
      }

      counter++;
      $('#score').text(counter);


    }
    $('body').css("background-color", colors[forbiddenColor]);

    var redCd = [p1.y / 80, p1.x / 80];
    if (newGridArray[redCd[0]][redCd[1]] === forbiddenColor) {
      gameOver();
    }

    drawEverything();

  }


  function updateGameOver() {
    drawEverythingGameOver()

  }



  ////////////////////////////////////////// PLAYER CONTROLS

  document.onkeydown = function (event) {

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

    if ([37, 38, 39, 40].includes(event.keyCode)) {
      event.preventDefault();
    }

    if (changeGame == 1) {
      update();
      window.onload = function () {
        drawEverything();
      };
    } else if (changeGame == 0) {
      updateMenu();
    } else if (changeGame == 2) {
      updateGameOver();
    }

    // update()
    updateGameOver()
    // updateMenu()

  };


  ////////////////////////////////////////// GRID DRAWING

  function drawGrid() {
    newGridArray[specialCd[0]][specialCd[1]] = 4;
    for (var col = 0; col < 20; col++) {
      for (var row = 0; row < 20; row++) {

        // Treasure
        if (newGridArray[col][row] == 4) {
          ctx.fillStyle = 'black';
          ctx.fillRect(row * 80, col * 80, 80, 80);
        }

        // Rest of the grid
        if (newGridArray[col][row] < 4) {
          ctx.fillStyle = 'black';
          ctx.fillRect(row * 80, col * 80, 80, 80);
          ctx.stroke();
          ctx.fillStyle = colors[newGridArray[col][row]];
          ctx.fillRect(3 + row * 80, 3 + col * 80, 74, 74);


        }

      }
    }
  }



  function drawGridMenu() {
    newGridArray[specialCd[0]][specialCd[1]] = 4;
    for (var col = 0; col < 20; col++) {
      for (var row = 0; row < 20; row++) {
        if (row % 2 == 0 && col % 3 == 0) {
          ctx.fillStyle = 'red';
          ctx.fillRect(row * 80, col * 80, 80, 80);
        } else {
          ctx.save();
          ctx.fillStyle = 'yellow';
          ctx.fillRect(row * 80, col * 80, 80, 80);
        }
      }
    }
  }

  function drawGridGameOver() {
    newGridArray[specialCd[0]][specialCd[1]] = 4;
    for (var col = 0; col < 20; col++) {
      for (var row = 0; row < 20; row++) {
        console.log('confirmed');
        ctx.fillStyle = 'white'
        ctx.fillRect(row * 80, col * 80, 80, 80);
        ctx.fillStyle = 'black';
        ctx.fillRect(3 + row * 80, 3 + col * 80, 74, 74);

        ctx.fillStyle = 'red';
        ctx.fillRect(3 + 0 * 80, 3 + 3 * 80, 74, 74)
        ctx.fillRect(3 + 0 * 80, 3 + 4 * 80, 74, 74)
        ctx.fillRect(3 + 0 * 80, 3 + 5 * 80, 74, 74)
        ctx.fillRect(3 + 0 * 80, 3 + 6 * 80, 74, 74)
        ctx.fillStyle = 'blue'
        ctx.fillRect(3 + 9 * 80, 3 + 3 * 80, 74, 74)
        ctx.fillRect(3 + 9 * 80, 3 + 4 * 80, 74, 74)
        ctx.fillRect(3 + 9 * 80, 3 + 5 * 80, 74, 74)
        ctx.fillRect(3 + 9 * 80, 3 + 6 * 80, 74, 74)

        ctx.fillStyle = "red";
        ctx.font = "50px Arial";
        ctx.fillText('HANG UP YOUR', 100, 300);
        ctx.fillText('DANCING SHOES', 100, 375);

        ctx.fillStyle = "blue";
        ctx.font = "50px Arial";
        ctx.fillText("LET'S BOOGIE", 350, 540);

      }
    }

  }

  console.log(p1.x, p1.y);



  ////////////////////////////////////////// GAME OVER
  function gameOver() {
    // $('#game').toggle()
    // $('.title').css("background-color", "chartreuse");
    var col = 0;
    var row = 0;



    var interval = setInterval(addRed, 50);


    function addRed() {

      newGridArray[col][row] = forbiddenColor;
      row++;
      if (col == 10) {
        stop(interval);
      }
      if (row == 10) {
        col++;
        row = 0;
      }
      drawGrid();
    }

    function stop(interval) {
      clearInterval(interval);
    }

    setTimeout(() => {
      ctx.fillStyle = "black";
      ctx.font = "200px Arial";
      ctx.fillText('YOU LOSE', 300, 400, 200);

    }, 5100);

    stop(timeGameOver)

    changeGame = 2
    console.log(changeGame)




  }




  function colorChange() {
    var col = 0;
    var row = 0;



    var interval = setInterval(addRed, 50);


    function addRed() {

      newGridArray[col][row] = forbiddenColor;
      row++;
      if (col == 10) {
        stop();
      }
      if (row == 10) {
        col++;
        row = 0;
      }
      drawGridMenu();
    }

    function stop() {
      clearInterval(interval);
    }
  }

  /////////////////////////////////// BOTTOM OF CODE
});