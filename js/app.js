
///////////////// START SCREEN AND BASIC GAME FUNCTIONS /////////////////

$(document).ready(function (){
$('.winner').hide();
$('.loser').hide();
$('.gameDiv').hide();
startClick();
// SPACE BAR SHOOT SOUND ////////
$('.press').first().click(function(){
  ion.sound.play("shoot");
});

/// MOVE LEFT BUTTON SOUDN /////
$('.2b').click(function(){
  ion.sound.play("fastinvader1");
});
/// MOVE LEFT BUTTON SOUDN /////
$('.3b').click(function(){
  ion.sound.play("fastinvader1");
});

}); // END OF DOC READY




////////// IF USER LOSES ////////////
function winner() {
myIntervalID.forEach(function(element){
  clearInterval(element);
  });
$('.winner').show();


}

////////// IF USER LOSES ////////////
function loser() {
myIntervalID.forEach(function(element){
  clearInterval(element);
  });
$('.loser').show();


}
/////////// KEEPS SCORE UPDATE

function updateScore () {
  $('.scoreNumber').html(totalScore);
}

/// STARTS GAME IF USER CLICKS BUTTON ////////////
function startClick () {
  $('.spaceButton').click(function (){
    $('.startScreen').fadeOut();
    $('.gameDiv').fadeIn();
  });
}

/// SOUNDS STARTER PAGE //////////


  $('.press').first().click(function(){
    ion.sound.play("shoot");
  });
