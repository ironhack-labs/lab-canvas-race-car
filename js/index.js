window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')

  let carX = 225
  let direction = 'right'
  let colision = false
  let score = 0
  myObstacles = []

  class Obstacle {
      constructor(width, height, x, y){
        this.width = width
        this.height = height
        this.x = x
        this.y = y
      }
  }

  const startGame = () => { 
    // createRoad()
    // createCar()
    updateObstacles()
    showScoreText()

    setInterval(()=>{
      let minWidth = 40
      let maxWidth = 220
      let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth)
      let x = Math.floor(Math.random() * (maxWidth - minWidth + 1) + 50)
      myObstacles.push(new Obstacle(width, 15, x, 0))
    }, 2500)
  }

  const checkEndGame = () => {
    if(colision=='true'){
      console.log('crash!');
    }
  }

  const checkColision = () => {
    myObstacles.forEach((obstacle)=>{
      if(obstacle.y===580 && obstacle.x < carX && carX < (obstacle.x + obstacle.width)){
        colision = true
      } 
    }) 
  }

  const calculateScore = () => {}

  const showScoreText = () => {
    ctx.font = '30px sans-seriff'
    ctx.fillStyle = 'black'
    ctx.fillText('Score: ', 70, 500)
  }

  const createRoad = () => {
    const road = new Image()
    road.src = '../images/road.png'
    road.onload = () => {
      ctx.drawImage(road, 0, 0, 500, 700)
    }
  }


  const createCar = () => {
    let car = new Image()
    car.src = '../images/car.png'
    car.onload = () => {
      
      ctx.drawImage(car, carX, 580, 50, 100)
    }
  }

  const moveCar = () => {
    
    if(direction==='right' && carX<400){
      createRoad()
      carX+=7
      createCar()
    } else if (direction === 'left' && carX>50){
      createRoad()
      carX-=7
      createCar()
    }
  }


  document.addEventListener('keydown', (event)=>{
    if(event.key === 'ArrowLeft'){
      direction = 'left'
      moveCar()
    } else if(event.key === 'ArrowRight'){
      direction='right'
      moveCar()
    } 
  })

  
  
  
  
  const updateObstacles = () =>  {
    createRoad()
    printObstacles()
    createCar()  
    moveObstacle()  
    showScoreText()
    checkColision()
    checkEndGame()
    requestAnimationFrame(updateObstacles)
  } 

  const moveObstacle = () => { 
    myObstacles.forEach((item)=>{ 
      return item.y+=2
    })
  }

  const drawRect = (x, y, width, height, _color) => {
    ctx.fillStyle = _color
    ctx.fillRect(x, y, width, height)
  }

  const printObstacles = () => {
    for(i=0; i<myObstacles.length; i++){
      drawRect(myObstacles[i].x, myObstacles[i].y, myObstacles[i].width, myObstacles[i].height, 'coral')
    }
}

};



