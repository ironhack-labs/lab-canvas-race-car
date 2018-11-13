window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
  var myObstacles = [];
  var myLines = [];

  // var icon = new Image();
  // icon.src = '/starter_code/images/car.png';
  var icon = new Image();
  icon.src = '/starter_code/images/mario.png';
  var obstacle = new Image();
  obstacle.src = '/starter_code/images/Thwomp.png'

  function startGame() {
    myGameArea.start();
    background = new Background;
    // player = new Player(220, 510, 35, 75);    
    player = new Player(220, 510, 50, 50);   
    over = new Over(); 
  }

  var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
      this.canvas.width = 480;
      this.canvas.height = 600;
      this.context = this.canvas.getContext("2d");
      document.getElementById('game-board').appendChild(this.canvas);
      this.interval = setInterval(updateGameArea, 10);
    },
    clear: function () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    frames: 0,
    stop: function () {
      clearInterval(this.interval);
    },
    points: 0,
    score: function () {
      this.points = (Math.floor(this.frames / 5))
      this.context.font = '18px monospace';
      this.context.fillStyle = 'black';
      this.context.fillText('Score: ' + this.points, 350, 50);
    },
  }

  function Player(x, y, width, height) {
    this.speedX = 0;
    this.speedY = 0;
    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.update = function () {
      ctx = myGameArea.context;
      ctx.drawImage(icon, this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
      this.x += this.speedX;
      this.y += this.speedY;
    }

    this.left = function () {
      return this.x
    };
    this.right = function () {
      return (this.x + this.width)
    };
    this.top = function () {
      return this.y
    };
    this.bottom = function () {
      return this.y + (this.height)
    };
    this.crashWith = function (obstacle) {
      return !((this.bottom() < obstacle.top()) ||
        (this.top() > obstacle.bottom()) ||
        (this.right() < obstacle.left()) ||
        (this.left() > obstacle.right()))
    }
  }

  function Obstacle(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.height = 50;
    this.width = 50;
    this.update = function () {
      ctx = myGameArea.context;
      ctx.drawImage(obstacle, this.x, this.y, this.width, this.height);
    }
    this.newPos = function () {
      this.x += this.speedX;
      this.y += this.speedY;
    }
    this.left = function () {
      return this.x
    };
    this.right = function () {
      return (this.x + this.width)
    };
    this.top = function () {
      return this.y
    };
    this.bottom = function () {
      return this.y + (this.height)
    };
  }

  function Background() {
    this.update = function () {
      ctx = myGameArea.context;
      ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, 50, 600);
        ctx.fillStyle = '#ccc';
        ctx.fillRect(50, 0, 380, 600);
        ctx.fillStyle = 'green';
        ctx.fillRect(430, 0, 50, 600);
        ctx.fillStyle = 'white';
        ctx.fillRect(65, 0, 10, 600);
        ctx.fillStyle = 'white';
        ctx.fillRect(405, 0, 10, 600);
    }
  }

  function Line(y){
    this.y = y;
    this.update = () => {
      ctx = myGameArea.context;
      ctx.fillStyle = 'white';
      ctx.fillRect(230, this.y, 10, 50);
    }
  }

  function Over(){
    this.gameOver = () =>{
      ctx = myGameArea.context;
      ctx.fillStyle = 'black';
      ctx.fillRect(100,200,280,200);
      ctx.font = '48px monospace';
      ctx.fillStyle = 'red';
      ctx.fillText('GAME OVER', 125, 300);
      ctx.font = '16px monospace';
      ctx.fillText('your final score is: ' + myGameArea.points, 140, 350);
    }
  }

  function updateGameArea() {
    for (i = 0; i < myObstacles.length; i += 1) {
      if (player.crashWith(myObstacles[i])) {
        myGameArea.stop();
        over.gameOver();
        return;
      }
    }
    myGameArea.clear();
    background.update();
    myGameArea.frames += 1;

    if (myGameArea.frames % 90 === 0) {
      myLines.push(new Line(-30));
    }
    for (let i = 0; i < myLines.length; i++) {
      myLines[i].y++;
      myLines[i].update();
    }

    if (myGameArea.frames % 100 === 0) {
      var x = Math.floor(Math.random() * (myGameArea.canvas.width));
      myObstacles.push(new Obstacle(x,0));
    }
    console.log(myObstacles);
    for (let i = 0; i < myObstacles.length; i ++) {
      myObstacles[i].y++;
      myObstacles[i].update();
    }
    player.newPos();
    player.update();
    
    myGameArea.score();
  }

  function moveUp() {
    player.speedY -= 1;
  }

  function moveDown() {
    player.speedY += 1;
  }

  function moveLeft() {
    player.speedX -= 1;
  }

  function moveRight() {
    player.speedX += 1;
  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 38:
        moveUp();
        break;
      case 40:
        moveDown();
        break;
      case 37:
        moveLeft();
        break;
      case 39:
        moveRight();
        break;
    }
  }

  document.onkeypress = (e) => {
    //create a pause class or smth so at the next space press the game continues
    if(e.keyCode === 32){
      myGameArea.stop();
    }
  };

  document.onkeyup = function (e) {
    stopMove();
  }

  function stopMove() {
    player.speedX = 0;
    player.speedY = 0;
  }


};
