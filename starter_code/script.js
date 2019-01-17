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

    function random(max, min) {
      return Math.random() * (max-min) + min ;
    }

    // function obstacle(ctx) {
    //   ctx.fillStyle = 'red';
    //   this.rectWidth = 70//random(150, 30);
    //   this.obsX = random(240 - this.rectWidth, 40);
    //   this.obsY = 0
    //   this.rect = ctx.fillRect(this.obsX, this.obsY, this.rectWidth, 30);
    // }

    // var obstacles = [];
    

    // function obstacle(x){
    //   // let x = random(240 - 100, 40)
    //   this.x = x;
    //   this.y = 0;
    // }

    // //setinterval cria um objeto 
    // setInterval(function(){
    //   const myObstacle = new obstacle();
    //   obstacles.push(myObstacle);
    // }, 2000);

    // setInterval(function(){
    //   ctx.clearRect(0, 0, 300, 500);
    //   drawMap(ctx);
    //   drawCar();

    //   for(let i = 0; i < obstacles.length; i += 1){
    //     obstacles[i].y += 1;
    //     ctx.rect(obstacles[i].x, obstacles[i].y, 40, 20);
    //     ctx.fillStyle = 'red';
    //     ctx.fill();
    //   }
    // }, 1000);

    var obstaclesArr = [];

    function Obstacle(x){
      this.y = 0;
      this.x = x;
    }

    function xObstacle(){
      // return 50 + Math.floor(Math.random() * 6) * 30;
      return random(210, 40);
    }

    setInterval(function(){
      const myObstacle = new Obstacle(xObstacle());
      obstaclesArr.push(myObstacle);
    }, 2000)

    setInterval(function(){
      const canvas = document.getElementById('my-canvas');
      var ctx = canvas.getContext('2d'); 
      
      ctx.clearRect(0, 0, 300, 500);
      drawMap(ctx)
      drawCar();

      for(let i = 0; i < obstaclesArr.length; i++){
        obstaclesArr[i].y += 1;
        ctx.rect(obstaclesArr[i].x, obstaclesArr[i].y, 50, 20);
        ctx.fillStyle = "#800000";
        ctx.fill();
      }
    }, 10)


    let playerCar = {
      carX: 125,
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







