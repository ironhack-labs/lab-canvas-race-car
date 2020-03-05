window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    draw();
  };


  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');

  let roadImg = new Image();
  roadImg.src = "../images/road.png"

  let carImg = new Image();
  carImg.src = "../images/car.png";

  let car = {
    x: 150,
    y: 250
  }

  let frameCounter = 0


  let gameRunning = true

  // called 60 times per second
  let draw = () => {
    frameCounter++
  
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(carImg, car.x, car.y, 50, 100)


    ctx.font = '30px Helvetica'
    ctx.fillStyle = 'green'
    ctx.fillText(`frame counter: ${frameCounter}`, 10, 50)

    if (gameRunning) {
      window.requestAnimationFrame(draw)
    }
  }


  document.onkeydown = (event) => {
    if (event.key === 'ArrowRight' && car.x <= 400) {
      car.x += 5
    }
    if (event.key === 'ArrowLeft' && car.x >= 50) {
      car.x -= 5
    }
  }


  function startGame() {}
};