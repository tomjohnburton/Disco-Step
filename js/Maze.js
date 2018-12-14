var colors = ["blue", "white", "purple", "yellow", "black", "green"];
var forbiddenColor = randomNumber(4);

function randomArray(size) {
  return new Array(size).fill(0).map(function() {
    return Math.floor(Math.random() * 4);
  });
}

var newGridArray = [];

function createNewGridArray() {
  for (var i = 0; i < 20; i++) {
    newGridArray.push(randomArray(10));
  }
  return newGridArray;
}

function randomNumber(range) {
  return Math.floor(Math.random() * range);
}

var specialCd = [];
function generateSpecial() {
  var special = [randomNumber(10), randomNumber(10)];
  return (specialCd = special);
}
generateSpecial();
createNewGridArray();

var specialCdY = specialCd[0] * 80;
var specialCdX = specialCd[1] * 80;
