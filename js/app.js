
///////////////// WIN LOSE //////////////////////////////////

$(document).ready(function (){
$('.winner').hide();
$('.loser').hide();


});

function winner() {

//STOP THE GAME
myIntervalID.forEach(function(element){
  clearInterval(element);
  });
$('.winner').show();


}

function loser() {

//STOP THE GAME
myIntervalID.forEach(function(element){
  clearInterval(element);
  });
$('.loser').show();


}
