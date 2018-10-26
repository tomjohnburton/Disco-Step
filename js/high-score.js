
function getHighScores() {
  var highScores = JSON.parse(localStorage.getItem('highScores'))
  if (!Array.isArray(highScores)) {
    highScores = []
  }
  return highScores;
}


function saveHighScore(score,name) {
  var highScores = getHighScores()
  highScores.push({score:score, name:name})
  highScores.sort(function(a,b){
    return b.score - a.score
  })
  localStorage.setItem('highScores', JSON.stringify(highScores))
}
// Example to render High Score
function renderHighScores() {
  var innerHTML = '<ul>'
  var highScores = getHighScores()
  for (var i = 0; i < highScores.length; i++) {
    innerHTML += '<li>'+highScores[i].score+' ('+highScores[i].name+')</li>'
  }
  innerHTML += '</ul>'
  document.getElementById('high-scores').innerHTML = innerHTML
}

highScores = getHighScores()

// console.log(highScores)