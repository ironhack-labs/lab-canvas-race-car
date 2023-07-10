window.onload = () => {
  document.getElementById('start-button').onclick = () => {

    startGame();
    
  };
}
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    const carImg = new Image();
    carImg.src = './images/car.png';

    let obstacles=[];
    let frames = 0;
    const leftLimit = 45;
    const rightLimit = 250;
    const widthCanvas = 350;
    const heightCanvas = 500;
    let carX = 145;
    let carY = 410;
    let carSpeed = 10;
    let intervalId = null;
      

  function startGame() {

    
  
    intervalId = setInterval(gameArea, 20);
  }

  function stop () {
    clearInterval(intervalId);
  }

  class Component {
    constructor(color) {
      this.maxWidth = 200;
      this.minWidth = 50;
      this.width = Math.floor(Math.random() * (this.maxWidth - this.minWidth));
      this.height = 20;
      this.color = color;
      this.x = Math.floor(Math.random() * 100) + 75;
      this.y = 0;
    
    }
   
    update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  function gameArea () {
    clear ();
    draw ();
    updateObstacles ();
    
  }

  function updateObstacles() {
    
    for (i = 0; i < obstacles.length; i++) {
      obstacles[i].y += 1
      obstacles[i].update();
    }
    frames += 1;
    if (frames % 120 === 0) {

      obstacles.push(new Component(this.x, this.height, this.color, this.x, this.y));
    
    }
  }

  function clear () {
    ctx.clearRect(0, 0, widthCanvas, heightCanvas);
  }

  function draw () {
    ctx.drawImage(roadImg, 0, 0, widthCanvas, heightCanvas);
    ctx.drawImage(carImg, carX, carY, 60, 60);
  }

window.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
    carX -= carSpeed;
    if(carX < leftLimit) carX = leftLimit;
      break;
    case 39: // right arrow
      carX += carSpeed;
      if(carX > rightLimit) carX = rightLimit;
      break;
  }
});



 

  
