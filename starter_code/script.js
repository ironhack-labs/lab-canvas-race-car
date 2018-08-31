window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    function draw(){
    var canvas = document.getElementById("road");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "#348200";
    ctx.fillRect(0,0,30,600);
    ctx.fillStyle = "#808080";
    ctx.fillRect(30,0,8,600);
    ctx.fillStyle = "white";
    ctx.fillRect(38,0,10,600);
    ctx.fillStyle = "#808080";
    ctx.fillRect(48,0,300,600);
    ctx.fillStyle = "white";
    ctx.fillRect(348,0,10,600);
    ctx.fillStyle = "#808080";
    ctx.fillRect(356,0,8,600);
    ctx.fillStyle = "#348200";
    ctx.fillRect(364,0,30,600);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.setLineDash([15,10]);
    ctx.moveTo(200,0);
    ctx.lineTo(200,600);
    ctx.lineWidth = 5;
    ctx.stroke();
           
    
  }

  var img = new Image();
  
  img.onload = function() {
    ctx.drawImage(img,200,600);
  }

  img.src="/home/weronika/Documents/IRONHACK/CANVAS/lab-canvas-race-car/starter_code/images/car.png";

  img.onload = function(){
    drawImage();
  }
 

 draw()
}
};

