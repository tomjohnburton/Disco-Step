

if (y-1==undefined) {
  while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[9][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)){}
  
} else if (y + 1 == undefined){
  while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[0][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)){}
  

} else if (x -1 == undefined){
  while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][9] == forbiddenColor && newGridArray[y][x + 1] == forbiddenColor)){}

} else if (x + 1 == undefined){
  while (newGridArray[p1.y / 80][p1.x / 80] === forbiddenColor || (newGridArray[y - 1][x] == forbiddenColor && newGridArray[y + 1][x] == forbiddenColor && newGridArray[y][x - 1] == forbiddenColor && newGridArray[y][0] == forbiddenColor)){}


}






