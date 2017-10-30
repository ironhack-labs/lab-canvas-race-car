window.onload = function() {
  var canvas = document.getElementById("board");
  var ctx = canvas.getContext('2d');
  var car = new Car();

  // Function that draws the board in the canvas
  function drawRoad() {
    // Fill the background color - grey
    ctx.fillStyle = "#BFC9CA";
    ctx.fillRect(0, 0, 600, 550);
    // Fill the green parts
    ctx.fillStyle = "#15B405";
    ctx.fillRect(0, 0, 40, 550);
    ctx.fillRect(560, 0, 40, 550);
    // Fill the white parts
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(60, 0, 20, 550);
    ctx.fillRect(520, 0, 20, 550);
  }

  function drawCar() {
    var img = new Image();
    img.src = "./images/car.png";
    img.onload = function() {
      ctx.drawImage(img, car.x, car.y, car.width, car.height);
    };
  };

  function drawLine() {
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.setLineDash([30, 50]);
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 550);
    ctx.stroke();
  };

  function createBoard() {
    drawRoad();
    drawLine();
    drawCar();
  };

  function startGame() {
    createBoard();
  };

  document.onkeydown = function(e) {
    if (e.keyCode == 37) { // Move to the left
      if (car.x > 80) { // Only moves inside the road
        car.moveLeft();
      }
    }
    if (e.keyCode == 39) { // Move to the rigth
      if (car.x < 470){ // Only moves inside the road
        car.moveRigth();
      }
    }
    createBoard();
  };

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function clearCanvas (){
    ctx.clearRect (0, 0, 700, 650);
  };

};
