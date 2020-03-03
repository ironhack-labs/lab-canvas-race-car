window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();

  };

  let canvas = document.getElementById('canvas');
  let ctx = canvas.getContext('2d');
  
  let road = new Image()
  road.src = "images/road.png"

  let car = new Image()
  car.src = "images/car.png"


  function startGame() {

    let draw = () => {
    
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(road, 0, 0, canvas.width, canvas.height)

      ctx.drawImage(car, 180, 250, 100, 200)

    }

    requestAnimationFrame(draw)
  
  }

  








};
