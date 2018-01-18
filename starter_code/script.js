window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame();
   
function startGame() {
  var canvas = document.getElementById('canvi');
   var ctx = canvas.getContext('2d');
    ctx.fillStyle ='#80817F';
    ctx.fillRect(0, 0, 400, 600);
    ctx.fillStyle ='#27AE60';
    ctx.fillRect(0, 0, 25, 600);
    ctx.fillStyle ='#27AE60';
    ctx.fillRect(375, 0, 25, 600);
    ctx.clearRect(355,0,10,600);
    ctx.clearRect(35,0,10,600);
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;

ctx.setLineDash([30, 20]);
ctx.beginPath();
ctx.moveTo(200,570 );
ctx.lineTo(200, 30);
ctx.stroke();
var img = new Image();
img.src = "images/car.png";
img.onload = function(){
  ctx.drawImage(img,175,480,50,100 );
  };

}
}
}
