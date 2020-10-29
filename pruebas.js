window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
  
    let carX = 230
    let carY = 600
    let direction = 'center'
    // let imageSrc = '/images/car.png'
    const startGame = (_x, _y, _direction, _src) => {
      const canvas = document.getElementById('canvas')
      const ctx = canvas.getContext('2d')
      const road = new Image()
      road.src = "./images/road.png"
      road.onload = () => {
        ctx.drawImage(road, 0, 0, 500, 700)
      }
      const car = new Image()
      car.src = "./images/car.png"
      car.onload = () => {
        ctx.drawImage(car, 230, 600, 40, 80)
      }
  
      ctx.clearRect(0, 0, 500, 700);
  
  
      if (_direction === 'right') {
        carX++
        if (carX > 500) {
          return `You can't go off road!`
        } else if (_direction === 'left') {
          carX--
          if (carX < 0) {
            return `You can't go off road!`
          }
        }
      }
    }
    
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        direction = 'left'
      } else if (event.key === 'ArrowRight') {
        direction = 'right'
      }
    });
    // startGame()
  }