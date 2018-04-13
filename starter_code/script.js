/*window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }
};*/

var canvas = document.getElementById("game-board");
console.log(canvas)
var ctx = canvas.getContext('2d');

ctx.moveTo (0,canvas.height);
ctx.lineTo (0,0);
ctx.lineTo (canvas.width,0);
ctx.lineTo (canvas.width,canvas.height);
ctx.lineTo (0,canvas.height);
ctx.fillStyle="green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo (20,480);
ctx.lineTo (20,50);
ctx.lineTo (260,50);
ctx.lineTo (260,480);
ctx.lineTo (20,480);
ctx.fillStyle="grey";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo (770,480);
ctx.lineTo (770,50);
ctx.lineTo (760,50);
ctx.lineTo (760,480);
ctx.lineTo (770,480);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo (530,480);
ctx.lineTo (530,50);
ctx.lineTo (540,50);
ctx.lineTo (540,480);
ctx.lineTo (520,480);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,480)
ctx.lineTo (647.5,470);
ctx.lineTo (652.5,470);
ctx.lineTo (652.5,480);
ctx.lineTo (647.5,480);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,460)
ctx.lineTo (647.5,450);
ctx.lineTo (652.5,450);
ctx.lineTo (652.5,460);
ctx.lineTo (647.5,460);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,440)
ctx.lineTo (647.5,430);
ctx.lineTo (652.5,430);
ctx.lineTo (652.5,440);
ctx.lineTo (647.5,440);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,420)
ctx.lineTo (647.5,410);
ctx.lineTo (652.5,410);
ctx.lineTo (652.5,420);
ctx.lineTo (647.5,420);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,420)
ctx.lineTo (647.5,410);
ctx.lineTo (652.5,410);
ctx.lineTo (652.5,420);
ctx.lineTo (647.5,420);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,400)
ctx.lineTo (647.5,390);
ctx.lineTo (652.5,390);
ctx.lineTo (652.5,400);
ctx.lineTo (647.5,400);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,380)
ctx.lineTo (647.5,370);
ctx.lineTo (652.5,370);
ctx.lineTo (652.5,380);
ctx.lineTo (647.5,380);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,360)
ctx.lineTo (647.5,350);
ctx.lineTo (652.5,350);
ctx.lineTo (652.5,360);
ctx.lineTo (647.5,360);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,340)
ctx.lineTo (647.5,330);
ctx.lineTo (652.5,330);
ctx.lineTo (652.5,340);
ctx.lineTo (647.5,340);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,320)
ctx.lineTo (647.5,310);
ctx.lineTo (652.5,310);
ctx.lineTo (652.5,320);
ctx.lineTo (647.5,320);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,300)
ctx.lineTo (647.5,290);
ctx.lineTo (652.5,290);
ctx.lineTo (652.5,300);
ctx.lineTo (647.5,300);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,280)
ctx.lineTo (647.5,270);
ctx.lineTo (652.5,270);
ctx.lineTo (652.5,280);
ctx.lineTo (647.5,280);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,260)
ctx.lineTo (647.5,250);
ctx.lineTo (652.5,250);
ctx.lineTo (652.5,260);
ctx.lineTo (647.5,260);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,240)
ctx.lineTo (647.5,230);
ctx.lineTo (652.5,230);
ctx.lineTo (652.5,240);
ctx.lineTo (647.5,240);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,220)
ctx.lineTo (647.5,210);
ctx.lineTo (652.5,210);
ctx.lineTo (652.5,220);
ctx.lineTo (647.5,220);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,200)
ctx.lineTo (647.5,190);
ctx.lineTo (652.5,190);
ctx.lineTo (652.5,200);
ctx.lineTo (647.5,200);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,180)
ctx.lineTo (647.5,170);
ctx.lineTo (652.5,170);
ctx.lineTo (652.5,180);
ctx.lineTo (647.5,180);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,160)
ctx.lineTo (647.5,150);
ctx.lineTo (652.5,150);
ctx.lineTo (652.5,160);
ctx.lineTo (647.5,160);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,140)
ctx.lineTo (647.5,130);
ctx.lineTo (652.5,130);
ctx.lineTo (652.5,140);
ctx.lineTo (647.5,140);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,120)
ctx.lineTo (647.5,110);
ctx.lineTo (652.5,110);
ctx.lineTo (652.5,120);
ctx.lineTo (647.5,120);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,100)
ctx.lineTo (647.5,90);
ctx.lineTo (652.5,90);
ctx.lineTo (652.5,100);
ctx.lineTo (647.5,100);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,80)
ctx.lineTo (647.5,70);
ctx.lineTo (652.5,70);
ctx.lineTo (652.5,80);
ctx.lineTo (647.5,80);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.moveTo(647.5,60)
ctx.lineTo (647.5,50);
ctx.lineTo (652.5,50);
ctx.lineTo (652.5,60);
ctx.lineTo (647.5,60);
ctx.fillStyle="white";
ctx.fill();
ctx.closePath();