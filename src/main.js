 //initialize score variable -- in global scope so it can be accessed from Head.move function
 let score = 0;
 
 //this code will not be invoked until all DOM elements have loaded in browser
$(document).ready(function() {

  //creates new Head and new Apple elements and appends them to the html element with id of board 
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  
  //creates a p element containing Score with id 'scoreBoard' and appends it to html body
  $('body').append(`<p id='scoreBoard'>Score: ${score}</p>`)
  
  //depending on which key is pressed (up, left, right, or down arrow), currentHeadDirection changes 
  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
      //prevents the default action of pressing the arrow keys from happening so that pressing the arrows only moves the snake head
      e.preventDefault()
      head.currentheadDirection = 'left';
    }
    if (e.keyCode === 38) {
      e.preventDefault()
      head.currentheadDirection = 'up';
    } 
    if (e.keyCode === 39) {
      e.preventDefault()
      head.currentheadDirection = 'right';
    } 
    if (e.keyCode === 40) {
      e.preventDefault()
      head.currentheadDirection = 'down'; 
    } 

  });

});







