const myObstacles = [];

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    myGameArea.startGame();
  }
}
//defino my area de canvas como myGameArea, donde inicializo todo.

const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  startGame: function() {
    this.canvas.width = 500;
    this.canvas.height = 700;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // call updateGameArea() every 20 milliseconds
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
};

function drawSquare(){  
  let ctx = myGameArea.context;
  ctx.fillStyle="green";
  ctx.fillRect(0,0,500,700);
  ctx.fillStyle="lightgrey";
  ctx.fillRect(50,0, 400,700);
  ctx.clearRect(60,0,380,700);
  ctx.fillStyle="lightgrey";
  ctx.fillRect(70,0, 360,700);
}

function drawlines(){
  let ctx = myGameArea.context;
  //color de la linea
  ctx.strokeStyle = "white";
  //grosor de la linea
  ctx.lineWidth = 5;
  //asi la hago dicontinua
  ctx.setLineDash([20, 5]);  
  ctx.beginPath();
  // starting position is x=350, y=0
  ctx.moveTo(250,0);
  // draw the line that has final coordinates x=350, y=700
  ctx.lineTo(250,700);
  // .stroke() executes the drawing
  ctx.stroke();
  ctx.closePath();
}

// function drawCar(){
//   // para cargar la imagen en la posicion que quiero 
//   let ctx = myGameArea.context;
//   const car = new Image();
//   car.src = "./../images/car.png"
//   ctx.drawImage(car, 225, 630, 50, 70);
// }

class Component {
  constructor(width, height, img, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.img = img;
    // new speed properties
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    // let ctx = myGameArea.context;
    // ctx.Component(this.x, this.y,this.img, this.width, this.hwidth);
    let ctx = myGameArea.context;
    const comp = new Image();
    comp.src = this.img;
    ctx.drawImage(comp, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
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
    return this.y + this.width;
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

//coche
let player = new Component(50, 70,"./../images/car.png",255, 630);


function updateGameArea() {
  myGameArea.clear();
  drawSquare();
  drawlines();
  player.newPos();
  player.update();
  updateObstacles();
  //check if the game should stop
  checkGameOver();
}

document.onkeydown = function(e) {
  switch (e.key) {
    case 38: // up arrow
      player.speedY += 1;
      break;
    case 40: // down arrow
      player.speedY -= 1;
      break;
    case 37: // left arrow
      player.speedX += 1;
      break;
    case 39: // right arrow
      player.speedX -= 1;
      break;
  }
};

document.onkeyup = function(e) {
  player.speedX = 0;
  player.speedY = 0;
};

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }


  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let y = myGameArea.canvas.height;
    let minWidth = 100;
    let maxWidth = 20;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 100;
    let maxGap = 400;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(width,10,src = "./../images/red.png", 0, y));
    myObstacles.push(new Component(y-width-gap, 10, "./../images/red.png", width + gap, y)
    );
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function(obstacle) {
    return player.crashWith(obstacle);
  });

  // if (crashed) {
  //   myGameArea.stop();
  // } 
}
