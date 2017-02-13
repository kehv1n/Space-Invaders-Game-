var canvas = document.querySelector(".canvas"); // Initalize canvas and set it as var: canvas
canvas.height = $(document).height(); // Sets height property of canvas the same as document height (jquery)
canvas.width = $(document).width(); // Sets width property of canvas the same as document width (jquery)


var ctx = canvas.getContext("2d"); // Sets Context to 2D



var backgroundImg = new Image(); // Initializing background img as a new Image
backgroundImg.src = "lib/imgs/backgroundimg.png"; // Sets background img's source to img in files
var backgroundReady = false; // initializes var background ready false

var spaceShipImg = new Image(); // Initializing background img as a new Image
spaceShipImg.src = "lib/imgs/spaceinvadersor.png"; // Sets background img's source to img in files
var spaceShipReady = false; // initializes var background ready false

var monsterImg = new Image(); // Initializing background img as a new Image
monsterImg.src = "lib/imgs/monster2-a.png"; // Sets background img's source to img in files
var monsterReady = false; // initializes var background ready false

backgroundImg.onload = function() {
    backgroundReady = true;
}; // On load, turn these booleans true
spaceShipImg.onload = function() {
    spaceShipReady = true;
};
monsterImg.onload = function() {
    monsterReady = true;
};


//Event Handler (SpaceShip Movment)
var events = { }; // "Dictionary" that maps and adds events depending on the keypress
document.addEventListener("keydown", function(e) {
  events[e.keyCode] = true;
  if (e.keyCode === 37) {  // Prevents default of the Left Arrow Key
    e.preventDefault();
  }

  if (e.keyCode === 39) {  // Prevents default of the Right Arrow Key
    e.preventDefault();
  }

  if (e.keyCode === 40) {  // Prevents default of the Down Arrow Key
    e.preventDefault();
  }

  if (e.keyCode === 38) {  // Prevents default of the Up Arrow Key
    e.preventDefault();
  }
 },  false); // Adds event to dictionary when keydown
document.addEventListener("keyup", function(e) { delete events[e.keyCode]; },  false); //deletes even from dictionary when keyup

var spaceship = {x: 720, y: 600, health: 100};

var render = function() {
    if (backgroundReady === true) {

        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


    }
    if (spaceShipReady === true) {
        ctx.drawImage(spaceShipImg, spaceship.x, spaceship.y, 75, 75);


    }

    if (monsterReady === true) {
        ctx.drawImage(monsterImg, 200, 200, 75, 75);

    }

    if (37 in events) {  // LEft Arrow Key movement
      spaceship.x = spaceship.x - 5;
    }

    if (39 in events) {  // Right Arrow Key Movement
      spaceship.x = spaceship.x + 5;
    }

    // if (spaceship.x > canvas.width) { // Loops The Spaceship through edge's
    //   spaceship.x = 0;
    // }
    // if (spaceship.x < 0) { // Loops The Spaceship through edge's
    //   spaceship.x = canvas.width - 75;
    // }

    if (40 in events) {  // Down Arrow Key movement
      spaceship.y = spaceship.y + 5;
    }

    if (38 in events) {  // Up Arrow Key movement
      spaceship.y = spaceship.y - 5;
    }

    switch (spaceship.x) {
      case (1370):
        spaceship.x = 0;
        break;
      case (0):
      spaceship.x = canvas.width - 75;
    }

};

var gameloop = function () {
  render();
};

setInterval(gameloop, 15);
