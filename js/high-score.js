function getHighScores(){
  var highScores = JSON.parse(localStorage.getItem('highScores'))
  if(!Array.isArray(highScores)){
    highScores = []
  }

  return highScores;

}

function saveHighScore(score,name){
  var highScores = getHighScores()

  highScores.push({score:score, name:name})
  highScores.sort(function(a,b){
    return a.score - b.score;
  })
  localStorage.setItem('highScores',JSON.stringify(highScores))
}

function renderHighScores(){
  var innerHTML = '<ul>'
  var highScores = getHighScores()
  for (var i = 0; i < highScores.length; i++){
    innerHTML += '<li>'+highScores[i].score+ ': '+ highScores[i].name + '</li>'
  }
  innerHTML += '</ul>'
  $('#high-scores').html = innerHTML;
}


localStorage.getItem('highScores')
localStorage.setItem('highScores',JSON.stringify(highScores))