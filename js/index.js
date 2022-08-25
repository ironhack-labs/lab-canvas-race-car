const canvas = document.querySelector("#game-board canvas");
const ctx = canvas.getContext("2d");

//LOAD IN THE IMAGES----------------------------------------------
let roadImg = new Image();
roadImg.onload = function () {
  ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
};
roadImg.src = "../images/road.png";

let carImg = new Image();
carImg.onload = function () {
  return (player = new Player(carImg));
};
carImg.src = "../images/car.png";

//SETUP CLASSES----------------------------------------------------
class Player {
  constructor(image) {
    this.car = image;
    this.old_x = 200;
    this.x = 200;
  }

  draw() {
    ctx.drawImage(this.car, this.x, 500, 59, 120);
  }
  clear() {
    ctx.clearRect(this.old_x, 500, 50, 120);
  }
}

class Obstacle {
  constructor() {
    this.y = 0;
    this.x = 0;
    this.height = 20;
    this.width = 10;
    this.obstacleArray = [];
    this.totalScore = 0;
  }

  random(n) {
    return Math.floor(Math.random() * n);
  }
  create() {
    this.obstacleArray.push({
      y: 0,
      x: this.random(200),
      width: this.random(200) + 50,
    });
  }
  draw() {
    this.obstacleArray.forEach((e) => {
      ctx.fillStyle = "red";
      ctx.fillRect(e.x, e.y, e.width, this.height);
    });
  }
  score() {
    this.obstacleArray.forEach((e) => {
      if (e.y > 620) {
        score += 1;
        this.totalScore += 1;
        this.obstacleArray.shift();
        console.log("the score is: " + score);
      }
    });
    this.drawScore();
  }
  drawScore() {
    ctx.font = "30px arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.totalScore, 80, 680);
  }
}

//INIT PLAYER
let obstacle = new Obstacle();
let score = 0;
// const player = new Player();

//FUNCTIONS

let checkForCollision = (objects) => {
  let check = "";
  objects.forEach((e) => {
    if (
      player.x < e.x + e.width &&
      player.x + 59 > e.x &&
      500 < e.y + 20 &&
      120 + 500 > e.y
    ) {
      console.log("COLLISION!!");
      check = true;
    }
  });
  return check;
};

///////////

window.addEventListener("keydown", (event) => {
  if (event.code == "ArrowLeft" && player.x >= 70) {
    console.log("Left");
    player.x -= 10;
    player.old_x += 10;
  }
  if (event.code == "ArrowRight" && player.x <= 380) {
    console.log("Right");
    player.x += 10;
    player.old_x -= 10;
  }
});

//GAME INIT --------------------------------------------------------

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("click");
    player.draw();

    let animate = setInterval(() => {
      player.clear();
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height);
      player.draw();
      obstacle.draw();
      obstacle.score();
      if (checkForCollision(obstacle.obstacleArray)) {
        alert("YOU LOST!! " + "The total score is: " + obstacle.totalScore);
        clearInterval(animate);
      }

      //add y to obstacle
    }, 10);
    //move the obstacles down
    setInterval(() => {
      obstacle.obstacleArray.forEach((e) => {
        e.y += 10;
      });
    }, 100);
    //create new obstacle
    setInterval(() => {
      obstacle.create();
    }, 5000);
  }
};
