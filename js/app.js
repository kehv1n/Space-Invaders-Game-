
///////////////// START SCREEN AND BASIC GAME FUNCTIONS /////////////////

$(document).ready(function (){
$('.winner').hide();
$('.loser').hide();
$('.gameDiv').hide();


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

function updateScore () {
  $('.scoreNumber').html(totalScore);
}
