var imageChange = 1;
var timeBonus = 5;
var level = 1;
function treasureCollected() {
  if (specialCdX == p1.x && specialCdY == p1.y) {
    treasureSound.play();
    time += timeBonus;
    $("#time").text(time);
    if (changeGame == 1) {
      $("#speech").attr(
        "src",
        "./Images/Encouragement/layer" + imageChange + ".png"
      );
      $("#speech").attr(
        "src",
        "./Images/Encouragement/layer" + imageChange + ".png"
      );

      if (imageChange < 5) {
        imageChange++;
      } else {
        imageChange = 1;
      }
    }

    newGridArray = [];
    specialCd = [];
    randomArray(10);
    generateSpecial();
    specialCdY = specialCd[0] * 80;
    specialCdX = specialCd[1] * 80;
    createNewGridArray();

    if (counter % 10 == 0 && scoreChange >= 1) {
      scoreChange--;
      level++;
    }

    if (timeBonus >= 2 && level % 2 == 0) {
      timeBonus--;
    }
    if (counter % scoreChange == 0) {
      forbiddenColor = randomNumber(4);
    }

    if (newGridArray[y - 1] == undefined) {
      while (
        newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor ||
        (newGridArray[9][x] == forbiddenColor &&
          newGridArray[y + 1][x] == forbiddenColor &&
          newGridArray[y][x - 1] == forbiddenColor &&
          newGridArray[y][x + 1] == forbiddenColor)
      ) {
        newGridArray = [];
        createNewGridArray();
      }
    } else if (newGridArray[y + 1] == undefined) {
      while (
        newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor ||
        (newGridArray[y - 1][x] == forbiddenColor &&
          newGridArray[0][x] == forbiddenColor &&
          newGridArray[y][x - 1] == forbiddenColor &&
          newGridArray[y][x + 1] == forbiddenColor)
      ) {
        newGridArray = [];
        createNewGridArray();
      }
    } else if (newGridArray[y][x - 1] == undefined) {
      while (
        newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor ||
        (newGridArray[y - 1][x] == forbiddenColor &&
          newGridArray[y + 1][x] == forbiddenColor &&
          newGridArray[y][9] == forbiddenColor &&
          newGridArray[y][x + 1] == forbiddenColor)
      ) {
        newGridArray = [];
        createNewGridArray();
      }
    } else if (newGridArray[y][x + 1] == undefined) {
      while (
        newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor ||
        (newGridArray[y - 1][x] == forbiddenColor &&
          newGridArray[y + 1][x] == forbiddenColor &&
          newGridArray[y][x - 1] == forbiddenColor &&
          newGridArray[y][0] == forbiddenColor)
      ) {
        newGridArray = [];
        createNewGridArray();
      }
    } else {
      while (
        newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor ||
        (newGridArray[y - 1][x] == forbiddenColor &&
          newGridArray[y + 1][x] == forbiddenColor &&
          newGridArray[y][x - 1] == forbiddenColor &&
          newGridArray[y][x + 1] == forbiddenColor)
      ) {
        newGridArray = [];
        createNewGridArray();
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
    $("#score").text(counter);
  }
}
