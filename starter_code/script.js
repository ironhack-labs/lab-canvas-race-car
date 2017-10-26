window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  // Function that draws the board in the canvas
  function createBoard (){
    var canvas = document.getElementById("board");
    var ctx = canvas.getContext('2d');
    // Fill the background color - grey
    ctx.fillStyle = "#BFC9CA";
    ctx.fillRect(0, 0, 700, 650);
    // Fill the green parts
    ctx.fillStyle = "#15B405";
    ctx.fillRect(0, 0, 40, 650);
    ctx.fillRect(660 ,0, 40, 650);
    // Fill the white parts
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(60, 0, 20, 650);
    ctx.fillRect(620, 0, 20, 650);
    // Create the dashed line
    ctx.lineWidth = 10;
    ctx.strokeStyle = "#FFFFFF";
    ctx.beginPath();
    ctx.setLineDash([30,50]);
    ctx.moveTo(350, 0);
    ctx.lineTo(350, 650);
    ctx.stroke();
    var car = {
      x: 320,
      y: 550,
      moveLeft: function(){this.x-30;},
      moveRigth: function(){this.x+30;},
    };
    drawCar(car, ctx);
  }

  function drawCar (car, board){
    var img = new Image();
    img.src = "./images/car.png";
    img.onload = function(){
      board.drawImage(img, 320, 550, 60, 80);
    };
  };

  document.onkeydown = function(e, car) {
  switch (e.keyCode) {
    case 37: car.moveLeft();  console.log('left',  car); break;
    case 39: car.moveRight(); console.log('right', car); break;
  }
  drawCar(car);
};


  function startGame() {
    createBoard();

  };
};
