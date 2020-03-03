window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let ctx = document.querySelector('canvas').getContext('2d')
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    let roadImg = new Image()
    roadImg.src = 'images/road.png'
    let car = new Image()
    car.src = 'images/car.png'

    
    ctx.drawImage( roadImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage( car, 225, 575, 50, 100)
    window.requestAnimationFrame(startGame)
  }
};


