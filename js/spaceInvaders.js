var canvas = document.querySelector(".canvas"); // Initalize canvas and set it as var: canvas
canvas.height = $(document).height(); // Sets height property of canvas the same as document height (jquery)
canvas.width = $(document).width(); // Sets width property of canvas the same as document width (jquery)


var ctx = canvas.getContext("2d"); // Sets Context to 2D

////////// ALL IMGS NEEDED TO RENDER INCLUDING ANIMATIONS /////////////////////////////

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



var monsterImg2 = new Image(); // Initializing background img as a new Image
monsterImg2.src = "lib/imgs/monster2.png"; // Sets background img's source to img in files
var monster2Ready = false; // initializes var background ready false

var monsterImg2a = new Image(); // Initializing background img as a new Image
monsterImg2a.src = "lib/imgs/monster2-a.png"; // Sets background img's source to img in files



var monsterImg3 = new Image(); // Initializing background img as a new Image
monsterImg3.src = "lib/imgs/monster3.png"; // Sets background img's source to img in files
var monster3Ready = false; // initializes var background ready false


var monsterImg3a = new Image(); // Initializing background img as a new Image
monsterImg3a.src = "lib/imgs/monster3-a.png"; // Sets background img's source to img in files


var spaceShotImg = new Image(); //Initialized space shot and gets it ready for loop
spaceShotImg.src = "lib/imgs/spaceshot.png";
var spaceShotReady = false;

var monsterDrop1 = new Image(); //Initialized space shot and gets it ready for loop
monsterDrop1.src = "lib/imgs/monsterDrop1.png";
var monsterDrop1Ready = false;

var monsterDrop1a = new Image(); //Initialized space shot and gets it ready for loop
monsterDrop1a.src = "lib/imgs/monsterDrop1a.png";

////////////////////// ONLOAD IMAGE VARIABLES ///////////////////
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

monsterDrop1.onload = function () {
  monsterDrop1Ready = true;
};




function Monster(x, y, points, img, isDead) { //Monster constructor to create different monster
    this.x = x;
    this.y = y;
    this.points = points;
    this.image = img;
    this.isDead = false;
}

var hoard1 = []; // Makes Multiple Monsters type: a (top
for (i = 1; i <= 11; i++) {
    hoard1.push(new Monster(350 + i * 55, 100, 40, monsterImg1));
}

var hoard2 = []; // Makes Multiple Monsters type: b
for (i = 1; i <= 11; i++) {
    hoard2.push(new Monster(355 + i * 55, 160, 20, monsterImg2));
}

var hoard3 = []; // Makes Multiple Monsters type: b
for (i = 1; i <= 11; i++) {
    hoard3.push(new Monster(355 + i * 55, 210, 20, monsterImg2));
}

var hoard4 = []; // Makes Multiple Monsters type: c
for (i = 1; i <= 11; i++) {
    hoard4.push(new Monster(350 + i * 55, 260, 20, monsterImg3));
}

var hoard5 = []; // Makes Multiple Monsters type: c
for (i = 1; i <= 11; i++) {
    hoard5.push(new Monster(350 + i * 55, 310, 20, monsterImg3));
}



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
        ion.sound.play("shoot");


        shot = {
            x: spaceship.x + 20,
            y: spaceship.y - 20,
            hitTarget: false,

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
    health: 100,
    width: 40,
    height: 22
};
var spaceShots = [];
var currentScore = 0;


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

// Check to see if there is any dead monsters
var render = function() {
  checkDeadDudes();
    if (backgroundReady === true) {

        ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);


    }
    if (spaceShipReady === true) {
        ctx.drawImage(spaceShipImg, spaceship.x, spaceship.y, spaceship.width, spaceship.height);


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
    if (monsterDropArray.length > 0) {
        var stillGoodDrops = [];

        monsterDropArray.forEach(function(drop) {
          if (drop.hitPlayer === false) {
            ctx.drawImage(drop.image, drop.x, drop.y, 4, 16);
            drop.y += 5;


            if (drop.y < canvas.height) {
                stillGoodDrops.push(drop);
            }
          }

        });

        monsterDropArray = stillGoodDrops;
    }
};

//detection (wasHit?)

Monster.prototype.wasHit = function() {

    this.isDead = true;
    ion.sound.play("invaderkilled");


};

var monsterArray = [hoard1, hoard2, hoard3, hoard4, hoard5];


//MONSTER DROPS

///////////////////////////MONSTERS & MONSTER DROPS  ///////////////////////////
function dropAni() {
  monsterDropArray.forEach(function(drop) {
      if (drop.image === monsterDrop1) {
          drop.image = monsterDrop1a;
      }else{
        drop.image = monsterDrop1;

      }


  });
}

var monsterDropArray = [];



