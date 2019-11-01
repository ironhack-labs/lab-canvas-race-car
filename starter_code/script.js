window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };  function startGame() { 
    frames = 0;
    interval = setInterval(update, 1000 / 120)
   }
 };
 
 const canvas = document.querySelector('canvas');
 const ctx = canvas.getContext('2d');
 let interval
 const obstacles = []
 let frames = 0

 function drawBoard() {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 50, 600);
  ctx.fillRect(350, 0, 50, 600);
  ctx.fillStyle = 'grey';
  ctx.fillRect(50, 0, 15, 600);
  ctx.fillRect(335, 0, 15, 600);
  ctx.fillRect(70, 0, 260, 600);
  ctx.fillStyle = 'white';
  ctx.fillRect(65, 0, 5, 600);
  ctx.fillRect(330, 0, 5, 600);  let inicial = 5;
  for (i = 0; i <= 20; i++) {
    ctx.fillStyle = 'white';
    ctx.fillRect(195, inicial, 6, 30);
    inicial += 80;
  }
}
  
  class Car {
  constructor() {
    this.width = 50
    this.height = 80
    this.y = 520
    this.x = 175
    this.img = new Image()
    this.img.src = "images/car.png"
    this.img.onload = () => {
      this.draw()
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
  }  
  crash(obstacle) {
    return (
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x &&
      this.y < obstacle.y + obstacle.height &&
      this.y + this.height > obstacle.y
    )
  }
  moveLeft() {    
    if (this.x >= 50) {
      this.x -= 3
    }
  }
  moveRight() {
    if (this.x <= 350 - this.width) {
      this.x += 3
    }
  }
 }
 
 function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
 }document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      carro.moveLeft()
      return
    case 39:
      carro.moveRight()
      return
  }
 }
 function checkColitions() {
  obstacles.forEach((wall) => {
    if (carro.crash(wall)) {
      clearInterval(interval)
      ctx.font = '30px Arial'
      ctx.fillStyle = 'black'
      ctx.fillText('Game Over', canvas.width / 2 - 30, canvas.height / 2 - 10)
    }
  })
}

 class Wall {
  constructor(x) {
  this.x = x
  this.y = 0
  this.width = 100
  this.height = 50
  this.img = new Image()
  this.img.src = "images/muro.png"
  }
  draw() {
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
  }
  
  function generateWall() {
      if(frames % 150 === 0){
        const randomPosition = Math.floor(Math.random() * canvas.width) -50
        const wall = new Wall(randomPosition)
        obstacles.push(wall)
      }  
  }
  
  function drawObstacles() {
    obstacles.forEach(wall => wall.draw())
  }

const carro = new Car()
const muro = new Wall()

 function update() {
  frames ++
  clearCanvas()
  drawBoard()
  carro.draw()
  generateWall()
  drawObstacles()
  checkColitions()
}
