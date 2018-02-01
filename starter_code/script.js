window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
  };

  function startGame() {
    createCanvas();
  }

  function createCanvas(){
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 510, 600);
    
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 238, 600);

    ctx.fillStyle = "white";
    ctx.fillRect(40, 0 ,10, 600);
    ctx.fillRect(248, 0, 10, 600);

    ctx.setLineDash([5, 3]);/*dashes are 5px and spaces are 3px*/
    ctx.beginPath();
    ctx.moveTo(143, 0);
    ctx.lineTo(143, 600);
    ctx.strokeStyle="#FFFFFF";
    ctx.stroke();
    
    var img = new Image();
    img.onload = function() {
    ctx.drawImage(img, 80, 105 , 50, 40);
  };
  img.src = "images/car.png";
  }
};