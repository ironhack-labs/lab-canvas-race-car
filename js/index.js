const myObstacles = [];
let carX = 225;
let carY = 550;
const myGameArea = {
  canvas: document.getElementById("canvas"),
  ctx: this.canvas.getContext("2d"),
  frames: 0,
  start: function() {
    // call updateGameArea() every 20 milliseconds
    this.interval = setInterval(updateGameArea, 2);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, 500, 700);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  score: function() {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${points}`, 350, 50);
  }
};

function updateGameArea() {
  myGameArea.clear();
  const road = new Image();
    road.onload = function(){
      myGameArea.ctx.drawImage(road,0,0,500,700)
    }
    road.src = './images/road.png';
  const car = new Image();
    car.onload = function () {
      myGameArea.ctx.drawImage(car, carX, carY, 50, 100)
    };
    car.src = './images/car.png'
  // update the obstacles array
  updateObstacles();
  // check if the game should stop
  //checkGameOver();
  // update and draw the score
  myGameArea.score();
};

function moveLeft() {
  carX -= 25;      
};
function moveRight(){
  carX +=25;
};

document.addEventListener('keydown', e => {
  switch(e.keyCode){
    case 37: moveLeft(); break;
    case 39: moveRight(); break;
  }
updateGameArea();
console.log(carX);
});

class Component {
  constructor(width, x) {
    this.width = width;
    this.height = 20;
    this.color = 'black';
    this.x = x;
    this.y = 0;
    this.speedY = 0;
  }

  update() {
    myGameArea.ctx.fillStyle = this.color;
    myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith() {
    return (
      this.bottom() < 550 &&
      (this.right() > carX ||
      this.left() < carX + 50)
    );
  }
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    myObstacles.push(new Component(Math.floor(Math.random() * 400), Math.floor(Math.random() * 500)));
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function() {
    return myObstacles.crashWith();
  });

  if (crashed) {
    myGameArea.stop();
  }
}


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    updateGameArea();
    myGameArea.start();
  };
};
  






  


  

