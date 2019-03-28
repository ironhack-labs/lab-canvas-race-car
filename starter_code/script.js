var canvas, ctx;
var w = window.innerWidth;
var h = window.innerHeight;
var ditchWidth = 50;
var lineWidth = 10;
var asphaltWidth = 500;
var canvasW = ditchWidth * 2 + asphaltWidth;
var img;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var gameboard = document.querySelector("#game-board");
    canvas = document.createElement("canvas");
    canvas.width = canvasW;
    canvas.height = this.innerHeight - 70;
    ctx = canvas.getContext("2d");
    gameboard.appendChild(canvas);

    paintRoad();
    paintMiddleLine();
    paintCar();
  }

  function paintRoad() {
    var ditchWidth = 50;
    var lineWidth = 10;
    var asphaltWidth = 500;

    console.log("called paintRoad()");
    //1st Green Line
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(0, 0, ditchWidth, h);
    ctx.closePath();

    //Asphalt
    ctx.beginPath();
    ctx.fillStyle = "#808080";
    ctx.fillRect(ditchWidth, 0, asphaltWidth, h);
    ctx.closePath();

    //2st Green Line
    ctx.beginPath();
    ctx.fillStyle = "rgb(0,255,0)";
    ctx.fillRect(asphaltWidth + ditchWidth, 0, ditchWidth, h);
    ctx.closePath();

    //Continuous lines
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = lineWidth / 2;
    ctx.moveTo(ditchWidth + lineWidth, 0);
    ctx.lineTo(ditchWidth + lineWidth, h);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = lineWidth / 2;
    ctx.moveTo(asphaltWidth + ditchWidth - lineWidth, 0);
    ctx.lineTo(asphaltWidth + ditchWidth - lineWidth, h);
    ctx.stroke();
    ctx.closePath();
  }

  function paintMiddleLine() {
    var dottedLineHeight = 10;

    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.setLineDash([dottedLineHeight, dottedLineHeight]);
    ctx.lineWidth = lineWidth / 2;
    ctx.moveTo(asphaltWidth / 2 + ditchWidth, 0);
    ctx.lineTo(asphaltWidth / 2 + ditchWidth, h);
    ctx.stroke();
    ctx.closePath();
  }

  function paintCar() {
    console.log("Painting car!");
    var carWidth = 60;
    var carHeight = 100;

    img = new Image();
    img.onload = function() {
      ctx.drawImage(img, canvasW/2 - (carWidth/2), h - carHeight*2, carWidth, carHeight);
    };
    img.src = "./images/car.png";
    console.log(img);
  }
};
