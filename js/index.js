const ctx = document.getElementById("canvas").getContext("2d");
const roadImg = new Image();
roadImg.src = "../images/road.png";

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(roadImg, 0, 0, 500, 700);
    car.draw();
    myGameArea.start();
  }

  const myGameArea = {
    frames: 0,
    obstacles: [],
    start: function() {
      this.context = this.canvas.getContext('2d');
      this.canvas.width = 500;
      this.canvas.height = 700;
      this.interval = setInterval(updateGameArea, 20);
    },

    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },

    stop: function() {
      clearInterval(this.interval);
      setTimeout(this.gameOver, 1000);
    },

    score: function() {
      this.points = Math.floor(this.frames / 50);
      this.context.fillStyle = 'black';
      this.context.font = '18px serif';
      this.context.fillText(`SCORE: ${this.points}`, 10, 680);
    }
  }

  class Background {
    constructor(source){
      this.img = new Image();
      this.img.src = source;
      this.x = 0;
      this.y = 0;
    }
    draw() {
      myGameArea.context.drawImage(this.img, this.x, this.y)
    }
  }

class ScrollingBackground {
  constructor (source) {
    this.img = new Image();
    this.img.src = source;
    this.x = 0;
    this.y = 0;
    this.speed = -1;
  }
  // atualiza posição
  move () {
    this.x += this.speed;
    this.x %= myGameArea.canvas.width;
  }
  // desenha imagem
  draw () {
    myGameArea.context.drawImage(this.img, this.x, this.y);
    if (this.speed < 0) {
      myGameArea.context.drawImage(this.img, this.x + this.img.width, 0);
    } else {
      myGameArea.context.drawImage(this.img, this.x - this.img.width, 0);
    }
  }
}
const background = new ScrollingBackground('../images/road.png'); // instância da imagem de fundo

class Car {
  constructor() {
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.x = 220;
    this.y = 600;
    this.speed = 0;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 80)
  }
  newPos() {
    this.x += this.speed; 
  }
  top() {

  }
  bottom() {

  }
  left() {
return this.x;
  }
  right() {
return this.x + this.width;''
  }
  outOfBonds() {

  }
}
const car = new Car();

class Obstacle {
  constructor(x, y, width, height, side) {
this.x = x; // Math.floor(Math.random() * )
this.y = 0;
this.width = width;
this.height = height;
this.side = side;
  }
  update() {
    this.img = new Image();
    
  }
  newPos() {

  }
  left() {

  }
  right() {
    
  }
}

function updateObstacles() {
  myGameArea.frames += 1;
for (let i = 0; i < myGameArea.obstacles.length; i += 1) {
myGameArea.obstacles[i].newPos();
myGameArea.obstacles[i].update();
}

if (myGameArea.frames % 120 === 0) {
  let minGap = 50;
  let maxGap = 200;
  let gap = Math.floor(Math.random() * (maxGap - minGap) + minGap);
  let minWidth = 120;
  let maxWidth = 190; 
  let width = Math.floor(Math.random() * (maxWidth - minWidth) + minWidth);
  let canvasW = myGameArea.canvas.width;
  let canvasH = myGameArea.canvas.height;
  myGameArea.obstacles.push(new Obstacle(canvasW, ))
}
}

function checkGameOver() {
  for (let i = 0; i < myGameArea.obstacles.length; i += 1) {
    if (car.crashWith(myGameArea.obstacles[i]) || car.outOfBonds()){
      myGameArea.stop();
    }
  }
}

function updateGameArea() {
  myGameArea.clear();
  background.move();
  background.draw();
  car.newPos();
  car.update();
  updateObstacles();
  myGameArea.frames += 1;
  myGameArea.score();
  checkGameOver();
}


document.addEventListener('keydown', (e) => {
if (e.keyCode === 37) {
  car.speed -= 1;
} else if (e.keyCode === 39) {
  car.speed += 1;
}
})
};










