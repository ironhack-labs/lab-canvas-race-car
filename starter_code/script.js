window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    }
  };

  function startGame() {
    function draw(){
    var canvas = document.getElementById('start');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle="#808080";
    ctx.fillRect(0, 0, 400, 500); 
    ctx.fillStyle="#008100";
    ctx.fillRect(0, 0, 30, 500); 
    ctx.fillStyle="#008100";
    ctx.fillRect(370, 0, 30, 500); 
    ctx.fillStyle="#ffffff";
    ctx.fillRect(40, 0, 10, 500); 
    ctx.fillStyle="#ffffff";
    ctx.fillRect(350, 0, 10, 500); 
    ctx.setLineDash([10, ]);
    ctx.fillStroke="#ffffff";
    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(200,500);
    ctx.stroke();

    var img = new Image();
    imgScale=150/150;
    img.onload=function(){
    ctx.drawImage(img,0,0);
    };
    img.src="images/car.png";
  }
  draw();
};
