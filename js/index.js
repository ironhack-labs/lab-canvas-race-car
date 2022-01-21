const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestID;

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    requestID = requestAnimationFrame(updateCanvas);
  }
};

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
    if (this.y > canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(this.image, this.x, this.y - this.height, this.width, this.height);
  }
  gameOver() {
    ctx.font = "80px Arial";
    ctx.fillText("Game Over", 150, 150);
  }
}

const background = new Background();
console.log(background);
console.log(background.image.src);

function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  background.draw();
  car.draw();
  if (requestID) {
    requestID = requestAnimationFrame(updateCanvas);
  }
}

class Car {
  constructor(x, y, w, h, img) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "images/car.png";
  }
  draw() {
    // if (frames % 10 === 0) {
    //   this.x -= 5;
    // }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  // collision(item) {
  //   return (
  //     this.x < item.x + item.width &&
  //     this.x + this.width > item.x &&
  //     this.y < item.y + item.height &&
  //     this.y + this.height > item.y
  //   )
  }


  const car = new Car(225, 550, 50, 75, "images/car.png")

  addEventListener("keydown", (event) => {
    if(event.keyCode === 37){
      if (car.x > 10){
        car.x -=20  
      } 
    }

    if(event.keyCode === 39){
      if (car.x < 435){
        car.x +=20  
      }
    }
})




class Obstacles extends Car {
  constructor(x, y, w, h, img) {
    super(x, y, w, h, img)
  }
}



const imageObstacles = ["images/man.png","images/woman.png"]
const obstacles = [];
function generateEnemies() {
  if (frames % 300 === 0 || frames % 500 === 0) {
      let x = Math.floor(Math.random() * (650 - 50) + 50);
      let imgRand = Math.floor(Math.random() * imageObstacles.length);
      const obstacle = new Obstacle(x, 0, 50, 50, imageObstacles[imgRand]);
      obstacles.push(obstacle);
  }
}

function drawEnemies() {
  enemies.forEach((obstacle, index_obstacle) =>
  obstacle.draw()
  /*  if(obstacle.y + obstacle.height > canvas.height) { 
  }*/ 
  )
}