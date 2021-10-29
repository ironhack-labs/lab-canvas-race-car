const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

let requestID;
let frames = 0;
let points = 0;

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "images/road.png";
  }
  draw() {
    this.y++;
    if (this.y > +canvas.height) this.y = 0
    //primera imagen 
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    //segunda imagen
    ctx.drawImage(
      this.image,
      this.x,
      this.y - this.height,
      this.width,
      this.height)
  }

  gameOver() {

    ctx.fillStyle = 'black';
    ctx.fillRect(this.x, 500, this.width, 250);

    ctx.fillStyle = "#870007";
    ctx.font = "45px Helvetica"
    ctx.fillText('Game Over!', 120, 550);

    ctx.fillStyle = "white";
    ctx.font = "45px Helvetica"
    ctx.fillText('Your final score', 100, 610);

    ctx.fillStyle = "white";
    ctx.font = "45px Helvetica"
    console.log(`${points}`)
    ctx.fillText(`${points}`, 230, 680);
    //create function score
  }

}


class Car {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "images/car.png"
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
  }
  collision(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
}






class Obstacle {
  constructor(x, w) {
    this.x = x;
    this.y = 0;
    this.width = w;
    this.height = 30;
  }
  draw() {
    if (frames % 20 === 0) this.y += 20;
    ctx.fillStyle = '#870007';
    ctx.fillRect(this.x, this.y, this.width, this.height);

  }
}

let obstacles = []

function generateObstacle() {
  if (frames % 400 === 0) {
    let x = Math.floor(Math.random() * (250 - 50)) + 50
    let w = Math.floor(Math.random() * (300 - 80)) + 80

    const obstacle = new Obstacle(x, w, )

    obstacles.push(obstacle)
  }
}

function drawObstacle() {
  obstacles.forEach((obstacle, index_obstacle) => {
    obstacle.draw()
    if (car.collision(obstacle)) {
      endGame()
    }
    if (obstacle.y + obstacle.height <= 0) {
      obstacles.splice(index_obstacle, 1)
      points += 100;
    }
  })
}

const fondito = new Background();
const car = new Car(215, 500, 70, 130)

function update() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  fondito.draw()
  car.draw()
  generateObstacle();
  drawObstacle();
  if (requestID) {
    requestID = requestAnimationFrame(update)
  }
}

update();

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    requestID = requestAnimationFrame(update)
  }
};


function endGame() {
  fondito.gameOver();
  requestID = undefined
}


//LEFT-RIGHT ARROW
addEventListener("keydown", (e) => {
  //left arrow
  if (e.keyCode === 37 && car.x > 20) {
    car.x -= 20;
  }
  //right arrow
  else if (e.keyCode === 39 && car.x < 400) {
    car.x += 20;
  }
})