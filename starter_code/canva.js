
window.onload = function() {
function draw(){
    var canvas = document.getElementById("bitch-car");
    var ctx = canvas.getContext('2d');
    ctx.fillStyle= "#3b820e";
    ctx.fillRect(0, 0, 400, 700);
    ctx.fillStyle="#808080";
    ctx.fillRect(50, 0, 300, 700);
    ctx.fillStyle="#fff";
    ctx.fillRect(60, 0, 9, 700);
    ctx.fillStyle="#fff";
    ctx.fillRect(330,0,9,700);
    ctx.strokeStyle ="#fff";
    ctx.lineWidth = 5;
    ctx.setLineDash([30,15]);
    ctx.beginPath();
    ctx.moveTo(200,0);
    ctx.lineTo(200,500);
    ctx.stroke();
    var img = new Image();
    imgScale = 640/480;
    img.onload = function() {
      ctx.drawImage(img, 177, 400,35*imgScale,70);
    };
    img.src = "images/car.png";
  }
  draw();
}  