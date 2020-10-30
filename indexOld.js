window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext('2d')
    let carX = 230
    let backY = 0
    let direction = ''
  
    function startGame() {
      document.getElementById('game-board').style.visibility = 'visible'
      printBack()
      printCar()
    }
  
    class Obstacle {
      constructor(_x, _y, _width, _heigth){
        this.x = _x
        this.y = _y
        this.width = _width
        this.heigth = _heigth
      }
    }
  
    const obstacleCreate = () => {
      
    }
  
    const printBack = () => {
      const fondo = new Image()
      fondo.onload = () => {
        ctx.drawImage(fondo, 0, backY, 500, 700)
      }
      fondo.src = '/images/road.png'
    }
  
    const updateCanvas = () => {
      ctx.clearRect(0, 0, 500, 700)
    }
  
    const printCar = () => {
      const car = new Image()
      car.onload = () => {
        ctx.drawImage(car, carX, 600, 40, 80)
      }
      car.src = '/images/car.png'
    }
  
  
  
    const moveCar = () => {
      if(direction === 'right' && carX < 400){
        carX += 3
      }else if(direction === 'left' && carX > 70){
        carX -= 3
      }
    }
  
  
  
  
  
  
    document.addEventListener('keydown', (event) => {
      if(event.key === 'ArrowRight'){
        direction = 'right'
        printBack()
        moveCar()
        printCar()
      }else if(event.key === 'ArrowLeft'){
        direction = 'left'
        printBack()
        moveCar()
        printCar()
      }
    })
  
  
  
  
  
  };
  