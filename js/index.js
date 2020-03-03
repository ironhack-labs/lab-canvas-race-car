window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let canvas = document.getElementById('canvas')
  let ctx = canvas.getContext('2d')

  let road = new Image();
  road.src = "images/road.png";

  let car = new Image();
  car.src = "images/car.png";

  let frameCounter = 0

  let draw = () => {
    frameCounter++

    ctx.drawImage(road, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(car, 0, 0)

    // drawing some helpter output to see how many re-renders the canvas did
    ctx.font = '30pt Tahoma'
    ctx.fillStyle = 'red'
    ctx.fillText('frame counter : ${frameCounter}', 0, 50)

    window.requestAnimationFrame(draw);
  }

  document.onkeydown = (event) => {
    if (event.key === 'ArrowRight') {}
    if (event.key === 'ArrowLeft') {}
  }

  function startGame() {
    draw()
  }

};