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
      

  function startGame() {

    clear ();
    draw ();
    updateObstacles();

    
  
    requestAnimationFrame(startGame)
  }

  class Component {
    constructor(width, height, color, x, y) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
      this.speedX = 0;
      this.speedY = 0;
    }
   
    update() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    newPos() {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  function updateObstacles() {

    for (i = 0; i < obstacles.length; i++) {
      obstacles[i].x += -1;
      obstacles[i].update();
    }
    frames += 1;
    if (frames % 120 === 0) {
      let x = widthCanvas;
      let minHeight = 20;
      let maxHeight = 200;
      let height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
      let minGap = 50;
      let maxGap = 200;
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      obstacles.push(new Component(10, height, 'green', x, 0));
      obstacles.push(new Component(10, x - height - gap, 'green', x, height + gap));
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



 

  
