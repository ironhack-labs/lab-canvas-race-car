var canvas = document.getElementById('canvas'); //v important don't forget/ make sure to have at top
var ctx = canvas.getContext('2d');

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
 
  };

  function startGame() {
    drawCanvas();
    drawCar();
    updateCanvas();
    updateObstacles();
    // let myObstacle = new Obstacle()
    // this.ctx.fillStyle(myObstacle.color)
    // this.ctx.fillRect(myObstacle.x, myObstacle.y, myObstacle.width, myObstacle.height)
//copy and past everything here at the end
  }
};

function drawCanvas(){
// canvas= document.createElement("canvas");
frames=0;
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
//  if (frame%10 === 0){
 ctx.setLineDash([20, 10]);
//  }else{
//    use this to make line move
//  }
 ctx.moveTo(196, 0);//400-8(linewidth)/2 gives you the right middle position to put it in
 ctx.lineTo(196, 600);
 ctx.lineWidth= 8;
 ctx.stroke();

};

let carImage = new Image()
carImage.src="./images/car.png"

let car ={
  x: 196,
  y: 530
};

function drawCar(){
  ctx.drawImage(carImage,car.x,car.y,40,80)
};

document.onkeydown = function (e){
 switch (e.keyCode){
   //case numbers represent key codes for arrows (38 up 40 down 37 left 39 right)
  case 37:car.x -= 15; break;
  case 38:car.y -= 15; break;
  case 39:car.x += 15; break;
  case 40:car.y += 15; break;
 }  
};
document.onkeyup = function (e){
  car.speedX=0;
  car.speedY=0;
};

let myObstaclesArray =[];

function drawObstacles() {
  for(let i = 0; i < myObstaclesArray.length; i++) {
    myObstaclesArray[i].y += 2//Math.floor(Math.random() * 3)
    ctx.fillStyle=myObstaclesArray[i].color;
    ctx.fillRect(myObstaclesArray[i].x, myObstaclesArray[i].y, myObstaclesArray[i].width, myObstaclesArray[i].height)
  }
}
function updateObstacles() {
  // for (i = 0; i < myObstaclesArray.length; i++) {
  //   myObstaclesArray[i].y += 1;
  //   // myObstaclesArray[i].update()
  // }
  colorArray = ['rgb(242, 123, 182)', 'rgb(117, 168, 244)', 'rgb(254, 250, 117)', 'orange', 'pink', 'rgb(199, 153, 229)']
  
  function Obstacle(){
    this.x=  Math.floor((Math.random()* 280) + 70)
    this.y= 20
    this.width= Math.floor((Math.random() * 80) + 20)
    this.height=30;
    this.color = colorArray[Math.floor(Math.random()*colorArray.length)]
  }

  
  function CreateObstacle() {
    let myObstacle = new Obstacle()
    ctx.fillStyle=myObstacle.color;
    ctx.fillRect(myObstacle.x, myObstacle.y, myObstacle.width, myObstacle.height)
    myObstaclesArray.push(myObstacle);
  }


  drawCanvas.frames += 1;
  // if (drawCanvas.frames % 10 === 0) {
  //   var y = drawCanvas.canvas.height;
  //   var minWidth = 70;
  //   var maxWidth = 280;
  //   var width = Math.floor(
  //     Math.random() * (maxWidth - minWidth + 1) + minWidth
  //   );
  //   var minGap = 50;
  //   var maxGap = 200;
  //   var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
  //   myObstaclesArray.push(new Obstacle(10, width, "red", 0, y));
  //   myObstaclesArray.push(
  //     new Obstacle(10, y - width - gap, "red", y, width + gap)
  //   );
  // }
  setInterval(() => {
    CreateObstacle();
  }, 2000)
  
}
  function updateCanvas(){//beating heart of app
  //clear everything and redraw it
  ctx.clearRect(0,0,400,600)
  drawCanvas()
  drawCar()
  drawObstacles()
  window.requestAnimationFrame(updateCanvas)//calls itself over and over 
};
// updateCanvas()