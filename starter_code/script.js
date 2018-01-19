window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');


  function startGame() {
  
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 350, 600);

  ctx.fillStyle = "grey";
  ctx.fillRect(35, 0, 280, 600);
  
  ctx.fillStyle = "white";
  ctx.fillRect(45, 0, 8, 600);
  ctx.fillRect(297, 0, 8, 600);
  
  ctx.beginPath();
  ctx.strokeStyle = "white";
  ctx.setLineDash([20, 20]);
  ctx.moveTo(175, 10);
  ctx.lineTo(175, 600);
  ctx.stroke();

  var img = new Image();
  img.src = 'images/car.png';
  img.onload = function(){
  ctx.drawImage(img, 150, 450, 50, 100);
  }
}
};
