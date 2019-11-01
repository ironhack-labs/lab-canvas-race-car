window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };  function startGame() {  }
 };
 
 const canvas = document.querySelector('canvas');
 const ctx = canvas.getContext('2d');
 let interval
 let i = 0;
 
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
    ctx.fillRect(197, inicial, 6, 15);
    inicial += 30;
  }
}
  
  class Carrito {
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
  
  moveLeft() {    
    if (this.x >= 70) {
      this.x -= 3
    }
  }
  moveRight() {
    if (this.x <= 330 - this.width) {
      this.x += 3
    }
  }
 }
 
 function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
 }document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      carrito.moveLeft()
      return
    case 39:
      carrito.moveRight()
      return
  }
 }

 class Obstacle {
  constructor(x) {
    this.x = x
    this.y = 0
    this.width = 200
    this.height = 30
    this.img = new Image()
    this.img.src = 'images/obs.png'
  }
  draw(){
    if(this.y === 600){
      this.y=0;
    }else{
      this.y++
    }
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    
  }
}

rndom = ()=> Math.floor(Math.random()*200)
 const carrito = new Carrito()
 const myObstacle1 = new Obstacle(rndom());
 const myObstacle2 = new Obstacle(rndom());
 const myObstacle3 = new Obstacle(rndom());
 
 function update() {
  clearCanvas()
  drawBoard()
  carrito.draw()
  myObstacle1.draw()
  myObstacle2.draw()
  myObstacle3.draw()
}
  
  interval = setInterval(update, 1000 / 60)

 