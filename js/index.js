window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')

  let road = new Image();
  road.src = "images/road.png";

  let carIMG = new Image();
  carIMG.src = "images/car.png";

  let car = {
    x: 225,
    y: 0,
    img: carIMG
  }

  //call 60 Times per second
  let frameCounter = 0

  let gameRunning = true

  let draw = () => {
    frameCounter++

    ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(car.img, car.x, 250, 50, 100)

    if (car.x <= -2 || car.x >= 460) {
      gameRunning = false
    }

    // drawing some helpter output to see how many re-renders the canvas did
    ctx.font = '30px Tahoma'
    ctx.fillStyle = 'green'
    ctx.fillText(`frame counter : ${frameCounter}`, 0, 50)
    if (gameRunning) {
      window.requestAnimationFrame(draw)
      ;} else {
        alert('GAME OVER')
      }
  }

  document.onkeydown = (event) => {
    if (event.key === 'ArrowRight') {  
      car.x += 5
    }
    if (event.key === 'ArrowLeft') { 
      car.x -= 5
    }
  }

  function startGame() {
    draw()
  }

};