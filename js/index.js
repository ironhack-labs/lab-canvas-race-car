window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    drawRoad();
    drawCar(235, 650);
  }
};


function drawRoad() {
  // Link our canvas to JS
  const canvas = document.getElementById('canvas')

  // Get context of our canvas
  const ctx = canvas.getContext('2d')

  ctx.clearRect(0, 0, 500, 700);
  // canvas.style.backgroundImage = 'url(../image/road.png)'

  // Creates a new Image
  const road = new Image();

  // Connects image to the image file
  road.src = "./images/road.png"

  // Ensures that when the road is called by the canvas...
  road.onload = function () {
    // It draws the image inside of the canvas 
    ctx.drawImage(road, 0, 0, canvas.width, canvas.height);
  };
}

function drawCar(x, y) {
  // Link our canvas to JS
  const canvas = document.getElementById('canvas')

  // Get context of our canvas
  const ctx = canvas.getContext('2d')

  const car = new Image();
  car.src = './images/car.png'

  car.onload = function () {
    // It draws the image inside of the canvas 
    ctx.drawImage(car, x, y, 25, 50);
  };
}



