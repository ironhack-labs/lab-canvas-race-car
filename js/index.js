window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    let gameIntro = document.getElementById("game-intro");
    gameIntro.remove();
    /*const cnv = createCanvas(window.innerWidth, window.innerHeight);
    cnv.parent("game-board");*/
    loop();
    cnv.show();
    //gameIntro.parentNode.removeChild("gameIntro");
  }
};

function setup() {
  noLoop();
  cnv = createCanvas(window.innerWidth, window.innerHeight);
  cnv.hide();

  //noCanvas();
}

let playerX = window.innerWidth / 2;
let img;
let random = Math.floor(Math.random() * (innerWidth - 250) + 100);
let obstacleY = 0;
let score = 0;
let cnv;

function preload() {
  img1 = loadImage("/images/road.png");
  img2 = loadImage("/images/car.png");
}

function draw() {
  background(50);
  image(img1, 0, 0, window.innerWidth, window.innerHeight);
  image(img2, playerX, 650, 40, 60);
  textSize(32);
  strokeWeight(0);
  text(`Score: ${score}`, 10, 30);

  obstacleY += 2;
  if (obstacleY % 30 == 0) {
    score++;
  }

  rect(random, obstacleY, 80, 40);
  if (obstacleY >= window.innerHeight) {
    obstacleY = 0;
    score += 50;
    random = Math.floor(Math.random() * (innerWidth - 250) + 100);
    rect(random, obstacleY, 80, 40);
  }

  if (collideRectangles() == true) {
    background(0);
    text("Game Over", 200, 250);
  }
}

function collideRectangles() {
  if (
    playerX < random + 80 &&
    playerX + 40 > random &&
    650 < obstacleY + 40 &&
    60 + 650 > obstacleY
  ) {
    score = -50;
    return true;

  }
  return false;
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    playerX += 15;
    if (playerX > window.innerWidth - 120) {
      playerX = window.innerWidth - 120;
    }
  }
  if (keyCode === LEFT_ARROW) {
    playerX -= 15;
    if (playerX < 80) {
      playerX = 80;
    }
  }
}
