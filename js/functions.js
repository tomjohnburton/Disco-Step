function generateRandom(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1)) + min;
  return (num === forbiddenColor) ? generateRandom(min, max) : num;
}

