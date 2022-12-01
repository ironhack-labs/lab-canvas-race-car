const myGameArea = document.getElementById('game-board');
const myObstacles = [];

const myCanvas = {
  canvas: document.createElement(`canvas`),
  frames: 0,

  start() {
    this.canvas.width = 350; 
    this.canvas.height = 600; 
    this.context = this.canvas.getContext('2d');
    const myBoard =document.getElementById('game-board');
    myBoard.appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 10);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  score: function() {
    let points = Math.floor(this.frames / 5);
    this.context.font = "18px serif";
    this.context.fillStyle = "black";
    this.context.fillText("Score: " + points, 85, 50);
  },

  loadCanvas() {
    let cumulativeDrawWidth = 0;
    //green area
    this.context.fillStyle = `green`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/10,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/10;
    //first grey thin
    this.context.fillStyle = `grey`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/30,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/30;
    //first white thin
    this.context.fillStyle = `white`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/30,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/30;
    //big thick grey
    this.context.fillStyle = `grey`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width*2/3,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width*2/3;
    //second white thin
    this.context.fillStyle = `white`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/30,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/30;
    //second grey thin
    this.context.fillStyle = `grey`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/30,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/30;
    //second green
    this.context.fillStyle = `green`;
    this.context.fillRect(cumulativeDrawWidth,0,this.canvas.width/10,this.canvas.height);
    cumulativeDrawWidth += this.canvas.width/10;
    //white line
    this.context.beginPath();
    this.context.moveTo(this.canvas.width/2,0);
    this.context.lineWidth = 3;
    this.context.strokeStyle = `white`;
    this.context.setLineDash([5,10]);
    this.context.lineTo(this.canvas.width/2,this.canvas.height);
    this.context.stroke();
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    this.loadCanvas();
  },
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();

    }
  };

 function startGame() {
  myCanvas.start();
  myCanvas.loadCanvas()
  myCar.update();
};
function updateGameArea() {
  myCanvas.clear();
  myCar.update();
  myCar.newPos();
  updateObstacles();
  checkGameOver();
  myCanvas.score();
  myCar.carImageFill(myCanvas.context); 
  console.log('updating');
}
function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  myCanvas.frames += 1;
  if (myCanvas.frames % 240 === 0) {
    
    let minStart = 55;
    let midPoint = 160;
    let maxEnd = 265;
    let obstacleHeight = 40;

    let start = Math.floor(Math.random() * (midPoint - minStart + 1) + minStart);
    let finish =Math.floor(Math.random() * (maxEnd - midPoint +1) + midPoint);

    if((finish-start) > 160) {
      finish = finish - 40; 
    }
    myObstacles.push(new Component(finish - start, obstacleHeight, "rgb(137,0,0)", start, 0));
  }
}

 class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.originalx = x;
  }
}

update() {
  var ctx = myCanvas.context;
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
};

carImageFill(input) {   
  this.color = 'rgb(0,0,0,0)'
  input = myCanvas.context;
  const img = new Image();
  img.src = './images/car.png';
  img.onload = () => {
  input.drawImage(img,this.x,this.y,this.width,this.height);
  }
}

newPos() {
    this.x += this.speedX;
    if (this.x < 55) {
      this.x = 65;
    }
    if (this.x > 265) {
      this.x = 255;
    }
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
};

crashWith(obstacle) {
  return (
    this.bottom() < obstacle.top() ||
    this.top() > obstacle.bottom() ||
    this.right() < obstacle.left() ||
    this.left() > obstacle.right()
  );
};


document.onkeydown = function(e) {
switch (KeyboardEvent.keyCode) {
  case 37: 
    myCar.speedX -= 1; 
    console.log('left key hit');
    break;
  case 39: 
    myCar.speedX += 1;
    console.log('right key hit');
    break;
}
};

document.onkeyup = function(e) {
myCar.speedX = 0;
};

function checkGameOver() {
var crashed = myObstacles.some(function(obstacle) {
  return myCar.crashWith(obstacle);
});

if (crashed) {
  myCanvas.stop();
}
};

let myCar = new Component(30, 60, 'yellow', 160, 500);