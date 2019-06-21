
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    update =  setInterval(createBoard, 50);
    
  };
  let canvas = document.createElement("canvas");
  let context = canvas.getContext("2d");
  function startGame() {
    canvas.width = 400;
    canvas.height = 800;
    // console.log(canvas)
    document.getElementById('game-board').insertBefore(canvas, document.getElementById('game-board').childNodes[0])
    
    createBoard();
    
  }
  
  let car = {
    x: 120
  }
  let obsWidth;
  let obsX;
  const obstaclesArr = [];
  let frame = 0;
  let update;
  
  class Obstacles {
    constructor (x, y, width) {
      this.x = x;
      this.y = y;
      this.width = width;
    }
  
    left = () => {
  
      return this.x;
  }
     right = () => {
      return this.x + this.width;
    }
     top = () => {
      return this.y;
    }
     bottom = () => {
      return this.y + 50;
    }
  }
  
  const createBoard = () => {
    // console.log(;
    
    context.clearRect(0, 0, 400, 800);
    
    canvas.setAttribute('style', 'background-color: green')
    
    
    context.fillStyle = 'grey';
    context.fillRect(50,0, 300, 800);
    
    context.strokeStyle = 'white';
    context.lineWidth = 9;
    
    context.beginPath();
    context.moveTo(65, 0);
    context.lineTo(65, 800);
    context.stroke();
    
    context.beginPath();
    context.moveTo(335, 0);
    context.lineTo(335, 800);
    context.stroke();
    
    context.lineWidth = 2;
    context.beginPath();
    context.setLineDash([20, 20]);
    context.moveTo(200, 0);
    context.lineTo(200, 800);
    context.stroke();
    
    context.setLineDash([]);
    
    let img = new Image();
    img.src = 'images/car.png';
    img.onload = () => {
      context.drawImage(img, car.x, 500, 158/2, 319/2)
    }
    
    
    updateObstacles();
    
    // console.log(obstaclesArr)
    
    context.fillStyle = "red";
    for (let i = 0; i < obstaclesArr.length; i += 1) {
      console.log(obstaclesArr[0].y)
      context.fillRect(obstaclesArr[i].x, obstaclesArr[i].y += 3, obstaclesArr[i].width, 50);
    }
    
    context.fillStyle = "yellow";
    context.font = '30px Arial';
    context.fillText(`Score: ${frame}`, 70,70);
    
    checkGameOver();
  }
  
  
  
  let crashWith = (obstacle) =>{
    if (obstacle.bottom() >= 500 && (car.x + 158 / 2) >= obstacle.left() && car.x <= obstacle.right()) {
      return true;
    }
    return false;
  }
  
  function checkGameOver() {
    let crashed = obstaclesArr.some(function(obstacle) {
      return crashWith(obstacle);
    });
  
    if (crashed) {
      context.fillStyle = '#ffcc00';
      context.fillRect(0, 0, 1000, 1200);
      context.fillStyle = '#000';
      context.font = '60px Arial';
      context.fillText(`GAME-OVER`, 15,300);
      context.font = '30px Arial';
      car.x = 160;
      context.fillText(`You've scored: ${frame}`, 80,400);
      clearInterval(update);
    
    setTimeout(() => {
      location.reload();
    }, 2000);
    }
}
  
  const move = (e) => {
    switch (e.keyCode) {
      case 37:
        car.x -= 8;
        break;
        case 39:
          car.x += 8;
          break;
        }
      }
      
      document.onkeydown = (e) => {

        move(e);
      };
      
      
  const updateObstacles = () => {
    frame += 1;
    // console.log(frame)
    if(frame % 90 === 0){
      obsX = Math.floor(Math.random() * 135) + 65;
      obsWidth = Math.random() * (190 - 65) + 65;
      // console.log(obsX)
      obstaclesArr.push(new Obstacles(obsX, 0, obsWidth));
    }
  }


};
