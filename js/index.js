//when we click on the Start Game button, we need to create the canvas and display the road.
//SINTAXIS
// void ctx.drawImage(image, dx, dy, dWidth, dHeight);
// void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const $canvas = document.querySelector("canvas");
  const ctx = $canvas.getContext("2d");
  let gameInterval
  let ratio = 0
  let obstacles=[]

  class Road {
    constructor(){
      this.x = 0
      this.y = 0
      this.width = $canvas.width
      this.height = $canvas.height
      this.img = new Image()
      this.img.src = "./images/road.png"
    }
    draw(){
      if(this.y < -$canvas.height) this.y = 0
      this.y++
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      ctx.drawImage(this.img, this.x, this.y - $canvas.height, this.width, this.height)
    }
  }

  class Car {
    constructor(x,y){
      this.x = x
      this.y = y
      this.width = 79
      this.height = 159
      this.img = new Image()
      this.img.src = "./images/car.png"

    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveLeft(){
      this.x -= 15
    }
    moveRight(){
      this.x += 15
    }
  }

  class Obstacle {
    constructor(x, width) {
      this.x = x
      this.y = $canvas.height
      this.width = this.width
      this.height = 50
    }
    draw() {
      this.y--
      ctx.fillStyle = "crimson"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }

  let x =20
  // let x = $canvas.width / 2 - (Car.width / 2)
  let y = $canvas.height / 2
  let car = new Car(210,500)
  let road = new Road()


  function startGame() {
    car.draw()
    if (gameInterval) return
    gameInterval = setInterval(updateGame, 1000 / 60)
  }

  //TODAVIA NO FUNCIONA
  function generateObstacles() {
    if (frames % ratio === 0) {
      const min = 100
      const max = $canvas.width - 100
      const randomWidth = Math.floor(Math.random() * (max - min))
      obstacles.push(new Obstacle(randomWidth,0))
      obstacles.push(
        new Obstacle(randomWidth, $canvas.width - randomWidth)
      )
    }
  }
  function drawObstacles() {
    obstacles.forEach(obs => obs.width)
  }

  function updateGame() {
    //recalcular el estado de los elementos
    // x++
    //limpiar el canvas
    // clearCanvas()
    //dibujar los elementos
    // ctx.fillRect(x, 0, 10, 10)
    // board.draw()
    y++
    generateObstacles()
    clearCanvas()
    road.draw()
    car.draw()
    drawObstacles()

  }

  function clearCanvas() {
    ctx.clearRect(0, 0, $canvas.width, $canvas.height)
  }
  //iterattion 3
  document.onkeydown = e => {
    switch (e.key) {
      case "ArrowLeft":
        console.log("left")
        car.moveLeft()
        break;
      case "ArrowRight":
        console.log("right")
        car.moveRight()
        break;
      default:
        break;
    }
  }
};
