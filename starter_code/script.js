window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  }
  };

function startGame() {
  function draw() {
    var canvas = document.getElementById("race");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#3b821e";
    ctx.fillRect(0, 0, 450, 490);
    ctx.fillStyle = "#808080";
    ctx.fillRect(30, 0,381, 490);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(50, 0,9, 490);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(376, 0,9, 490);
       ctx.beginPath();
       ctx.setLineDash([25, 35]);
       ctx.strokeStyle = "#fff";
       ctx.moveTo(220, 0);
       ctx.lineTo(220, 720);            
       ctx.lineWidth = 5;
       ctx.stroke();
       var img = new Image();
       imgScale = 400/400;
       img.onload = function() {
         ctx.drawImage(img, 195, 418,36*imgScale,50);
       };
       img.src = 'images/car.png';  
  }
  draw();
};
