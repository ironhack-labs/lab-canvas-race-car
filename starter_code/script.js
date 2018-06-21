window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById("game-board-canvas");
    var ctx = canvas.getContext('2d');
    // ctx.clearRect(500,0,1000,1000);
    

    function Obstacle (name, x, y, height, width) {
      this.name = name;
      this.x = x;
      this.y = y;
      this.height = height;
      this.width = width;
    }

    listOfObstacles = [];

    var points = 0;
    var gameStopped = 0;



    function drawRoad () {
    ctx.fillStyle = 'green';
    ctx.fillRect(0,0,50,800);
    ctx.fillStyle = 'grey';
    ctx.fillRect(50,0,10,800);
    ctx.fillStyle = 'white';
    ctx.fillRect(60,0,10,800);
    ctx.fillStyle = 'grey';
    ctx.fillRect(70,0,360,800);
    ctx.fillStyle = 'white';
    ctx.fillRect(430,0,10,800);
    ctx.fillStyle = 'grey';
    ctx.fillRect(440,0,10,800);
    ctx.fillStyle = 'green';
    ctx.fillRect(450,0,50,800);


    for (var i = 0; i < canvas.height / 50 ; i++) {
  
      ctx.fillStyle = 'white';
      ctx.moveTo(245,i * 100);
      ctx.fillRect(245,i * 100 ,10,50);
    }
  }



    function drawObstacle (obstacle) {
      ctx.fillStyle = "blue";
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    }

    function checkCollision(index) {
    //   // 500 < listOfObstacles[i].y < 600 && 500 < listOfObstacles[i].y + 20 < 600 
      if (480 < listOfObstacles[index].y && listOfObstacles[index].y < 600) {
        if (listOfObstacles[index].x - 50 < posX && posX < listOfObstacles[index].x + 200) {
          // console.log("GameOver");
          return true;
        }
      } 

    }

    function gameOver() {
      ctx.font = '20px Arial';
      ctx.fillText("Game Over", 225, 50);
      ctx.fillText("Your final score: " + points, 225, 100);
    }

    function updateObstacles() {
      ctx.clearRect(0,0,500,1000);
      drawRoad();
      ctx.drawImage(img, posX, 500, 50, 100 );
      points += 10;
      document.getElementById("points").innerHTML = points;
      for (var i = 0 ; i <= listOfObstacles.length - 1 ; i ++) {
        listOfObstacles[i].y = listOfObstacles[i].y + 12;
        drawObstacle(listOfObstacles[i]);
        // checkCollision(i);
        if (checkCollision(i)) {
          // console.log("Game Over");
          clearInterval(updateTimer);
          gameStopped = 1;

        console.log(gameStopped);

      gameOver();
        }
      }

    }

    var obstacleNumber = 0;
    function createObstacles() {
      if (gameStopped === 1) {
        clearInterval(createTimer);
      }
      // console.log("goCreate");
      posXObstacle = Math.floor(Math.random()*(230-70)+70);
      var obstacle = new Obstacle ("Obstacle", posXObstacle, 0, 20, 200);
      obstacleNumber += 1;
      // console.log("Obstacle Drawn: " + obstacleNumber);
      // drawObstacle(obstacle);
      listOfObstacles.push(obstacle);
      // document.getElementById("obstacle-number").innerHTML = obstacleNumber;
      // console.log(listOfObstacles);
    }
    
      
    

    var img = new Image();
    img.src = "images/car.png";
  
    var posX = 225;

    //Why img.onload????
    
    // console.log("ok1");
    // drawRoad();
    // console.log("ok2");
    // img.onload = function() {ctx.drawImage(img,posX,800,50,100)}
    // console.log("ok3");
    drawRoad();
    ctx.drawImage(img, posX, 500, 50, 100 );
    // createObstacles();
    var createTimer = setInterval(createObstacles,4000);
    //Was every 4000 originally
    var updateTimer = setInterval(updateObstacles,250);
    //Was every 250 originally - changed to 1250
    // console.log("ok4");




    


    document.onkeydown = function(e) {
      if (gameStopped === 1) {
        return;
      } else {
      switch (e.keyCode) {
        case 37:
        // console.log("left") ;
        // console.log(img);
        if(posX - 20 > 50) {
        ctx.clearRect(0,0,500,800);
        drawRoad();
        ctx.drawImage(img, posX - 20, 800, 50, 100 );
        posX = posX - 20;
        }
        // console.log(posX);
        break;

        case 39:
        // console.log("right") ;
        if (posX + 20 < 400) {
        ctx.clearRect(0,0,500,800);
        drawRoad();
        ctx.drawImage(img, posX + 20, 600, 50, 100 );
        posX = posX + 20;
        }
        // console.log(posX);
        break;
      }
    }

    }

    
    
    


  }
};
