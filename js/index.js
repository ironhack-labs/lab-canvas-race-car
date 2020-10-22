


window.onload = () => {
  const $canvas = document.getElementById('canvas')
  const ctx = $canvas.getContext('2d')
  const $btn = document.querySelector('#start-button')
  let gameInterval;
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  class Board{
    constructor(){
      this.x = 0
      this.y = 0
      this.width = $canvas.width
      this.height = $canvas.height
      this.img = new Image()
      this.img.src = './images/road.png'
      //this.img.src = 'https://opengameart.org/sites/default/files/desert_BG.png'
    }
    drawBoard(){
      if(this.y <-$canvas.height) this.x = 0
    this.x--
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x + $canvas.width, this.y, this.width, this.height)
   // ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    //ctx.drawImage(this.img, this.x + $canvas.height, this.y, this.height, this.width)
    }
  }

  
  class Car {
    constructor(x,y){
      this.x = x
      this.y = y
      this.width = 30
      this.height = 48
      this.img = new Image()
      this.img.src = './images/car.png'
    }
    drawCar(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveUp(){
      this.y -= 5
    }
    moveDown(){
      this.y += 5
    }
    moveLeft(){
      this.x -= 5
    }
    moveRight(){
      this.x += 5
    }
  }

  function startGame() {
    if (gameInterval) return
    gameInterval = setInterval(updateGame, 1000 / 60)
  }
  function clearCanvas() {
   //ctx.clearRect(0, 0, $canvas.width, $canvas.height)
    ctx.clearRect(0, 0, 0, 0)
  }

  let x = 0
  let car = new Car($canvas.width/2 -15,$canvas.height-100)
  let board = new Board()

    function updateGame() {
      //recalcular el estado de los elementos
      x++
      //limpiar el canvas
      //clearCanvas()
      //dibujar los elementos
      //ctx.fillRect(x, 0, 10, 10)
      board.drawBoard()
      car.drawCar()
      
    }

    //move Car
    
document.onkeydown = e => {
  switch (e.keyCode) {
    // izquierda
    case 37:
    car.moveLeft()
    break;
    //derecha
    case 39:
    car.moveRight()
    break
    default:
      break;
  }
}
};
