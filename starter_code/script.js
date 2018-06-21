window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    // Car
    var car = {
      x: 225,
      y: 570,
      moveLeft:  function() { this.x -= 25 },
      moveRight: function() { this.x += 25 },
    }
    
    
    function draw(car) {
      var img = new Image();
      img.onload = function() { 
         ctx.drawImage(img, 225, 570, 50, 120); 
      }
      img.src = "./images/car.png";
    }

      //Rectángulos
      ctx.beginPath();
      ctx.fillStyle = 'green';
      ctx.fillRect(0,0, 100, 700);
      ctx.fillRect(400,0,300,700);

      ctx.fillStyle = 'gray';
      ctx.fillRect(100,0,300,700);

      ctx.fillStyle = 'white';
      ctx.fillRect(110,0,10,700);

      ctx.fillStyle = 'white';
      ctx.fillRect(380,0,10,700);
      //Línea
      ctx.strokeStyle = "white";
      ctx.lineWeigth = 2;
      ctx.moveTo(249, 0);
      ctx.lineTo(251, 700);
      ctx.stroke();
      draw();

      
  }





};
