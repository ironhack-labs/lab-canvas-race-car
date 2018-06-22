window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  var myObstacles = [];
  var myScore;

  function startGame() {
    drawCanvas();
    myGameArea.start();
    player = new component('images/car.png', 187.26, 440);
  }

  function drawCanvas() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'gray';
    ctx.fillRect(0, 0, 400, 490);
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 30, 490);
    ctx.fillRect(370, 0, 30, 490);
    ctx.fillStyle = 'white';
    ctx.fillRect(40, 0, 10, 490);
    ctx.fillRect(350, 0, 10, 490);
    ctx.setLineDash([20, 18]);
    ctx.moveTo(200, 490);
    ctx.lineTo(200, 20);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';
    ctx.stroke();
  }

  var myGameArea = {
    start: function () {
      this.context = document.getElementById('road').getContext('2d');
      this.interval = setInterval(updateGameArea, 20);
    },
    frames: 0,
    clear: function () {
      this.context.clearRect(0, 0, 400, 490);
    }
  }

  //COMPONENT
  function component(imgsrc, x, y) {
    this.x = x;
    this.y = y;
    ctx = myGameArea.context;
    var img = new Image();
    imgScale = 158 / 310;
    img.onload = function () {
      ctx.drawImage(img, x, y, 50 * imgScale, 50);
    };
    img.src = imgsrc;

    this.speedX = 0;
    this.speedY = 0;
    this.update = function () {
      ctx = myGameArea.context;
      ctx.drawImage(img, this.x, this.y, 50 * imgScale, 50);
    }
    this.newPos = function () {
      this.x += this.speedX;
      this.y += this.speedY;
    }
  }

  function updateGameArea() {
    myGameArea.clear();
    drawCanvas();
    myGameArea.frames+=1;
    if(myGameArea.frames%100==0){
      
    }
    player.newPos();
    player.update();
  }

  //RULES TO MOVEMENT
  function moveLeft() {
    player.speedX -= 1;
  }
  function moveRight() {
    player.speedX += 1;
  }
  document.onkeydown = function (e) {
    if (player.x > 50 && player.x < 324.51) {
      console.log(player.x);
      switch (e.keyCode) {
        case 37: moveLeft(); break;
        case 39: moveRight(); break;
      }
    } else { 
      if (player.x == 50 && e.keyCode == 39) {    //control boundary
        console.log(player.x);
        moveRight();
      }
      else if (player.x == 324.51 && e.keyCode == 37) {
        console.log('firstleft')
        moveLeft();
      } else {
        switch (e.keyCode) {
          case 37: player.x = 50; break;
          case 39: player.x = 324.51; break;
        }
      }
    }
  }
  document.onkeyup = function (e) {
    stopMove();
  }
  function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
  }

};
