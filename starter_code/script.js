window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  // const carro = new Carro(250,500);
  var myGameArea = {
    canvas: document.createElement("canvas"),
    frames: 0,
    start: function() {
      this.canvas.width = 500;
      this.canvas.height = 600;
      this.ctx = this.canvas.getContext("2d");
      this.carro = new Carro(250,500),
      document.getElementById("game-board").appendChild(this.canvas);
    }

  };
  var myObstacles = [];
  function startGame() {
    
    // myGameArea.canvas.width = 500;
    // myGameArea.canvas.height = 600;
    // ctx = myGameArea.canvas.getContext("2d");
    myGameArea.start();
    this.interval = setInterval(updateBoard, 50);
  
  }
  function drawBoard(){
    myGameArea.ctx.fillStyle = 'rgb(0,129,0)';
    myGameArea.ctx.fillRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
    myGameArea.ctx.fillStyle = 'rgb(128,128,128)';
    myGameArea.ctx.fillRect(50, 0, 400, 600);
    myGameArea.ctx.fillStyle = "white";
    myGameArea.ctx.fillRect(65, 0, 15, 600);
    myGameArea.ctx.fillStyle = "white";
    myGameArea.ctx.fillRect(420, 0, 15, 600);
    myGameArea.ctx.fillStyle = "white";
    myGameArea.ctx.fillRect(420, 0, 15, 600);
    myGameArea.ctx.setLineDash([20, 16]);
    myGameArea.ctx.lineWidth = 5;
    myGameArea.ctx.beginPath();
    myGameArea.ctx.strokeStyle = 'white';
    myGameArea.ctx.moveTo(250,30);
    myGameArea.ctx.lineTo(250, 600);
    myGameArea.ctx.stroke();
  }
  function drawCar(ctx,carro) {
    var img = new Image();
    img.onload = function() {
        ctx.drawImage(img, carro.x, carro.y, 80, 90);
    }
    img.src = "./images/car.png";
}
  function clearBoard() {
    myGameArea.ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
  }
  function updateObstacle(){
    myGameArea.frames += 1;
    if (myGameArea.frames % 30 === 0) {
      var minWidth = 50;
      var maxWidth = 250;
      var width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      var minX = 80;
      var maxX = 480 - width;
      var xInicio = Math.floor(
        Math.random() * (maxX - minX + 1) + minX
      );
      myObstacles.push(new Component(width, 30, xInicio, 0,myGameArea.ctx));
    }
    for (i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y += 10;
      myObstacles[i].update();
    }
  }
  function updateBoard(){
    clearBoard();
    drawBoard();
    updateObstacle();
    drawCar(myGameArea.ctx,myGameArea.carro);
  }
  window.onkeydown = function (e){
    switch (e.keyCode) {
      case 39: 
        myGameArea.carro.virarDireita();
        break;
      case 37:
        myGameArea.carro.virarEsquerda();
        break;
      case 38:
        myGameArea.carro.irParaCima();
        break;
      case 40:
        myGameArea.carro.irParaBaixo();
        break;
    }
  }
  
};
