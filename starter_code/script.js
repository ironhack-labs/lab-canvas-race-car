window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function getCanvas(){
    var canvas = document.getElementById('example');
    var ctx = canvas.getContext('2d');
    return ctx;
  }

  function startGame() {

    ctx = getCanvas();
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 10, 500, 800);
    ctx.fillStyle = 'grey';
    ctx.fillRect(40, 10, 420, 800);
    ctx.fillStyle = 'white';
    ctx.fillRect(60, 10, 20, 800);
    ctx.fillStyle = 'white';
    ctx.fillRect(ctx.canvas.clientWidth-80, 10, 20, 800);
    ctx.setLineDash([18, 17]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(250,10);
    ctx.lineTo(250, 800);
    ctx.lineWidth = 8;
    ctx.strokeStyle = 'white';
    ctx.stroke();
    ctx.closePath();

    drawCar(ctx.canvas.clientWidth/2,100);
  }

  function drawCar(position) {
    var ctx = getCanvas();
    var img = new Image();
    img.onload = function() { 
       ctx.drawImage(img, position-img.width/4, 300, img.width/2, img.height/2); 
    }
    img.src = 'images/car.png';
  }
  
};
