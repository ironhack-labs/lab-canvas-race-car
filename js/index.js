const gameIntroScreen = document.querySelector(".game-intro");
//const gameBoardScreen = document.getElementById("game-board");

let roadBg;
let carImg;
let x = 325; // car image location x
let y = 700; // car image location y
let obstacles = [];
let gameover = false;

function preload() {
  carImg = loadImage('../images/car.png');
  roadBg = loadImage("../images/road.png");
}

function setup() {

  const canvas = createCanvas(720, 800);
  canvas.parent("game-board"); //Insert canvas in the div id="game-board"

  for (let i = 0; i < 4; i++) {
    obstacles.push(new Obstacle());
  }
}

function draw() {
  background(roadBg);
  image(carImg, x, y, 70, 80);

  if (keyIsPressed) {
    if (keyCode == RIGHT_ARROW) {
      if (x < 560) x += 5;
      //console.log(x);
    } else if (keyCode == LEFT_ARROW) {
      if (x > 100) x -= 5;
      //console.log(x);
    }
  }

  if (gameover) {
    text('game over', 330, 400);
    //gameBoardScreen.style.display = "none";
  } else {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].draw();
      obstacles[i].move();
      obstacles[i].collide();
    }
  }
}

class Obstacle {
  constructor() {
    this.a = 100 + random(280);
    this.b = 0;
  }

  draw() {
    push();
    noStroke();
    fill(255, 0, 0);
    rect(this.a, this.b, 245, 50);
    pop();
  }

  move() {
    this.b++;
    console.log("Distancia do obstaculo: " + this.b);
  }

  collide() {
    let distToMe = dist(x, y, this.a, this.b);
    console.log("Distancia colisão: " + distToMe);
    if (distToMe < this.b) {
      gameover = true;
    }
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    gameIntroScreen.style.display = "none";
  }
};
