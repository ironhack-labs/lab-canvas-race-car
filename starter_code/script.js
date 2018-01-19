window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    // DEFINING THE CANVAS
    var canvas = document.getElementById('game-canvas');
    var ctx = canvas.getContext('2d');

    // VARIABLES TO CALCULATE RENDERING ONE FRAME
    var now = Date.now();
    var delta = 0;

    // DECLARATION OBJECT IMAGE
    var imgCar = new Image();   
    imgCar.src = 'images/car.png';
    var imgScale = 158/319;

    // CAR PROTOTYPE
    function Car(maxSpeed,x,y){
      this.maxSpeed = maxSpeed;
      this.x = x;
      this.y = y;
      this.speed = 0;
    }

    Car.prototype.move = function(direction){
      this.speed = this.maxSpeed * direction;
    }

    Car.prototype.stop = function(){
      this.speed = 0;
    }

    Car.prototype.render = function(delta){
      this.x += this.speed;
      //var that = this; 
      //imgCar.onload = function() {          
      ctx.drawImage(imgCar, this.x, this.y, 110*imgScale, 110);
      //};
    }

    // NEW INSTANCE OF OBJECT CAR
    var myCar = new Car(100,225,560);

    // OBSTACLE PROTOTYPE
    function Obstacle(x,y,width){
      this.x = x;
      this.y = y;
      this.speed = 1;
      this.width = width;
      this.height = 30;
      this.length = length;
    }

    Obstacle.prototype.move = function(){
      this.y += this.speed;
    }

    Obstacle.prototype.render = function(delta){
      ctx.fillStyle = 'rgb(146,0,0)';       
      ctx.fillRect(this.x, this.y, this.width, this.height);
      this.move();
    }

    // NEW INSTANCES OF OBJECT OBSTACLES
    var arrObstacles = [
      new Obstacle(210,420,220),
      new Obstacle(70,280,180),
      new Obstacle(70,170,250),
      new Obstacle(120,20,120),
      new Obstacle(250,-100,180),
      new Obstacle(150,-250,180),
    ];

    // DRAWING CANVAS
    var render = function(){
      
      then = now;
      now = Date.now();
      delta = now - then;
      
      // CLEAR CANVAS BEFORE EACH DRAWING
      ctx.clearRect(0,0,canvas.width,canvas.height);

      // ROAD
      ctx.fillStyle = 'rgb(0,145,0)';
      ctx.fillRect(0,0,500,700);

      ctx.fillStyle = 'rgb(127,127,127)';
      ctx.fillRect(35,0,425,700); 
    
      ctx.fillStyle = 'rgb(255,255,255)';
      ctx.fillRect(47,0,12,700);
      ctx.fillRect(437,0,12,700);

      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.beginPath();
      ctx.setLineDash([25, 25]);
      ctx.moveTo(250, 25);
      ctx.lineWidth = 8;
      ctx.lineTo(250, 700);      
      ctx.stroke();

      // OBSTACLES


      // MYCAR
      myCar.render(delta);  

      // OBSTACLES
      arrObstacles.forEach(function(obstacle){
        obstacle.render(delta);
      });
      

      // CALLING FRAMES ANIMATION TO MAKE IT CONTINUOUS
      window.requestAnimationFrame(render);
    };
    window.requestAnimationFrame(render);
  }

  // MOVE CAR LEFT OR RIGHT
  //$('#game-canvas').keydown(function(e){
  window.addEventListener('keydown', function(e){
    console.log('ha entrado');
    switch(e.keyCode){
      case 37: // left
        myCar.move(-1);              
      break;
      case 39: // right
        myCar.move(1);
      break;
    }
  });
  
  // STOP CAR
  $('#game-canvas').keyup(function(e){
    myCar.stop();
  });



};
