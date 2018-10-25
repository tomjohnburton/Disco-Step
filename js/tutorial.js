function introSpeech (){
  $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (1).png');
  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (9).png')
    
  }, thousand(5));
  setTimeout(() => {
    $('#speech').attr('src','')
    
  }, thousand(10));




}

function tutorialSpeech (){
  $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (2).png')


  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (3).png')
    $('#JT').attr('src','../Images/JTR.png')
    
  }, thousand(5));
  
  
  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (3).png')
    $('#JT').attr('src','../Images/JT.png')
    
  }, thousand(10));

  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (5).png')
    
  }, thousand(15));

  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (4).png')
    
  }, thousand(20));

  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (6).png')
    
  }, thousand(25));

  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (7).png')
    
  }, thousand(30));

  setTimeout(() => {
    $('#speech').attr('src','../Images/Speech-Bubbles/Layer 0 (8).png')
    
  }, thousand(35));
}

function thousand(a){
  return a * 1000
}