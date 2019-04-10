window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    drawCanvas();

  }
};
function drawCanvas(){
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
//first green 
ctx.fillStyle="green";
ctx.fillRect(0, 0, 50, 600);
//firstgray
ctx.fillStyle="gray";
ctx.fillRect(50, 0, 10, 600);
//first white line
ctx.fillStyle="white";
ctx.fillRect(60,0,10,600);
//street
ctx.fillStyle="gray";
ctx.fillRect(70,0,260,600);
//2nd white line
ctx.fillStyle="white";
ctx.fillRect(330,0,10,600);
//second gray
ctx.fillStyle="gray";
ctx.fillRect(340, 0, 10, 600);
//2nd green
ctx.fillStyle="green";
ctx.fillRect(350,0,50,600);
//dotted line
ctx.strokeStyle= "white"
 ctx.beginPath();
 ctx.setLineDash([20, 10]);
 ctx.moveTo(196, 0);//400-8(linewidth)/2 gives you the right middle position to put it in
 ctx.lineTo(196, 600);
 ctx.lineWidth= 8;
 ctx.stroke();

// ctx.setLineDash([5, 3]);
// ctx.beginPath(180,0);
// ctx.moveTo(200,400);
// ctx.lineTo(400, 200);
// ctx.stroke();
}
