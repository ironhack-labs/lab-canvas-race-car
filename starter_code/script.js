const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d')
let interval;
let frames = 0;
const obstacles = []

window.onload = function() {
  function clearCanvas(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }
  function generateBlocks(){
    if(frames%300===0){
      const block = new RandomBlocks()
      obstacles.push(block)
    } 
  }
  function checkCollissions(){
    obstacles.forEach((obstacle) => {
      if (car.isTouching(obstacle)) {
        gameOver();
      }
    });
  }

  function gameOver(){
      clearInterval(interval)
      ctx.font = "50px Arial"
      ctx.fillStyle = "Red";
      ctx.fillText("Game Over", canvas.width/2 -120, canvas.height/2 +20)
  }

  function drawObs() {
    obstacles.forEach(block => block.draw())
  } 

  function checkLimits(){
    if(car.x <= 50 ){
      car.x = 50;
    } else if(car.x >= 420){
      car.x = 420
    }
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    car.x = canvas.width/2 - car.width + 15;
    car.y =  -car.height/2;
    interval = setInterval(update, 1000/60);
  }

  function update() {
    frames++;
    clearCanvas()
    highway.draw()
    car.draw()
    car.x += car.vx;
    checkLimits()
    checkCollissions()
    generateBlocks()
    drawObs()
  }
};


