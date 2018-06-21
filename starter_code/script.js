window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    }
  };

  function startGame() {
    var canvas = document.getElementById('example');
      var ctx = canvas.getContext('2d');
      // Rectángulos verdes y gris
      ctx.beginPath();
      ctx.fillStyle = 'green';
      ctx.fillRect(0,0, 100, 700);
      ctx.fillRect(400,0,100,700);
      ctx.fillStyle = 'gray';
      ctx.fillRect(100,0,300,700);
      ctx.fillStyle = 'white';
      ctx.fillRect(110,0,10,700);
      ctx.fillRect(380,0,10,700);
      // Línea blanca central
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 2;    
      ctx.moveTo(249,0);
      ctx.lineTo(251,700);
      ctx.stroke();
      
  function draw(car) {
    var img = new Image();
    img.onload = function() { 
    ctx.drawImage(img, 225, 570,50, 100); 
    }
    img.src = "./images/car.png";
    }
    
    draw();

    function car(x, y, img){
      this.x = x;
      this.y = y;
      this.maxSpeed = 1;
      this.sX = 1;
      this.sY = 1;
      this.img = new Image(); 
      this.img.src = "images/car.png";
      }

car.prototype.drawCar() = function() {
  ctx.drawImage(this.img, 225,570,50,120);
} 
    
car.prototype.moveLeft = function() { 
  this.sX = -this.maxSpeed 
}

car.prototype.moveRight = function() { 
  this.sX = this.maxSpeed  
}

car.prototype.move = function() {
    this.x += this.sX;
    this.y += this.sY;
    ctx.drawImage(this.img, this.x, this.y); 
}


  


  document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();  break;
        case 39: car.moveRight(); break;
      }
      updateCanvas();
    }
  
    updateCanvas();

    function updateCanvas() {
      ctx.clearRect(0,0,500,700);
      move();
      ctx.drawImage(this.img, 0, 0);
      window.requestAnimationFrame(updateCanvas);
    }
    
    window.requestAnimationFrame(updateCanvas);
  
  };
  

