window.onload = function() {

    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 700;
    canvas.height = 500;
  
    function drawRoad(){
    //pasto izquierdo
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineWidth = 80;
    ctx.moveTo(50, 0);
    ctx.lineTo(50, 500);
    ctx.stroke();
  
    //pasto derecho
    ctx.strokeStyle = "green";
    ctx.beginPath();
    ctx.lineWidth = 100;
    ctx.moveTo(690, 0);
    ctx.lineTo(690, 500);
    ctx.stroke();
  
    //carretera
    ctx.strokeStyle = "gray";
    ctx.beginPath();
    ctx.lineWidth = 550;
    ctx.moveTo(365, 0);
    ctx.lineTo(365, 500);
    ctx.stroke();
  
    //linea de carretera al centro
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 0);
    ctx.lineTo(360, 40);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 50);
    ctx.lineTo(360, 100);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 110);
    ctx.lineTo(360, 160);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 170);
    ctx.lineTo(360, 220);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 230);
    ctx.lineTo(360, 280);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 290);
    ctx.lineTo(360, 340);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 350);
    ctx.lineTo(360, 400);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 410);
    ctx.lineTo(360, 460);
    ctx.stroke();
  
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(360, 470);
    ctx.lineTo(360, 500);
    ctx.stroke();
  
    //linea de carretera izq
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(110, 0);
    ctx.lineTo(110, 500);
    ctx.stroke();
  
    //linea de carretera der
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.moveTo(620, 0);
    ctx.lineTo(620, 500);
    ctx.stroke();
    };
  
  /*
  function Auto(x,y){
    this.x = x;
    this.y = y;
    this.img =new Image();
    this.img.src =
  
  
  }
  */
  
  //OBSTACULOS
  // var myObstacles = [];
  
  // var myGameArea = {
  
  //    frames: 0,
  // }
  
  // myGameArea.frames +=1;
  // if (myGameArea.frames % 100 === 0) {
  //  y = myGameArea.canvas.width;
  //  minWidth = 150;
  //  maxWidth = 600;
  //  width = Math.floor(Math.random()*(maxWidth-minWidth+1));
  //  minGap = 200;
  //  maxGap = 50;
  //  gap = Math.floor(Math.random()*(maxGap-minGap+1));
  //  myObstacles.push(new component(10, width, "green", y, 0));
  //  myObstacles.push(new component(10, y - width - gap, "green", y, width + gap));
  //   };
  
  //AUTO
  //   var carImg = new Image();
  // carImg.src = "images/car.png";
  // ctx.drawImage(carImg, 350, 500);
  
  // car = new Component (158, 319, carImg, 400, 800) {
  //  this.carMoveLeft = function (){
  //    if(this.x > 90 && this.x < 640) {
  //      this.speedX -= 1;
  //    }
  //  }
  //  this.carMoveLeft = function (){
  //    if(this.x > 90 && this.x < 640){
  //    this.speedX += 1;
  //    }
  //  }
  //  document.onkeydown = function(e){
  //    switch (e.keyCode){
  //      case 37:
  //      moveLeft();
  //      break;
  //      case 39:
  //      moveRight();
  //      break;
  //    }
  //  }
  //  document.onkeyup = function(e){
  //    stopMove();
  //  }
  //  function stopMove(){
  //    car.speedX = 0;
  //  }
  //__________________________________________________________________________________________
  var button = document.getElementById("starter");
  button.addEventListener('click', function() {
    startGame();
  });
  
  drawRoad();
  
  function Component() {
  
    this.x = 300;
    this.y = 250;
    //this method draw the car only if is called
    this.drawCar = function(){
      var x = this.x;
      var y = this.y;
      var img = new Image();
      img.src = "images/car.png";
      img.onload = function(){
      ctx.drawImage(img, x, y,100,200);
      }
    }
    
    // this.width = width;
    // this.height = height;
    // this.x = x;
    // this.y = y;
    // this.speedX = 0;
    // this.speedY = 0;
    // this.newPos = function() {
    // this.x += this.speedX;
    // this.y += this.speedY;
    // };
    this.moveLeft = function() {
        this.x -= 10;
    };
    this.moveRight = function() {
        this.x += 10;
    };
    // console.log(startGame());
  
  
    // document.addEventListener("keyup", function(e){
    //   stopMove();
    // });
    // function stopMove() {
    //   this.speedX = 0;
    // }
  }
  var car;
  function startGame() {
    car = new Component(158, 319, 365, 700);
    //after we create the car, we need to call the drawer to appear
    car.drawCar();
  }
  
  
  function updateGame(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawRoad();
    car.drawCar();
    //sumamos uno a los frames
    frames+=1;
    // chceamos si han pasado 100 frames
    if(frames%100===0){
      // si han pasado, agregamos un nuevo obstaculo al array
      obstacles.push(new Obstacle());
    }
    // recorremos el array de obstaculos y movemos uno por uno en y
    obstacles.forEach(function(o){
        o.y +=1;
        o.update();
  });
  
    document.addEventListener("keydown", function(e){
      switch (e.keyCode) {
        case 37:
          car.moveLeft();
          updateGame();
          break;
        case 39:
          car.moveRight();
          updateGame();
          break;
      }
    });
  
  //hacemos un array para guardar los obstaculos
  var obstacles = [];
  //frames va a contar
  var frames = 0;
  
  //esto es la clase obstaculo 
  function Obstacle(){
    this.y = 0;
    this.width = Math.floor(Math.random()*300);
    this.update = function(){
      //este metodo es el mas importante, vuelve a dibujar el obstaculo
      ctx.fillStyle = "black";
      ctx.fillRect(100, this.y, this.width, 30);
    }
    ctx.fillStyle = "black";
    ctx.fillRect(100,this.y,this.width,30);
  }
  
  //esto es lo que en realidad actualiza el juego
  setInterval(updateGame,20)
  
  //cada que se llama esta funcion pasa lo siguiente:
  // 1.- se borra todo
  // 2.- se suma un fram
  // 3.- checamos si han pasado 100 frames para crear otro obstaculo
  // 4.- actualizamos todos los obstaculos
    //borramos todo
    
    }
    startGame();
  }; //onload