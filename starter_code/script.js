// setup(canvas, draw11)
window.onload = function() {
  var canvas = document.querySelector("#game");
  var offset = 0;
  var w = window.innerWidth/2;
  var h = window.innerHeight;
  var w2 = w / 2;
  var h2 = h / 2;
  var posX = w2-25;
  var bugga = new Image();   
  bugga.src = './images/car.png'; 

  /** @type {CanvasRenderingContext2D} */
  var ctx = canvas.getContext('2d');

  canvas.setAttribute("height", window.innerHeight);
  canvas.setAttribute("width", window.innerWidth/2);


  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawRoad();
    drawMiddleLine();
    drawBugga(posX);
  }
  window.onkeydown = function (e) {
    if (e.keyCode === 37) {
        var intervalID = setInterval(function () {
            posX -= 1
            drawRoad();
            drawMiddleLine();
            drawBugga(posX)
        }, 1000/60)        
    }

    if (e.keyCode === 39) {
      var intervalID = setInterval(function () {
        posX += 1
        drawRoad();
        drawMiddleLine();
        drawBugga(posX)
      }, 1000/60)
    }
  }
  function drawRoad() {
    ctx.beginPath();
    ctx.fillStyle = `rgba(14, 129, 20, 1)`;
    ctx.fillRect(50, 0, w-100, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = `rgba(128, 128, 128, 1)`;
    ctx.fillRect(90, 0, w-180, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(105,0)
    ctx.lineTo(105,h)
    ctx.stroke()
    ctx.beginPath();
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(w-105,0)
    ctx.lineTo(w-105,h)
    ctx.stroke()
  }
  function drawMiddleLine() {
    ctx.beginPath();
    ctx.setLineDash([50,50]);
    ctx.strokeStyle = `rgba(255, 255, 255, 1)`
    ctx.lineWidth = 10;
    ctx.moveTo(w2,0)
    ctx.lineTo(w2,h)
    ctx.stroke()
  }
  function drawBugga(posX){
      ctx.drawImage(bugga,posX,h-200,50,100);
  }
};

