const $canvas= document.querySelector("canvas");
const ctx = $canvas.getContext("2d");
let gameInterval
//CLases del juego
const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0, // CADA 20 MILISEGUNDOS SE MODIFICA ESTE NÚMERO
  
  // INICIAR EL CANVAS
  start: function() {
      this.canvas.width  = 500
      this.canvas.height = 700
      this.context = this.canvas.getContext("2d")
      document.body.appendChild(this.canvas, document.body.childNodes[0])
      this.interval = setInterval(updateGameArea, 20)
  },
  clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
  },
  stop: function () {
      clearInterval(this.interval)
  },
  score: function () {
      const points = Math.floor(this.frames / 5)
      this.context.font = '16px serif',
      this.context.fillStyle = 'black',
      this.context.fillText(`Score: ${points}`, 350, 50)
  }}
// CLASES
class Board {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.img = new Image();
    this.img.src = "/images/road.png";
  }
  //Metodo
  draw() {                         
    if (this.y >= $canvas.height) this.y = 0; 
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(
      this.img,
      this.x,
      this.y - canvas.height, 
      this.width,
      this.height
    )
  }
}
//Auto
class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 70;
    this.height = 90;
    this.speed = 6;
    this.img = new Image();
    this.img.src = "/images/car.png";
    this.speedX = 0
    this.speedY = 0
  }
  left() {
    return this.x
  }
  right() {
  return this.x + this.width
  }
  //Metodos de auto
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }
  moveRight() {
    this.x += this.speed;
  }
  moveLeft() {
    this.x -= this.speed;
  }
}
// OBSTÁCULOS
const myObstacles = []

class Component {
  constructor(width, height, color, x, y){
      this.width      = width
      this.height     = height
      this.color      = color
      this.x          = x
      this.y          = y

      this.speedX     = 0
      this.speedY     = 0

  }
crashWith(obstacle) {
  return !(this.right() < obstacle.left() || this.left() > obstacle.right())
}
update() {
  const ctx = myGameArea.context
  ctx.fillRect(this.x, this.y, this.width, this.height)
}
newPos() {
  this.x += this.speedX //
  this.y += this.speedY // 0
}

}
function updateObstacles () {
    for(i = 0; i < myObstacles.length; i++){
        myObstacles[i].x += -1
        myObstacles[i].update()
    }

    myGameArea.frames += 1
    if(myGameArea.frames % 120 === 0) {
        let canvasWidth = myGameArea.canvas.width
        let canvasHeight = myGameArea.canvas.height

        // ESTABLECEMOS EL TAMAÑO DEL TUBITO VERDE
        let minWidth   = 400
        let maxWidth   = 500
        let width       = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth )

        // ESTABLECEMOS EL ESPACIO DE SEPARACIÓN VERTICAL ENTRE LOS TUBOS
        let minGap      = 50
        let maxGap      = 200
        let gap         = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

        myObstacles.push(new Component(10, height, "red", canvasWidth, 0))

        myObstacles.push(new Component(10, canvasHeight - width - gap, 'burgundy', canvasWidth, width + gap))
    }
}

//Instancias 
const board = new Board()
const car = new Car(215, 600)
//Motor del juego
function updateGame() {
  //limpiar el canvas
  clearCanvas(); //llamar la funcion 
  board.draw();
  car.draw();
  pauseGame();
  startGame()
  updateObstacles()   // AGREGAR +1 EN LOS FRAMES Y GENERAR OBSTÁCULOS
  player.newPos()     // VERIFICANDO SI HAY CAMBIOS EN X y Y
}

//FUNCIONES AUXILIARES
function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height);
}
function pauseGame() {
  clearInterval(gameInterval);
  gameInterval = null;
}
function checkGameOver () {
  const obstacle = myObstacles.some((obstacle) => {
      return car.crashWith(obstacle)
  })
  console.log("crashed", obstacle)
  if(obstacle) {
      myGameArea.stop()
  }

}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  document.addEventListener("keydown", (e) => {

    switch(e.keyCode) {
        case 37: //IZQ
            car.speedX -= 1
            break
        case 39: //DER
            car.speedX += 1
            break
    }  
})

  function startGame() {
    if (gameInterval) return;
    gameInterval = setInterval(updateGame, 1000 / 60)//continuidad
    player.update()     // CREA EL JUGADOR (PINTA EL JUGADOR EN EL CANVAS)
  }
};
document.addEventListener("keyup", (e) => {
  car.speedX = 0
  car.speedY = 0
})

/**/
