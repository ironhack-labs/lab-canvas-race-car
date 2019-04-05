document.getElementById("start-button").onclick = function() {
  startGame();
}
let currentPosition = 325;
let i = 0;
let j = 0
const myCanvas= document.getElementById('game-board');
const ctx =  myCanvas.getContext('2d');
const carImage = new Image();
carImage.src = "./images/car.png";



  function clear() {
    ctx.clearRect(0 ,0, 700, 900)
  }


  function draw(){            
    //green rect
    ctx.fillStyle = 'green'
    ctx.fillRect(0, 0, 700, 900);

    // grey rect
    ctx.fillStyle = 'grey'
    ctx.fillRect(50, 0, 600, 900);

    //border white lines
    ctx.setLineDash([15,0]);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(75,0);
    ctx.lineTo(75,900);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(625,0);
    ctx.lineTo(625,900);
    ctx.stroke();

   

    // ctx.setLineDash([15, 15]);
    // ctx.beginPath();
    // ctx.moveTo(350,0);
    // ctx.lineTo(350,900);
    // ctx.stroke();
      
    //put car    
    
    //midle line
   
    }
    // midle line
    function drawLine() {
      ctx.setLineDash([15, 15]);
      ctx.beginPath();
      ctx.moveTo(350, i);
      ctx.lineTo(350,i + 900);
      i+=5
      ctx.moveTo(350, i -900);
      ctx.lineTo(350,i + 0);

      if (i===900){
          i=0
      }
      ctx.stroke()
      ctx.closePath()
    }
   function drawCar(){
    ctx.drawImage(carImage, currentPosition, 800, 50, 100);
   }

   function drawObstacle() {
    ctx.fillStyle = 'black'
    ctx.fillRect(200, j, 250,100)
    ctx.fillRect(300, j-600, 250,100)
    j+=5
    
    }
   

   
    // ctx.moveTo(350, i);
    // ctx.lineTo(350,i + 900);
    // i+=5
    // ctx.moveTo(350, i -900);
    // ctx.lineTo(350,i + 0);

    // if (i===900){
    //     i=0
    // }
    // ctx.stroke()
    // ctx.closePath()
 


 function startGame() {
 function animated() {
  clear();
  draw();
  drawLine();
  drawObstacle()
  drawCar();
  window.requestAnimationFrame(animated)
}
animated();
}

document.onkeydown=function(e){
  console.log(e.keyCode)
  moveCar(e.keyCode)
}
  function moveCar(key) {
  console.log(key)
    switch (key) {
      case 37:
      if (currentPosition > 50){
          currentPosition -= 5;
          ctx.drawImage(carImage, currentPosition, 800, 50, 100);
          break;
      }

      case 39:
      if (currentPosition < 600){
        currentPosition += 5;
        ctx.drawImage(carImage, currentPosition, 800, 50, 100);
        break;
      }
    }
  }

