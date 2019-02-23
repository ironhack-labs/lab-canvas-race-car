window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');

  var car = {
    x: 150, 
    y: 460,
    moveLeft:  function() { this.x -= 25 },
    moveRight: function() { this.x += 25 },
  }


  
  function startGame() {

    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,350,600);
    ctx.clearRect(50,0,10,600);
    ctx.clearRect(290,0,10,600);
    ctx.fillStyle = "green";
    ctx.fillRect(0,0,40,600);
    ctx.fillRect(310,0,40,600)
    ctx.beginPath();
    ctx.setLineDash([20, 15]);
    ctx.lineWidth = "5";
    ctx.strokeStyle = "white";
    ctx.moveTo(175,25);
    ctx.lineTo(175,600);
    ctx.stroke();
    var img = new Image();
    img.src = "images/car.png";
    img.onload = function() {
      ctx.drawImage(img,car.x, car.y, 50, 100);
      }
  }

  function mueve(car) {
    var img = new Image();
    img.src = "images/car.png";
    img.onload = function() {
      ctx.drawImage(img,car.x, car.y, 50, 100);
    }
  }
    
  document.onkeydown = function(e) {
    if (e.keyCode === 37 || e.keyCode === 39) {
    switch (e.keyCode) {
      case 37: car.moveLeft();  console.log('left',  car); break;
      case 39: car.moveRight(); console.log('right', car); break;
    }
    updateCanvas();
    }
    else {
      if (e.keyCode != 116) {
      alert('Ey, dale a start hombre');
      }
    }
  }
  function updateCanvas() {
    ctx.clearRect(0,0,350,600);
    ctx.fillText("Ghost_x: " + car.x, 580,40);
    ctx.fillText("Ghost_y: " + car.y, 580,60);
    mueve(car);
    startGame();
  }
  
  //updateCanvas()


};
