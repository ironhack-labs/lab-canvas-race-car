window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

class car {
  constructor(){
    this.x=25
    this.y=25

    const img=new Image()
    img.addEventListener('load', ()=>{
      this.img=img
      this.draw()
    })
    src=/Users/dannblack/Desktop/Ironhack/semana2-dia4/lab-canvas-race-car/images/car.png
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

const ghost = new Car();

const myGameArea = {
  start: function (){
    this.context = this.canvas.getContext("2d")
    document.body.insertBefore(this.canvas, document.body.childNodes[0])
    this.interval = setInterval(updateGameArea, 20)
  },
  stop: function(){
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 350, 50);
  },
}

// COMPONENTES DEL JUEGO - OBJETOS DEL JUEGO (JUGADOR, PIPA)
class Component {
  // props
  constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      // velocidad
      this.speedX = 0
      this.speedY = 0
  }
  // methods
  update(){
      const ctx = myGameArea.context
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  newPos () {
      this.x += this.speedX
      this.y += this.speedY
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
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }
};

//AREA TO CHECK OUR CRACHWITH() EVERY TIME WE UPDATE OUR GAME
function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });
 
  if (crashed) {
    myGameArea.stop();
  }
}

// INSTANCIAMIENTO DEL JUGADOR
const player = new Component(30, 30, "blue", 0, 110)
// MOTOR DE CAMBIO DEL JUEGO (BORRADO Y CREACIÓN DE ELEMENTOS DEL CANVAS)
function updateGameArea () {
    myGameArea.clear();
    player.newPos();
    player.update();
    updateObstacles();
    checkGameOver();
    myGameArea.score();
}

// CREACIÓN DE OBSTÁCULOS
const myObstacles = [];

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let x = myGameArea.canvas.width;
    let minHeight = 20;
    let maxHeight = 200;
    let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(10, height, 'green', x, 0));
    myObstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
  }
}

// INVOCACIÓN DE INICIO DEL JUEGO
myGameArea.start()
// EVENTOS DE TECLADO
document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 38: // up arrow
        player.speedY -= 1;
        break;
      case 40: // down arrow
        player.speedY += 1;
        break;
      case 37: // left arrow
        player.speedX -= 1;
        break;
      case 39: // right arrow
        player.speedX += 1;
        break;
    }
  });
  document.addEventListener('keyup', (e) => {
    player.speedX = 0;
    player.speedY = 0;
  });