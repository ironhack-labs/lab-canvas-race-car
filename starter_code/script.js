window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    drawRoad();
    myGamePiece = new CreatePlayer(50, 50, '../starter_code/images/car.png', 100, 100, 'image');
    updateGameArea.start();
  };

  var canvas = document.getElementById('game-board');
  var ctx = canvas.getContext('2d');

  var updateGameArea = {
    start : function() {
        // document.body.insertBefore(canvas, document.body.childNodes[0]);
        interval = setInterval(updateGameArea, 20);
    }
  }


  function drawRoad() {

    ctx.fillStyle = "#008200";
    ctx.fillRect(0, 0, 49, 650);

    ctx.fillStyle = "#808080";
    ctx.fillRect(49, 0, 24, 650);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(74, 0, 24, 650);

    ctx.fillStyle = "#808080";
    ctx.fillRect(100, 0, 224, 650);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(324, 0, 24, 650);

    ctx.fillStyle = "#808080";
    ctx.fillRect(349, 0, 24, 650);

    ctx.fillStyle = "#008200";
    ctx.fillRect(374, 0, 49, 650);

    ctx.beginPath();
    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth= 7;
    ctx.setLineDash([25, 25]);
    ctx.moveTo(209, 0);
    ctx.lineTo(209, 650);
    ctx.stroke();

  }

  function startGame() {
  } 

  function CreatePlayer(width, height, color, x, y, type) {
    this.width = width;
    this.height = height;
    this.type = type;
    if (type == "image") {
        this.image = new Image();
        this.image.src = color;
    }
    this.x = x;
    this.y = y;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  function Obsticle(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  ctx = myGameArea.context;
  ctx.fillStyle = "#890000";
  ctx.fillRect(this.x, this.y, this.width, this.height);
}}