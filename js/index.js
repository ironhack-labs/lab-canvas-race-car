window.onload = () => {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');


  class Obstacle {
    constructor(x, y, width) {
      this.x = x
      this.y = y
      this.width = width
    }
  };



  let carX = 230;
  let dateRightNow = Date.now();
  const obstacles = [];
  let endGame = false;
  let score = 0;
  let clickable = true;

  document.getElementById('start-button').onclick = (event) => {
    if (clickable) {
      event.target.classList.add('unclickable-button')
      clickable = false
      endGame = false
      obstacles.length = 0
      score = 0
      startGame();
    }
  };

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      if (!(carX === 385)) {
        carX += 10
      }
    };
    if (event.key === 'ArrowLeft') {
      if (!(carX === 65)) {
        carX -= 10
      }
    }
  });


  const renderImages = () => {
    const background = new Image()
    background.src = '../images/road.png'
    drawBackground(background)
  };

  const renderScore = () => {
    ctx.font = '20px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${score}`, 110, 20)
    ctx.fillStyle = 'brown'
  };

  const drawBackground = (background) => {
    background.onload = () => {
      ctx.drawImage(background, 0, 0, 500, 700)
      createCar()
    }
  };

  const createCar = () => {
    const car = new Image()
    car.src = '../images/car.png'
    drawCar(car)
  };

  const drawCar = (car) => {
    car.onload = () => {
      ctx.drawImage(car, carX, 580, 50, 100)
    }
  };

  const randomObstacle = () => {
    return Math.floor(Math.random() * 285) + 65
  };

  const createObstacle = () => {
    if (Date.now() - dateRightNow >= 1000) {
      dateRightNow = Date.now()
      const newObstacle = new Obstacle(randomObstacle(), 0, 100)
      obstacles.push(newObstacle)
    }
  };

  const drawObstacles = () => {
    obstacles.forEach((obstacle) => {
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, 25)
    })
  };

  const updateObstacles = () => {

    obstacles.forEach((obstacle) => {
      obstacle.y += 3
    })
  };

  const checkForCollision = () => {
    obstacles.forEach((obstacle) => {
      if (obstacle.y === 579) {
        if (carX >= obstacle.x && carX <= (obstacle.x + obstacle.width)) {
          endGame = true
        } else if ((carX + 50) >= obstacle.x && (carX + 50) <= (obstacle.x + obstacle.width)) {
          endGame = true
        } else {
          score++
        }
      }
    })
  };

  const renderGameOverText = () => {
    ctx.font = '50px sans-serif'
    ctx.textAlign = 'center'
    ctx.fillText('GAME OVER', 250, 350)
  };

  startGame = () => {
    if (!endGame) {
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
    }
  }
};