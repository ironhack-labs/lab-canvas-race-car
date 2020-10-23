


window.onload = () => {
  const $canvas = document.getElementById('canvas')
  const ctx = $canvas.getContext('2d')
  const $btn = document.querySelector('#start-button')
  let gameInterval;
  let obstacles = []
  let ratio = 200
  let frames = 0
  let score = 0
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
    draw(){
      if(this.y >$canvas.height) this.y = 0
    this.y++
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    ctx.drawImage(this.img, this.x, this.y - $canvas.height, this.width, this.height)
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
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }
    moveLeft(){
      this.x -= 5
    }
    moveRight(){
      this.x += 5
    }

    isTouching(obstacle) {
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      )
    }
  }

  class Obstacle {
    constructor(x, width) {
      this.x = x
      this.y = 0
      this.width = width
      this.height = 20
    }
    draw() {
      this.y++
      ctx.fillStyle = "darkred"
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
  }
  function generateObstacles() {
    // if (frames % 150 === 0) ratio -= 10
    if (frames % ratio === 0) {
      const min = 100
      const max = $canvas.width - 100
      const randomWidth = Math.floor(Math.random() * (max - min))
      const gap = 100
      randomWidth2 = Math.floor(Math.random() * (max - min))
      //obstacles.push(new Obstacle(randomWidth1 +100, randomWidth2 - 200))
     obstacles.push(
        new Obstacle(randomWidth + gap, $canvas.width - randomWidth - gap)
        //new Obstacle(randomHeight + gap, $canvas.height - randomHeight - gap)
      );
    }
  }
  //let obstacle = new Obstacle(0,500 )
  function drawObstacles() {
    obstacles.forEach(obs => obs.draw())
    //obstacle.draw()
  }
  
  function clearObstacles() {
    obstacles = obstacles.filter(obs => obs.y <= $canvas.height)
  }
  

  function startGame() {
    if (gameInterval) return
    gameInterval = setInterval(updateGame, 1000 / 60)
  }
  function clearCanvas() {
   ctx.clearRect(0, 0, $canvas.width, $canvas.height)
   //ctx.clearRect(0, 0, 0, 0)
  }

  function checkCollitions(){
      obstacles.forEach(obs => {
        if (car.isTouching(obs)) {
          clearInterval(gameInterval)  
          gameInterval = null
          clearCanvas()
          gameOver()
          resetAll();
      }
      })
  }

  function gameOver(){
    ctx.fillStyle = 'black'
    ctx.fillRect(0,0,$canvas.width, $canvas.height)
    ctx.font = '50px sans-serif'
    ctx.fillStyle = 'red'
    ctx.fillText(`Game Over`,$canvas.width/2 - 150, $canvas.width/3)
    ctx.font = '40px sans-serif'
    ctx.fillStyle = 'white'
    ctx.fillText(`Your final score: ${score}`, $canvas.width/2 -150, $canvas.width/3 + 100)
    console.log(gameOver)
  }
  function resetAll(){
    intervalId;
  }

  function printScore() {
    if (frames % 200 === 0 && frames > 500) score++
    ctx.font = "20px Sans-serif"
    ctx.fillStyle = "black"
    ctx.fillText(`Score: ${score}`, $canvas.width - 100, 30)
  }

 
  let car = new Car($canvas.width/2 -15,$canvas.height-100)
  let board = new Board()



    function updateGame() {
      if (gameInterval){
        frames++
        clearObstacles()
        generateObstacles()
        clearCanvas()
        checkCollitions()
        board.draw()
        drawObstacles()
        car.draw()  
        printScore()
    }    
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


