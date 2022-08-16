// road & car
let roadY = 0;
let treeY = 0;
let roadH = 777;
let carX = 225;
let carY = 550;
let carW = 50;
let carH = 100;

// game
let gameTime = 0;
let gameSpeed = 0;
let movement = 0;
let gameStarted = false;
let gameover = false;
let score;
let alternativeScore = 0;
let passedByCount = 0;
let level = 0;
let levelUpToggle = true;
let obstacles = [];

const startButton = document.getElementById("start-button");

function setup() {
  createCanvas(500, 700);
  roadImg1 = loadImage("images/onlyRoad.png");
  roadImg2 = loadImage("images/onlyRoad.png");
  treeImg1 = loadImage("images/onlyTrees.png");
  treeImg2 = loadImage("images/onlyTrees.png");
  carImg = loadImage("images/car.png");
}

function draw() {
  // road & car
  image(roadImg1, 0, roadY - 77, 500, 777);
  image(roadImg2, 0, roadY - 77 - roadH, 500, 777);
  image(treeImg1, 0, treeY - 77, 500, 777);
  image(treeImg2, 0, treeY - 77 - roadH, 500, 777);
  image(carImg, carX, carY, carW, carH);

  // player and street
  moveCar();
  moveBackground();
  createScore();
  // game functionality
  levelCheck();
  createBoundaries();
  // obstacles
  obstacleSpawn();

  roadY += gameSpeed;
  treeY += gameSpeed / 2;
  gameOverCheck();
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    if (gameover) location.reload();
    startGame();
  };

  document.getElementById("level-1").onclick = () => {
    if (gameover) location.reload();
    startGame();
    levelUp(1);
  };

  document.getElementById("level-2").onclick = () => {
    if (gameover) location.reload();
    startGame();
    levelUp(2);
  };

  document.getElementById("level-3").onclick = () => {
    if (gameover) location.reload();
    startGame();
    levelUp(3);
  };

  document.getElementById("level-4").onclick = () => {
    if (gameover) location.reload();
    startGame();
    levelUp(4);
  };

  function startGame() {
    gameSpeed += 2;
    movement += 2;
    gameStarted = true;
    setInterval(function () {
      gameTime++;
    }, 1000);
  }
};
