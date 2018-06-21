window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  // CREATE AND DEFINE CANVAS 2D
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d'); 

  // BACKGROUND IMAGE 
  function Background() {
    // FIRST PLOT GRAY BACKGROUND
    ctx.fillStyle = "#808080";
    ctx.fillRect(0, 0, 350, 550);
    // THEN ADD GREEN LINES IN THE EXTREMES
    ctx.fillStyle = "#008000"
    ctx.fillRect(0, 0, 30, 550);
    ctx.fillRect(320, 0, 350, 550);
    
    // left line
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.setLineDash([]); 
    ctx.strokeStyle = "#ffffff"
    ctx.moveTo(45, 0);
    ctx.lineTo(45, 550);
    ctx.stroke();
    // right line
    ctx.beginPath();
    ctx.moveTo(305, 0);
    ctx.lineTo(305, 550);
    ctx.stroke();
    // central line
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.setLineDash([15,15]);
    ctx.moveTo(175, 0);
    ctx.lineTo(175, 550);
    ctx.stroke();
  }

  //CREATE THE CAR IMAGE AND ITS DRAW FUNCTION
  var car = {
    x: 150,
    y: 430,
    moveLeft: function() {
      if (this.x > 50) {
        this.x -= 10;
      }
    },
    moveRight: function() {
      if (this.x < 250) {
        this.x += 10;
      }
    }
  }
  function draw(car) {
    var img = new Image(); 
    img.src = 'images/car.png';
    img.onload = function() {
      ctx.drawImage(img, car.x, car.y, 50, 100);
    }
  }

  // CLEAR OUR CANVAS AND DRAW IT AGAIN
  function updateCanvas() {
    ctx.clearRect(0, 0, 350, 550);
    Background();
    draw(car);
  }

  //LEFT AND RIGHT 
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
  }
 
  function startGame() {
    updateCanvas();
  }

};
