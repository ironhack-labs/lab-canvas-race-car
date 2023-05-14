window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  document.addEventListener('keydown', e => { 
    switch (e.keyCode) {
      case 37:
          car.left()
          return;
      case 39:
          car.right()
          return;
    }
  }) ;
  
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  console.log(ctx);

  let requestId;
  let gameFrames = 0;

  let imgBoard = new Image();
  imgBoard.src = 'images/road.png';

  let imgCar = new Image();
  imgCar.src = 'images/car.png'

  let points = 0;
  let score = 0;

  const backgroudBoard = {
    img: imgBoard,
    y: 0,
    //speed: -1,
    draw: function() {
      this.y += 4;
      if(this.y > canvas.height) {
        this.y = 0;
      }
      ctx.drawImage(this.img, 0, this.y, canvas.width, canvas.height);
      ctx.drawImage(this.img, 0, this.y - canvas.height, canvas.width, canvas.height);
    }
  };

  const car = {
    img: imgCar,
    y: 560,
    x: 225,
    width: 50,
    height: 80,
    draw: function() {
      ctx.drawImage(this.img, this.x, this.y, 50, 80);
    },
    left: function(){
      this.x -= 20;

    },
    right: function(){
      this.x += 20;
    },

    isCrashing: function(obs){
      console.log('obstaculo en x: ', obs.x);
      console.log('obstaculo en x: ', obs.width );
      console.log('position x carro',this.x)
      return (
        this.x < obs.x + obs.width && this.x + this.width > obs.x &&
        this.y < obs.y + obs.height && this.y + this.height > obs.y
      )

    }

  };

  const obstacles = [];

  function generateObstacles(){
   
  const obstacle = {
    x: Math.floor(Math.random() * (400 - 50) + 50),
    y: 0,
    width: Math.floor(Math.random() * (250 - 100) + 100),
    height: 40,
    draw: function() {
      this.y += 2;
      console.log(this.x);
      ctx.fillStyle = "red";
      ctx.fillRect(this.x, this.y, this.width, this.height);
    },

  }
      if(gameFrames % 100 === 0){

        obstacles.push(obstacle);
      }

  }

  function drawObstacles() {
    obstacles.forEach(rect => rect.draw())
  }

  function checkCollisions(){
    obstacles.forEach((obs) => {
      if(car.isCrashing(obs)){
          requestId = cancelAnimationFrame(requestId);
          ctx.font = '40px Arial';
           ctx.fillStyle = 'white';
           ctx.fillText(`GAME OVER`, 60, 170);
            ctx.fillText(`SCORE FINAL: ${points.toFixed(1)}`, 60, 200);
      }
      points += 0.9
    });

  }
  
  function drawInfo() {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'white';
    ctx.fillText(`Score: ${points.toFixed(1)}`, 300, 30);
  }

  function limitsBoard(){
    if(car.x <= 50 ){
      car.x = 50;
    }else if(car.x >= 400){
      car.x = 400;
    }
  }

  function updateGame(){

    gameFrames++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    backgroudBoard.draw();
    car.draw();
    limitsBoard();
    generateObstacles();
    drawObstacles();
    drawInfo();
    checkCollisions();
    if(requestId){
      requestId = requestAnimationFrame(updateGame);
    }
  }
  
  function startGame() {
    if(!requestId){
      requestId = requestAnimationFrame(updateGame);
    }
    

  }
};
