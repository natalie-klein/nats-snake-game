$(document).ready(function() {
  const head = new Head($('#board'));
  const apple = new Apple($('#board'));
  

  $('body').on('keydown', function(e) {
    if (e.keyCode === 37) {
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

function rand_50(min, max){
  return Math.round((Math.random()*(max-min)+min)/50)*50;
}



