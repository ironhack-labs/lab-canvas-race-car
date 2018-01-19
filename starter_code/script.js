window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame();
  
  };
  var coche = new Pepe();
  console.log(coche)

function startGame() {
  var d = 0, s = 0 ;
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

  $(document).keydown(function(e) {
    switch (e.keyCode) {
      case 39:
      d++;
      
       break;
      case 37:
      s++;
       break;
    }
var img = new Image();
img.onload = function(){
  ctx.drawImage(img,175 +d-s,480,50,100 );
};
  
img.src = "images/car.png";
  });
 }
}
