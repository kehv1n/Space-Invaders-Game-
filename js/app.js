
///////////////// START SCREEN AND BASIC GAME FUNCTIONS /////////////////

$(document).ready(function (){
$('.winner').hide();
$('.loser').hide();
$('.gameDiv').hide();
ion.sound.play("theme");
setTimeout(startClick, 2000);


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
ion.sound.play("win");


}

////////// IF USER LOSES ////////////
function loser() {
myIntervalID.forEach(function(element){
  clearInterval(element);
  });
$('.loser').show();
ion.sound.play("lose");


}
/////////// KEEPS SCORE UPDATE

function updateScore () {
  $('.scoreNumber').html(totalScore);
}
function notDisabled() {
  $('.spaceButton').attr('disabled', false);
  $('.spaceButton').text('START');
  $('.spaceButton').addClass('spaceButtonOn');
}

/// STARTS GAME IF USER CLICKS BUTTON ////////////
function startClick () {
  notDisabled();
  $('.spaceButton').click(function (){
    $('.startScreen').fadeOut();
    $('.gameDiv').fadeIn();
    ion.sound.stop();
    ion.sound.play("button");


    myIntervalID[0] = setInterval(gameloop, 15); // Return 1

    // Interval for movement
    myIntervalID[1] = setInterval(moveMonster, 700); // Return 2

    //Monster Animation ////////
    myIntervalID[2] = setInterval(monsterAni, 700); // Return 3
    //Random Monster Drops //////
    myIntervalID[3] = setInterval(randomDrop, 1000); // Return 4

    //Random Drop Animation //

    myIntervalID[4] = setInterval(dropAni, 100); // Return 5


  });
}

/// SOUNDS STARTER PAGE //////////


  $('.press').first().click(function(){
    ion.sound.play("shoot");
  });
