var timer1,timer2;
window.onload = function() {
  var cont = 0;
  var carretera = new Carretera();
  var car = new Car(10);
  var img = new Image();   // Create new img element 158x319px
  var obstacle = [];
  img.src = car.imgSrc;
  car.img = img; // Set source path

  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  document.onkeydown = function(e) {
    if (e.keyCode == 37){ // To LEFT
      if (car.x - car.speed > 0){
        car.x -=car.speed;
      }
    } else if (e.keyCode == 39){ // To RIGHT
      if (car.x + car.speed < carretera.canvasWidth - 30){ // Size Car
        car.x +=car.speed;
      }
    } else if (e.keyCode == 38){
        car.y -= car.speed;
    } else if (e.keyCode == 40){
        car.y += car.speed;
    }
  };

  function startGame() {
    var canvas = document.getElementById('race');
    var ctx = canvas.getContext('2d');
    carretera.canvas = ctx;
    paintAll();
    timer1 = setInterval(paintAll,10);
    timer2 = setInterval(insertObstacle,2000);
  }

  function insertObstacle(){
    obstacle.push( new Obstacle() );
  }
  function paintAll(){
    runRoad(carretera.getCanvas());
    paintCar(carretera.getCanvas(),car.img,car.x,car.y);
    paintScore(carretera.getCanvas());
  }
  function paintObstacles(context){
    for (var x = 0 ; x < obstacle.length ; x++){
      context.fillStyle = '#000000';
      context.fillRect(obstacle[x].x,obstacle[x].y,obstacle[x].width,obstacle[x].height);
      obstacle[x].goDown();
      if (obstacle[x].y+obstacle[x].height >= car.y){
        checkColision(car,obstacle[x]);
      }
      if (obstacle[x].y > 480){
        obstacle.shift();
        car.addPoints();
      }
    }
  }
  function clear(context){
    context.clearRect(0, 0, carretera.getCanvasWidth(), carretera.getCanvasHeight()); // Initial width, height
  }

  function checkColision(car,obstacle){
    // DETECT COLLISION ALGORITHM
    if(obstacle.x < car.x + car.width &&
   obstacle.x + obstacle.width > car.x &&
   obstacle.y < car.y + car.height &&
   obstacle.height + obstacle.y > car.y){
       clearInterval(timer1);
       clearInterval(timer2);
       //explode();
    }
  }
  function runRoad(context){
    if (cont == 30)
      cont = -10;
    clear(context);
    paintRoad(context);
    paintLines(context,cont);
    paintObstacles(context);
    cont++;
    //window.requestAnimationFrame(runRoad(context));
  }

  function paintCar(context,image,x,y){
    context.drawImage(image, x, y, 31, 63); // drawImage(image, x, y, width, height)
  }
  function paintRoad(context){
    // Green #1b8100 - GRAY #808080
    context.fillStyle = 'rgba(27, 129, 0, 1)'; // GREEN
    context.fillRect(0,0,450,490);
    context.fillStyle = 'rgba(128, 128, 128, 1)';
    context.fillRect(40,0,370,490);
    context.strokeStyle = '#FFFFFF';
    context.lineWidth = 10;
    context.strokeRect(60,-20,330,530);
  }

  function paintLines(context,cont){
    for (var x = cont; x < 500 ; x+=40){
      context.fillStyle = '#FFFFFF';
      context.fillRect(223,0+x,4,20); // Initial (223,0)
    }
  }
  function paintScore(context){
    context.fillStyle = '#000000';
    context.fillRect(350,30,430,40);
    context.font = '15px Arial';
    context.fillStyle = 'yellow';
    context.fillText(car.points+' POINTS',365,55);
  }

  function explode(){
      car.imgSrc = 'images/'+car.boom[0];
      img.src= car.imgSrc;
      car.img = img;
      paintCar(carretera.getCanvas(),car.img,31,63);
      paintAll();
  };
};
