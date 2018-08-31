window.onload = function() {

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas =  document.getElementById("canvas"); 
  var ctx = canvas.getContext("2d");
  
  var car = new Image();
  car.src = "./images/car.png";
  car.onload = function() {
    ctx.drawImage(car, 110, 400, 25, 50);
    ctx.clearRect(0,0,canvas.width, canvas.height)
  }

  function drawCar () {
    ctx.drawImage(car, 110, 400, 25, 50)
  }

  function startGame() {
    draw();  
    drawCar();
  }

  function draw() {
    //width 250px, heigth 450px;
    //left green side
    ctx.fillStyle="#009900";
    ctx.fillRect(0, 0, 30, 450);
    
    // left grey line
    ctx.fillStyle="#808080";
    ctx.fillRect(30, 0, 5, 450);

    // left white line
    ctx.fillStyle="#ffffff";
    ctx.fillRect(35, 0, 10, 450);

    // both roads - to cover with central white
    ctx.fillStyle="#808080";
    ctx.fillRect(45, 0, 160, 450);

    // right white line
    ctx.fillStyle="#ffffff";
    ctx.fillRect(205, 0, 10, 450);

    // right grey line
    ctx.fillStyle="#808080";
    ctx.fillRect(215, 0, 5, 450);

    //right green side
    ctx.fillStyle="#009900";
    ctx.fillRect(220, 0, 30, 450);

    //center white line
    ctx.strokeStyle="#ffffff";
    ctx.lineWidth=10;
    ctx.setLineDash([10, 16]);
    ctx.beginPath();
    ctx.moveTo(120, 0);
    ctx.lineTo(120, 450);
    ctx.stroke();
  }

  };
