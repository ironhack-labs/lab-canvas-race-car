window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const obstaclesArr = []

  class CompImg {
    constructor(_x, _y, _width, _heigth, _src){
      this.x = _x
      this.y = _y
      this.width = _width
      this.heigth = _heigth
      this.speedX = 0
      this.speedY = 0
      this.points = 0

      const img = new Image()
      img.addEventListener('load', () => {
        this.img = img
      })
      img.src = _src
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width, this.heigth)
    }
    update() {
    }
    newPos(){
      this.x += this.speedX
    }
    left(){return this.x}
    rigth(){return this.x + this.width}
    top(){return this.y}
    crashWith(obstacle){
      return !(
        this.top() > obstacle.bottom() ||
        this.rigth() < obstacle.left() ||
        this.left() > obstacle.rigth()
      )
    }
    passed(obstacle){
      return(this.top() === obstacle.bottom()-150)
    }
  }

  class Obstacle {
    constructor(_x, _y, _width, _height, _color){
      this.x = _x
      this.y = _y
      this.width = _width
      this.height = _height
      this.color = _color
    }
    drawRect(){
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
    }
    left(){return this.x}
    rigth(){return this.x + this.width}
    bottom(){return this.y + this.height}
  }

  let carX = 230
  let backY = 0
  const car = new CompImg(carX, 600, 40, 80, '/images/car.png')
  const background = new CompImg(0, backY, 500, 700, '/images/road.png')

  const startGame = () => {
    background.draw()
    car.draw()
    updateGameArea()
  }

  let counter = 0
  const createObstacles = () => {
    for(i = 0; i < obstaclesArr.length; i++){
      obstaclesArr[i].y += 1
      obstaclesArr[i].drawRect()
    }
    counter += 1
    if(counter % 120 === 0){
      let minWidth = 50
      let maxWidth = 200
      let width = Math.floor(Math.random()*(maxWidth - minWidth +1) + minWidth)
      let obstacleX = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth)
      obstaclesArr.push(new Obstacle(obstacleX, 0, width, 15, 'aqua'))
    }
  }
  
  
  const updateGameArea = () =>{
    background.draw()
    car.newPos()
    car.draw()
    createObstacles()
    checkPoints()
    if(checkGameOver()){return}
    writeText('black','18px sans-serif', 350, 50, `Score: ${car.points}`)
    requestAnimationFrame(updateGameArea)
  }
    const checkGameOver = () => {
        const crashed = obstaclesArr.some((obstacle) => {
          return car.crashWith(obstacle)
        })
        if(crashed){
          gameOver()
         return true
       }
    }
    const gameOver = () => {
      const over = new Obstacle(0, 0, 500, 700, 'black')
      over.drawRect()
      const textOver = 'Game Over'
      writeText('red', '50px sans-serif', 100, 100, textOver)
      writeText('white', '45px sans-serif', 150, 200, `Score: ${car.points -1}` )
    }
    const checkPoints = () => {
      const points = obstaclesArr.some((obstacle) => {
        return car.passed(obstacle)
      })
      if(points){
        car.points++
        obstaclesArr.shift()
      }
    }
    const writeText = (_color, _font, _x, _y, _text) => {
      ctx.font = _font
      ctx.fillStyle = _color
      ctx.fillText(_text, _x, _y)
    }


  document.addEventListener('keydown', (event) => {
    if(event.key === 'ArrowRight' && car.x < 400){
        car.speedX += 1
    }else if(event.key === 'ArrowLeft' && car.x > 80){
      car.speedX -= 1
    }
  })
  document.addEventListener('keyup', () => {
    car.speedX = 0
  })
};
