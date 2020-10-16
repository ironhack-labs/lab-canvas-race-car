window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {

    var startGame = {
      canvas: document.createElement("canvas"),
      start: function() {
        this.canvas.width = 500;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);      
        this.interval = setInterval(updateGameArea, 20);
      },
      clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      },
    };
    function updateGameArea() {
      startGame.clear();
      car.update();
    }
  }
};
startGame.start();

// BACKGROUND

const img = new Image();
img.src = "./../images/road.png";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const backgroundImage = {
  img: img,
  y: 0,
  speed: -1,

  move: function() {
    this.y += this.speed;
    this.y %= canvas.width;
  },

  draw: function() {
    ctx.drawImage(this.img, this.y, 0);
    if (this.speed < 0) {
      ctx.drawImage(this.img, this.y + canvas.width, 0);
    } else {
      ctx.drawImage(this.img, this.y - this.img.width, 0);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

img.onload = updateCanvas;

// CAR

class Car {
  constructor() {
    this.x = 70;
    this.y = 70;
    
    const img = new Image();
    img.addEventListener('load', () => {      
      this.img = img;
      this.draw();
    });
    img.src = "./../images/car.png";
  }
  moveUp() {
    this.y -= 25;
  }
  moveDown() {
    this.y += 25;
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const car = new Car();

document.addEventListener('keydown', e => {
  switch (e.keyCode) {
    case 38: car.moveUp();    console.log('up',    car); break;
    case 40: car.moveDown();  console.log('down',  car); break;
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  updateCanvas();
})

function updateCanvas() {
  ctx.clearRect(0,0,1500,1700);
  ctx.fillText("Car_x: " + car.x, 580,40);
  ctx.fillText("Car_y: " + car.y, 580,60);
  
  car.draw()
}

updateCanvas()

// OBSTACLES

function updateGameArea() {
  startGame.clear();
  car.newPos();
  car.update();

  updateObstacles();
}
var myObstacles = [];
 
var startGame = {
  canvas: document.createElement("canvas"),
  frames: 0,
  
};

function updateObstacles() {
  startGame.frames += 1;
  if (startGame.frames % 120 === 0) {
    var x = startGame.canvas.width;
    var minHeight = 20;
    var maxHeight = 200;
    var height = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight
    );
    var minGap = 50;
    var maxGap = 200;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, "red", x, 0));
    myObstacles.push(
      new Component(10, x - height - gap, "red", x, height + gap)
    );
  }
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
}

// CRASH

var myGameArea = {
  stop: function() {
    clearInterval(this.interval);
  },
};

class Component {
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
    this.bottom() < obstacle.top() ||
    this.top() > obstacle.bottom() ||
    this.right() < obstacle.left() ||
    this.left() > obstacle.right()
  );
}
}
function checkGameOver() {
  var crashed = myObstacles.some(function(obstacle) {
    return car.crashWith(obstacle);
  });

  if (crashed) {
    startGame.stop();
  }
}

function updateGameArea() {
  startGame.clear();
  car.newPos();
  car.update();
  updateObstacles();
  checkGameOver();
}

// SCORE

var startGame = {
  score: function() {
    var points = Math.floor(this.frames / 5);
    this.context.font = "18px serif";
    this.context.fillStyle = "black";
    this.context.fillText("Score: " + points, 350, 50);
  }
};
function updateGameArea() {
  startGame.clear();
  car.newPos();
  car.update();
  updateObstacles();
  checkGameOver();
  startGame.score();
}

