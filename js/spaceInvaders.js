var canvas = document.querySelector(".canvas"); // Initalize canvas and set it as var: canvas
canvas.height = $(document).height(); // Sets height property of canvas the same as document height (jquery)
canvas.width = $(document).width(); // Sets width property of canvas the same as document width (jquery)


var ctx = canvas.getContext("2d"); // Sets Context to 2D

var backgroundImg = new Image(); // Initializing background img as a new Image
backgroundImg.src = "lib/imgs/backgroundimg.png"; // Sets background img's source to img in files
var backgroundReady = false; // initializes var background ready fals

var spaceShipImg = new Image(); // Initializing background img as a new Image
spaceShipImg.src = "lib/imgs/spaceinvadersor.png"; // Sets background img's source to img in files
var spaceShipReady = false; // initializes var background ready false

var monsterImg1 = new Image(); // Initializing background img as a new Image
monsterImg1.src = "lib/imgs/monster1.png"; // Sets background img's source to img in files
var monster1Ready = false; // initializes var background ready false

var monsterImg1a = new Image(); // Initializing background img as a new Image
monsterImg1a.src = "lib/imgs/monster1-a.png"; // Sets background img's source to img in files
var monster1aReady = false; // initializes var background ready false


var monsterImg2 = new Image(); // Initializing background img as a new Image
monsterImg2.src = "lib/imgs/monster2.png"; // Sets background img's source to img in files
var monster2Ready = false; // initializes var background ready false

var monsterImg2a = new Image(); // Initializing background img as a new Image
monsterImg2a.src = "lib/imgs/monster2-a.png"; // Sets background img's source to img in files
var monster2aReady = false; // initializes var background ready false


var monsterImg3 = new Image(); // Initializing background img as a new Image
monsterImg3.src = "lib/imgs/monster3.png"; // Sets background img's source to img in files
var monster3Ready = false; // initializes var background ready false


var monsterImg3a = new Image(); // Initializing background img as a new Image
monsterImg3a.src = "lib/imgs/monster3-a.png"; // Sets background img's source to img in files
var monster3aReady = false; // initializes var background ready false

var spaceShotImg = new Image(); //Initialized space shot and gets it ready for loop
spaceShotImg.src = "lib/imgs/spaceshot.png";
var spaceShotReady = false;

function Monster(x, y, points, img, wasHit) { //Monster constructor to create different monster
    this.x = x;
    this.y = y;
    this.points = points;
    this.image = img;
    this.isDead = false;
}

var hoard1 = []; // Makes Multiple Monsters type: a (top
for (i = 1; i <= 11; i++) {
    hoard1[i] = new Monster(350 + i * 55, 100, 40, monsterImg1);
}

var hoard2 = []; // Makes Multiple Monsters type: b
for (i = 1; i <= 11; i++) {
    hoard2[i] = new Monster(355 + i * 55, 160, 20, monsterImg2);
}

var hoard3 = []; // Makes Multiple Monsters type: b
for (i = 1; i <= 11; i++) {
    hoard3[i] = new Monster(355 + i * 55, 210, 20, monsterImg2);
}

var hoard4 = []; // Makes Multiple Monsters type: c
for (i = 1; i <= 11; i++) {
    hoard4[i] = new Monster(350 + i * 55, 260, 20, monsterImg3);
}

var hoard5 = []; // Makes Multiple Monsters type: c
for (i = 1; i <= 11; i++) {
    hoard5[i] = new Monster(350 + i * 55, 310, 20, monsterImg3);
}





backgroundImg.onload = function() {
    backgroundReady = true;
}; // On load, turn these booleans true
spaceShipImg.onload = function() {
    spaceShipReady = true;
};

monsterImg1.onload = function() { // Regular Picture
    monster1Ready = true;
};

monsterImg1a.onload = function() { // Animated Picture
    monster1aReady = true;
};

monsterImg2.onload = function() { // Regular Picture
    monster2Ready = true;
};

monsterImg2a.onload = function() { // Animated Picture
    monster2aReady = true;
};

monsterImg3.onload = function() { // Regular Picture
    monster3Ready = true;
};


monsterImg3a.onload = function() { // Animated Picture
    monster3aReady = true;
};



spaceShotImg.onload = function() {
    spaceShotReady = true;
};


//Event Handler (SpaceShip Movment)
var events = {}; // "Dictionary" that maps and adds events depending on the keypress
document.addEventListener("keydown", function(e) {
    events[e.keyCode] = true;
    if (e.keyCode === 37) { // Prevents default of the Left Arrow Key
        e.preventDefault();
    }

    if (e.keyCode === 39) { // Prevents default of the Right Arrow Key
        e.preventDefault();
    }

    if (e.keyCode === 40) { // Prevents default of the Down Arrow Key
        e.preventDefault();
    }

    if (e.keyCode === 32 || e.keyCode === 38 || e.keyCode === 87) {
        e.preventDefault();


        var shot = {
            x: spaceship.x + 36,
            y: spaceship.y,
            hitTarget: false
        };
        spaceShots.push(shot);
    }


}, false); // Adds event to dictionary when keydown




document.addEventListener("keyup", function(e) {
    delete events[e.keyCode];
}, false); //deletes even from dictionary when keyup

