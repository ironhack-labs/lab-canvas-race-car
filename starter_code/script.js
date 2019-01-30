window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('road');
    var ctx = canvas.getContext('2d');
    function drawRoad(){
      ctx.fillStyle = 'green'
      ctx.fillRect(0, 10, 350, 600)
      ctx.fillStyle = 'gray'
      ctx.fillRect(25, 10, 300, 600)
      ctx.fillStyle = 'white'
      ctx.fillRect(33, 10, 10, 600)
      ctx.fillRect(306, 10, 10, 600)
      for (var i = 0; i < 20; i++) {
        ctx.fillRect(175, 20 + i * 30, 4, 20);
      }
    }

    var car = {
      x: 150,
      y: 475,
      moveUp:    function() { this.y -= 10 },
      moveDown:  function() { this.y += 10 },
      moveLeft:  function() { this.x -= 10 },
      moveRight: function() { this.x += 10 },
    }

    function draw(car) {
      var img = new Image();
      img.onload = function() { 
         ctx.drawImage(img, car.x, car.y, 50, 100); 
      }
      img.src = "images/car.png";
    }

    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37:
          if (car.x >= 40){
            car.moveLeft();  console.log('left',  car); break;
          }
          else{
            break;
          }
        case 39:
          if (car.x <= 260){
            car.moveRight();  console.log('right',  car); break;
          }
          else{
            break;
          }
      }
      updateCanvas();
    }
    
    function updateCanvas() {
      ctx.clearRect(0,0,1500,1700);
      drawRoad()
      draw(car)
    }
    
    drawRoad()
    draw(car)
  }
};