function randomDrop() {

  if (monsterDrop1Ready === true) {
    var randomNum = Math.floor(Math.random() * monsterArray.length);
    var hoard = monsterArray[randomNum];
    randomNum = Math.floor(Math.random() * hoard.length) ;
    var monster = hoard[randomNum];

    var drop = {
      x: monster.x + 20 ,
      y: monster.y,
      hitPlayer: false,
      image: monsterDrop1

      };
      monsterDropArray.push(drop);
  }
}

/////////// Checks to see if the monsters are dead for collion purposes ////////
function checkDeadDudes() {
  monsterArray.forEach(function(hoard) {
      hoard.forEach(function(monster) {
          spaceShots.forEach(function(shot) {
              if (monster.isDead === false && (monster.x <= shot.x) && (shot.x <= (monster.x + 50)) && //// Hit detection
              (monster.y <= shot.y) && (shot.y <= (monster.y + 10))) {
                  monster.wasHit();
                  shot.hitTarget = true;
                  hasWin();
                  score();

              }

          });
      });


  });
}

//////////////////////// MOVE MONSTERS //////////////////////////////////

function moveRight () {
  monsterArray.forEach(function(hoard){
       hoard.forEach(function(monster){
       monster.x += 20;
       });
     });

     ion.sound.play("fastinvader1");

}

function moveLeft () {
  monsterArray.forEach(function(hoard){
       hoard.forEach(function(monster){
       monster.x -= 20;
       });
     });
      ion.sound.play("fastinvader1");
}

function moveDown () {
  monsterArray.forEach(function(hoard){
       hoard.forEach(function(monster){
       monster.y += 20;
       var hasMovedDown = true;
       });
     });
     ion.sound.play("fastinvader1");
}

var sideDirection = 'right';

function moveMonster () {
  if (sideDirection === 'right' && monsterArray[1][10].x  < (canvas.width - 120)) {
    moveRight(); //If the edge of the final monster isn't touching the canvas edge
  }
  if (sideDirection === 'right' && monsterArray[1][10].x  >= (canvas.width - 120 )) {
    sideDirection = 'left';
    moveDown(); //If the edge of the final monster touches the canvas length
  }

  if (sideDirection === 'left' && monsterArray[1][1].x >= 30) {
    moveLeft(); //If the left edge of the 1st monster isnt touching canvas length
  }

  if (sideDirection === 'left' && monsterArray[1][1].x <= 30 ){
    sideDirection = 'right'; //If the left edge touces the canvas right length
    moveDown();

  }
}
/////////// SCORING MECHANISM ////////////////////////

function score() {
  var total = 0;
  monsterArray.forEach(function (hoard) {
    hoard.forEach(function(monster) {
      if (monster.isDead === true) {
        total += monster.points;
      }
    });
  });
  console.log(total);
  currentScore = total;
}



///////////// WIN LOSS //////////////////////


function hasWin(){
  var won = true;

  monsterArray.forEach(function(hoard){
    hoard.forEach(function(monster){
       if (monster.isDead === false) {
         won = false;
       }
    });
  });
    return won;
}

function hasLost() {
  monsterArray.forEach(function(hoard){
    hoard.forEach(function (monster) {
      if ((monster.y) >= (canvas.height - 170)) {
        loser();
      }
    });
  });
}


 //(monster.isDead === false && (monster.x <= shot.x) && (shot.x <= (monster.x + 50)) &&
 // (monster.y <= shot.y) && (shot.y <= (monster.y + 10)))
function hasDied() {
  monsterDropArray.forEach(function(drop){
  if ((spaceship.x <= drop.x) && (drop.x <= (spaceship.x + spaceship.width))&&
   (drop.y + 8 >= spaceship.y) && (drop.y <= spaceship.y + spaceship.height)) {
     loser();
      }
        });
    }







/////////////////// GAME LOOPS //////////////////////////////////

var gameloop = function() {
    render();
    hasLost();
    hasDied();

    if (hasWin() === true ){
        winner();
    }
};

var myIntervalID = [];

// Interval for the game loop
myIntervalID[0] = setInterval(gameloop, 15);

// Interval for movement
myIntervalID[1] = setInterval(moveMonster, 700);

//Monster Animation ////////
myIntervalID[2] = setInterval(monsterAni, 700);
//Random Monster Drops //////
myIntervalID[3] = setInterval(randomDrop, 1000);

//Random Drop Animation //

myIntervalID[4] = setInterval(dropAni, 100);

//// SOUNDS ////////////////////////////////////////////////////////////////////////

ion.sound({
   sounds: [
     {name: "fastinvader1"},
     {name: "shoot"},
     {name: "invaderkilled"},

   ],
   volume: 1.0,
   path: "lib/ion.sound-3.0.7/sounds/",
   preload: true
 });