var spaceship = {
    x: 720,
    y: 550,
    health: 100
};
var spaceShots = [];
//Monster Animation ////////
setInterval(monsterAni, 500);

function monsterAni() {

    hoard1.forEach(function(monster) { // monster type: b
        if (monster.image === monsterImg1) {
            monster.image = monsterImg1a;
        } else {
            monster.image = monsterImg1;
        }

    });






    hoard2.forEach(function(monster) { // monster type: b
        if (monster.image === monsterImg2) {
            monster.image = monsterImg2a;
        } else {
            monster.image = monsterImg2;
        }

    });



    hoard3.forEach(function(monster) { // monster type: b
        if (monster.image === monsterImg2) {
            monster.image = monsterImg2a;
        } else {
            monster.image = monsterImg2;
        }

    });

    hoard4.forEach(function(monster) { // monster type: c
        if (monster.image === monsterImg3) {
            monster.image = monsterImg3a;
        } else {
            monster.image = monsterImg3;
        }

    });

    hoard5.forEach(function(monster) { // monster type: c
        if (monster.image === monsterImg3) {
            monster.image = monsterImg3a;
        } else {
            monster.image = monsterImg3;
        }

    });

}


var render = function() {
  checkDeadDudes(); // Check to see if there is any dead des
    if (backgroundReady === true) {

        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


    }
    if (spaceShipReady === true) {
        ctx.drawImage(spaceShipImg, spaceship.x, spaceship.y, 75, 75);


    }

    //If all the monsters1 have loaded, draw them on the background;
    if (monster1Ready === true) {
        hoard1.forEach(function(monster) {
            if (monster.isDead === false) {
                ctx.drawImage(monster.image, monster.x, monster.y, 40, 40);
            }
            if (monster.isDead === true ) {


            }
        });
    }

    //If all the monsters2 have loaded, draw them on the background;
    if (monster2Ready === true) {
        hoard2.forEach(function(monster) {
            if (monster.isDead === false) {
                ctx.drawImage(monster.image, monster.x, monster.y, 40, 40);
            }
        });
    }

    //If all the monsters3 have loaded, draw them on the background;
    if (monster2Ready === true) {
        hoard3.forEach(function(monster) {
            if (monster.isDead === false) {
                ctx.drawImage(monster.image, monster.x, monster.y, 40, 40);
            }
        });
    }

    //If all the monsters3 have loaded, draw them on the background;
    if (monster3Ready === true) {
        hoard4.forEach(function(monster) {
            if (monster.isDead === false) {
                ctx.drawImage(monster.image, monster.x, monster.y, 40, 40);
            }
        });
    }

    //If all the monsters3 have loaded, draw them on the background;
    if (monster3Ready === true) {
        hoard5.forEach(function(monster) {
            if (monster.isDead === false) {
                ctx.drawImage(monster.image, monster.x, monster.y, 40, 40);
            }

            // if (monster.isDead === true ) {
            //   monster.image.src = ;
            // }

        });
    }


    if (37 in events || 65 in events) { // LEft Arrow Key movement
        spaceship.x = spaceship.x - 5;
    }

    if (39 in events || 68 in events ) { // Right Arrow Key Movement
        spaceship.x = spaceship.x + 5;
    }

    if (spaceship.x > canvas.width) { // Loops The Spaceship through edge's
        spaceship.x = 0;
    }
    if (spaceship.x < 0) { // Loops The Spaceship through edge's
        spaceship.x = canvas.width - 75;
    }

    // If the shots are within the array and within range, update the original array
    // This allows multiple shots to be fired and exist if theyre within the canvas
    if (spaceShots.length > 0) {
        var stillGoodShots = [];

        spaceShots.forEach(function(shot) {
          if (shot.hitTarget === false) {
            ctx.drawImage(spaceShotImg, shot.x, shot.y, 2, 8);
            shot.y -= 15;

            if (shot.y > 0) {
                stillGoodShots.push(shot);
            }
          }

        });


        spaceShots = stillGoodShots;
    }
};

//detection (wasHit?)

Monster.prototype.wasHit = function() {

    this.isDead = true;

};

var monsterArray = [hoard1, hoard2, hoard3, hoard4, hoard5];


function checkDeadDudes() {
  monsterArray.forEach(function(hoard) {
      hoard.forEach(function(monster) {
          spaceShots.forEach(function(shot) {
              if (monster.isDead === false && (monster.x <= shot.x) && (shot.x <= (monster.x + 50)) && // Hit detection
              (monster.y <= shot.y) && (shot.y <= (monster.y + 10))) {
                  monster.wasHit();
                  shot.hitTarget = true;

              }

          });
      });


  });
}

function moveHoard() {

  monsterArray.forEach(function(hoard){
    hoard.forEach(function(monster){
      monster.x +=20;
        if (hoard[hoard.length - 1].x > (canvas.width - 50)) {
          monster.y+=10;
          monster.x -=20;
        }
    });
  });
}


// Game Loop

var gameloop = function() {
    render();
};

// Interval for the game loop
setInterval(gameloop, 15);

// Interval for movement
setInterval(moveHoard, 500);
