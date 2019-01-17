window.onload = function() {
  const canvas = document.getElementById('my-canvas');
  const ctx = canvas.getContext('2d');
  
  function drawMap(ctx) {
    ctx.fillStyle = 'grey';
    ctx.fillRect(0, 0, 300, 500);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 20, 500);
    ctx.fillRect(280, 0, 20, 500);
    ctx.fillStyle = 'white';
    ctx.fillRect(30, 0, 10, 500);
    ctx.fillRect(260, 0, 10, 500);
    ctx.beginPath();
    ctx.setLineDash([5, 10]);
    ctx.lineWidth = 4;
    ctx.strokeStyle = 'white';
    ctx.moveTo(148, 0);
    ctx.lineTo(148, 500);
    ctx.stroke();
    ctx.closePath();
  }

  drawMap(ctx);

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    let playerCar = {
      carX: 125,
      carY: 380,
      step: 10,
      maxRight: 220,
      maxLeft: 40
    }

    drawCar();

    function drawCar(){
      drawMap(ctx);
      var img = new Image();
      imgScale = 0.5;
      img.onload = function() {
        ctx.drawImage(img, playerCar.carX, playerCar.carY,100*imgScale,100);
      };
      img.src = './images/car.png';
    }
    
    function moveLeft() {
      if (playerCar.carX > playerCar.maxLeft){
        playerCar.carX -= playerCar.step;
        drawCar();
        console.log(playerCar.carX);
      }
    }
    
    function moveRight() {
      if (playerCar.carX < playerCar.maxRight) {
        playerCar.carX += playerCar.step;
        drawCar();
        console.log(playerCar.carX);
      }
    }
    
    function move(direction) {
      switch (direction) {
          case 'left':
              moveLeft();
              break;
          case 'right':
              moveRight();
              break;
      }
    }
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
          case 37: 
              move('left')
              break;
          case 39: 
              move('right');
              break;
      }
    }

};

}







