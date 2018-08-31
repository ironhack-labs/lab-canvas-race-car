window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


 
  function startGame() {
   $(".game-intro").remove();
   $("body").append("<canvas id='canvas'></canvas>")
   var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
ctx.beginPath();
ctx.fillStyle="grey";
ctx.fillRect(0,0,canvas.width,canvas.height);
ctx.fillStyle="green";
ctx.fillRect(0,0,100,canvas.height)
ctx.fillRect(canvas.width-100,0,100,canvas.height);
ctx.fillStyle="white";
ctx.fillRect(150,0,50,canvas.height);
ctx.fillRect(canvas.width-200,0,50,canvas.height);
var middle=canvas.width/2;
for(var i=0;i<=10;i++){
  ctx.fillRect(middle-20,i*75,20,50);
}
var img=new Image();
img.src="./images/car.png";
imgScale=200/400;
img.onload = function() {
      ctx.drawImage(img, middle-50, canvas.height-200,150*imgScale,150);
    };
  }
};




