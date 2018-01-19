window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    
    var canvas = document.getElementById("canvansito");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#777";
    ctx.fillRect(0, 0, 500, 800)
    ctx.fillStyle = "#00ad08";
    ctx.fillRect(0, 0, 40, 800)
    ctx.fillRect(460, 0, 40, 800)
    ctx.fillStyle = "#FFF";
    ctx.fillRect(50, 0, 10, 800)
    ctx.fillRect(440, 0, 10, 800)
    ctx.strokeStyle = "#FFF"
    ctx.setLineDash([25, 25]);
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(250, 0);
    ctx.lineTo(250, 800);
    ctx.stroke();

    var img = new Image();
    imgScale = 300/ 600;
    img.onload = function() {
    ctx.drawImage(img, 215, 645,150*imgScale,150);
    };
    img.src = 'images/car.png';
    }
  };



