window.onload = () => {
  document.getElementById('start-button').onclick = () => {
  
    startGame();
  };

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');
  
  const roadImg = new Image();
  roadImg.src = "./images/road.png";

  const carImg = new Image();
  carImg.src = "./images/car.png";

  var car = {
    x: 210,
    y: 550,
    speedX: 10,
    draw: function() {
      ctx.drawImage(carImg, this.x, 500, carImg.width/2, carImg.height/2);
    },
   
  
  };
  
  
     
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
  
   /*cfunction drawRoad(ctx)
  {
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height );
   onst roadImg = new Image();
    roadImg.src = "./images/road.png";
    roadImg.onload = () => {
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height );
    };*/
  

  

  function clear (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(roadImg, 0, 0, canvas.width, canvas.height );
   }


  function updateGame()
  {
    clear(ctx);
    car.draw();

  
  }

  

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: // left arrow
        car.x -= car.speedX;
        console.log('esquerda');
        break;
      case 39: // right arrow
        car.x += car.speedX;
        break;
    }
  };
  
};


