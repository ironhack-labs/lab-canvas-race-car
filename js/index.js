window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  
    startGame();
  };

  //VARIAVEIS
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  const roadImg = new Image();
  roadImg.src = "./images/road.png";

  const carImg = new Image();
  carImg.src = "./images/car.png";

  var obstacles = [];
  var frames = 0;

  var car = {
    x: 210,
    y: 550,
    speedX: 10,
    draw: function() {
      ctx.drawImage(carImg, this.x, 500, carImg.width/2, carImg.height/2);
    },
   
  
  };
  
  // START GAME
  function startGame() { 

    const roadImg = new Image();
    roadImg.src = "./images/road.png";
    roadImg.onload = () => {
      ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height );
    };

    const carImg = new Image();
    carImg.src = "./images/car.png";
    carImg.onload = () => {
      ctx.drawImage(carImg, 210, 500, carImg.width/2, carImg.height/2);
    };

    var interval = setInterval(updateGame, 20); 

  }

  //CLEAR CANVAS
  function clear (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height );
   }

   //GAME LOOP
  function updateGame()
  {
    clear(ctx);
    car.draw();
  }

  //CHECK KEY
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        if(car.x < 40)
        {
          car.x = car.x;
        }
        else{
          car.x -= car.speedX;
        }
        console.log(car.x);
        break;
      case 39: // right arrow
        if(car.x > 390)
        {
          car.x = car.x;
        }
        else{
          car.x += car.speedX;
        }
        console.log(car.x);
        break;
    }
  };
  
  function createObstacle()
  {
    frames += 1;
    if (frames % 120 === 0) {
      var y = 0;
      var x = canvas.width;
      var minWid = 40;
      var maxWid = 390;
      var widObst = Math.floor(
        Math.random() * (maxWid - minWid + 1) + minWid
      );
      console.log(widObst);
      obstacles.push(new Component(10, height, "green", x, 0));
      myObstacles.push(
        new Component(10, x - height - gap, "green", x, height + gap)
      );
    }
  }

  function drawObstacles (ctx) {
    ctx.fillStyle = 'red';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }


};


