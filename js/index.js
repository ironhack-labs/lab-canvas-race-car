window.onload = () => {

  //Cargamos nuestro entorno 2D
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'brown'

  //CLASES
  class Obstacle {
    constructor(_x, _y, _width){
      this.x = _x
      this.y = _y
      this.width = _width
    }
  }

  //VARIABLES
  
  let _carX = 225
  let dateRightNow = Date.now()
  const obstacles = []
  let endGame = false
  let score = 0
  let clickable = true


  //MUSIC
  let backgroundAudio = new Audio('../sounds/SoundHelix-Song-1.mp3')
  let gameOverAudio = new Audio('../sounds/SoundHelix-Song-15.mp3')

  // DOM MANIPULATION
  document.getElementById('start-button').onclick = (event) => {
    if(clickable){
      gameOverAudio.pause()
      backgroundAudio.currentTime = 0
      backgroundAudio.play()
      event.target.classList.add('unclickable-button')
      clickable = false
      endGame = false
      obstacles.length = 0
      score = 0
      startGame();
    }
  };

  document.addEventListener('keydown', (event)=>{

    if(event.key === 'ArrowRight'){
      if(!(_carX === 385)){
        _carX += 10
      }
    } 
    
    if(event.key === 'ArrowLeft'){
      if(!(_carX === 65)){
        _carX -= 10
      }
    }

  })

  //FUNCTIONS

  const renderImages = ()=>{
    const background = new Image()
    background.src = '../images/road.png'
    drawBackground(background)
  }

  const renderScore = ()=>{
    ctx.font = '20px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${score}`, 110, 20)
    ctx.fillStyle = 'brown'
  }

  const drawBackground = (_background)=>{
    _background.onload = ()=>{
      ctx.drawImage(_background, 0, 0, 500, 700)
      createCar()
    }
  }

  const createCar = ()=>{
    const car = new Image()
    car.src = '../images/car.png'
    drawCar(car)
  }

  const drawCar = (_car)=>{
    _car.onload = ()=>{
      ctx.drawImage(_car, _carX, 580, 50, 100)
    }
  }

  const getRandomXForObstacle = ()=>{
    return Math.floor(Math.random() * 285) + 65  
  }

  const createObstacle = ()=>{

    if(Date.now() - dateRightNow >= 1000){
      dateRightNow = Date.now()
      const newObstacle = new Obstacle(getRandomXForObstacle(), 0, 100)
      obstacles.push(newObstacle)
    }
  }

  const drawObstacles = () =>{
    obstacles.forEach((obstacle)=>{
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, 25)
    })
    
  }

  const updateObstacles = ()=>{
    
    obstacles.forEach((obstacle) => {
      obstacle.y += 3
    })
  }

  const checkForCollision = ()=>{
    obstacles.forEach((obstacle)=>{

      if(obstacle.y === 579){

        if(_carX >= obstacle.x && _carX <= (obstacle.x + obstacle.width)){
          endGame = true
        } else if((_carX + 50) >= obstacle.x && (_carX + 50) <= (obstacle.x + obstacle.width)){
          endGame = true
        } else {
          score++
        }

      }

    })
  }

  const renderGameOverText = ()=>{
    ctx.font = '50px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('GAME OVER', 250, 350)
  }

  // [newObstacle.x, newObstacle.x + newObstacle.width]

  startGame = () => {
    if(!endGame){
      renderImages()
      renderScore()

      createObstacle()
      drawObstacles()
      updateObstacles()

      checkForCollision()
      requestAnimationFrame(startGame)
      
    } else {
      renderGameOverText()
      renderScore()
      document.getElementById('start-button').classList.remove('unclickable-button')
      clickable = true
      backgroundAudio.pause()
      gameOverAudio.currentTime = 0
      gameOverAudio.play()

    }
    
    
  }

};
