window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    myGameArea.start();
    
    const canvas = document.getElementById('canvas');
    canvas.style.backgroundImage = "url('../images/road.png')";
    canvas.style.backgroundRepeat = "no-repeat";
    canvas.style.backgroundSize = "cover";
    canvas.style.backgroundPosition = "center";

  }
};

const myGameArea = {
  canvas: document.getElementById('canvas'),
  frames: 0,
  start() {
    this.ctx = this.canvas.getContext('2d');
    this.interval = setInterval(updateGameArea, 20);
  },

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  stop() {
    clearInterval(this.interval);
  },

  score () {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${points}`, 350, 50);
  }

}

function updateGameArea() {
  myGameArea.clear();
  player.newPos();
  player.update();
  updateObstacles();
  myGameArea.score()
  checkGameOver()
}

class Player {
  constructor() {
    this.width = 80;
    this.height = 160;       
    this.x = 210;
    this.y = 500;
    this.car = new Image();
    this.car.src = "../images/car.png" 
    this.speedX = 0;
  }

  newPos() {
    if(0 <= this.x && this.x <= 500-this.width) {
      this.x += this.speedX;
      if(this.x < 0) {
        this.x = 0
      }
      if(this.x > 500-this.width) {
        this.x = 500-this.width;
      }
    }
    
  }

  update() {
    const ctx = myGameArea.ctx;
    ctx.drawImage(this.car, this.x, this.y, this.width, this.height)
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.y ||
      this.top() > obstacle.y + obstacle.height ||
      this.right() < obstacle.x ||
      this.left() > obstacle.x + obstacle.width
    );
  }

}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  // desenha o quadrado/retangulo
  update() {
    const ctx = myGameArea.ctx;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

const player = new Player();

let myObstacles = [];

function updateObstacles () {

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 7;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  
  if (myGameArea.frames < 500){
    if (myGameArea.frames % 125 === 0) {
      let x = Math.floor(Math.random() * 250)
      let width = Math.floor(Math.random() * (300 - 100) + 100);
      myObstacles.push(new Component(width, 20, "green", x, 0))  
    }
  } else if (myGameArea.frames < 1000){
    if (myGameArea.frames % 100 === 0) {
      let x = Math.floor(Math.random() * 250)
      let width = Math.floor(Math.random() * (300 - 100) + 100);
      myObstacles.push(new Component(width, 20, "yellow", x, 0))  
    }
  } else if (myGameArea.frames < 1500){
    if (myGameArea.frames % 75 === 0) {
      let x = Math.floor(Math.random() * 250)
      let width = Math.floor(Math.random() * (300 - 100) + 100);
      myObstacles.push(new Component(width, 20, "red", x, 0))  
    }
  } else {
      if (myGameArea.frames % 50 === 0) {
      let x = Math.floor(Math.random() * 250)
      let width = Math.floor(Math.random() * (300 - 100) + 100);
      myObstacles.push(new Component(width, 20, "black", x, 0))  
    }
  }

}

function checkGameOver() {
  const crashed = myObstacles.some(obstacle => player.crashWith(obstacle));

  if (crashed) {
    myGameArea.stop();
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft": // left arrow
      player.speedX -= 10;
      break;
    case "ArrowRight": // right arrow
      player.speedX += 10;
      break;
    case "Escape":
      myGameArea.stop()
      break;
  }
});

document.addEventListener("keyup", (e) => {
  player.speedX = 0;
  player.speedY = 0;
});