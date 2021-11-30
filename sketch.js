var canvas;
var backgroundImage,ship1img,ship2img,track;
var fuelImage,powerCoinImage,lifeImage,blastImage;;
var obstacle1Image,obstacle2Image;                        
var database,gameState;
var form,player,playerCount;
var allPlayers,ship1,ship2,blast,fuels,powerCoins,obstacles;
var ships = [];
                   

function preload() {
  backgroundImage = loadImage("assets/background.jpg");
  blastImage = loadImage("assets/blast.png"); 
  fuelImage = loadImage("assets/fuel.png");
  powerCoinImage = loadImage("assets/goldCoin.png");
  lifeImage = loadImage("assets/heart.png");
 
  obstacle1Image = loadImage("assets/obs1.png"); 
  obstacle2Image = loadImage("assets/obs2.png");
  ship1img = loadImage("assets/ship1.png");
  ship2img = loadImage("assets/ship2.png");
  track = loadImage("assets/track.jpg");
  
  }

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(backgroundImage);
  if (playerCount === 2) {
    game.update(1);
  }

  if (gameState === 1) {
    game.play();
  }

  if (gameState === 2) {
    game.showLeaderboard();
    game.end();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
