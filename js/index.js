window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  let car;
  const obstacles = [];
  // let lastUpdateTime = 0;
  let gameOver = false;


  function clearCanvas() {
    ctx.clearRect(0, 0, 500, 700); 
    //draw again here :
  }

  function startGame() {
    score = 0;
    clearCanvas();
     car = new uglyCar(ctx);
    car.img.onload = () => {
      car.draw();
      updateCanvas();
    }
  }

  function updateCanvas(){
    // const deltaTime = (currentTime - lastUpdateTime) / 1000;
    // lastUpdateTime = currentTime;
    // const baseFPS = 60;
    // const speedMultiplier = deltaTime * baseFPS;
    // for (const obstacle of obstacles) {
    //   obstacle.speedMultiplier = speedMultiplier;
    // }
    drawScore();
    clearCanvas();
    car.draw();
    drawObstacles();
    moveObstacles();
    checkCollisions();
    requestAnimationFrame(updateCanvas);
    if (!gameOver) {
      checkCollisions();
      requestAnimationFrame(updateCanvas);
    }else {
      alert('game over', score)
    }
  }
  function drawScore() {
    ctx.font = '24px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Score: ' + score, 20, 40);
  }
  function drawObstacles(){
    for (const obstacle of obstacles) {
      obstacle.draw();
    }
  }
  function moveObstacles() {
    for (const obstacle of obstacles) {
      obstacle.move();
    }
  }
  function checkCollisions() {
    for (const obstacle of obstacles) {
      if (
        car.x < obstacle.x + obstacle.width &&
        car.x + 50 > obstacle.x &&
        car.y < obstacle.y + obstacle.height &&
        car.y + 50 > obstacle.y
      ) {
        
        console.log('Collision!');
        gameOver = true;       
      }
      else if (obstacle.y > canvas.height){
        score++;
        console.log('score: ', score)
      }
    }
  }

  document.addEventListener('keydown', e => {

    switch (e.key) {
  // 
      
      case 'ArrowLeft':
  
        car.moveLeft();
  
        console.log('left', car);
        updateCanvas();
        break;
  
      case 'ArrowRight':
  
        car.moveRight();
  
        console.log('right', car);
        updateCanvas();
  
        break;
  
    }
  
    
  
  }); 
  function createObstacle() {
    const obstacle = new Obstacle(ctx);
    obstacles.push(obstacle);
    setTimeout(createObstacle, 1000);
  }
  createObstacle();
}

class uglyCar {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 250;

    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = 'images/car.png';
  }
  
  moveLeft() {
    if (this.x > 25) {
      this.x -= 25;
    }
    
   
  }
  moveRight() {
    if(this.x < canvas.width - 75) {
      this.x += 25;
    }
    
    
  }
  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, 50, 50);
  }
}

class Obstacle {
  constructor(ctx){
    this.ctx = ctx;
    this.width = 200;
    this.height = 20;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = 0;
    this.speed = 1;
    this.speedMultiplier = 1;

  }
  move(){
    this.y += this.speed * this.speedMultiplier;
  }
  draw(){
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}





