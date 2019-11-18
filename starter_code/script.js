let canvas;
let xPos = 175
let yPos = 450
let xObsIzq = 0;
let xObsDer = 0;
let yObsIzq = 0;
let yObsDer = 0;
let largoObs = [100,90,60,130,150,200,230]
let frames = 0;
let intervalId;


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    canvas = document.getElementById("road");
    ctx = canvas.getContext("2d");
    carImagen = document.getElementById('car');
    
    createKeyEvents();

    intervalId = setInterval(()=> {
      frames++;
      yObsIzq += 10
      createBoard();
      ctx.fillStyle = "blue"
      ctx.fillRect(56, yObsIzq, largoObs[Math.floor(Math.random()*6)], 30);
      console.log(Math.floor(Math.random())*6)
      if (frames % 50 == 0) {
        //console.log('entre')
        createObstacles();
      }
      //colision
      //this.draw();
  }, 100)

     
  }

  function createBoard() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "green"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "grey"
    ctx.fillRect(40, 0, 320, 600);
    ctx.fillStyle = "white"
    ctx.fillRect(50, 0, 300, 600);
    ctx.fillStyle = "gray"
    ctx.fillRect(55, 0, 290, 600);
    ctx.fillStyle = "white"

    ctx.beginPath();
    ctx.setLineDash([20,15])
    ctx.lineWidth = 5;
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 600);
    ctx.strokeStyle='white'
    ctx.stroke();

    ctx.drawImage(carImagen,xPos,yPos,50,100)

    

  }

  function createKeyEvents(){
    document.onkeydown = (event) => {
        switch(event.which) {
            case 37:
                moveMin(10,0)
                break;
            case 38:
                moveMin(0,10)
                break;
            case 39:
                movePlus(10,0)
                break;
            case 40:
              movePlus(0,10);
            default:
                break;
        }
    }
}

function movePlus (xMove, yMove){
  xPos += xMove
  yPos += yMove
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createBoard()
  
  //ctx.drawImage(carImagen, xPos, yPos, 50, 100)
}

function moveMin (xMove, yMove){
  xPos -= xMove
  yPos -= yMove
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  createBoard()
  //ctx.drawImage(carImagen, xPos, yPos, 50, 100)
}

function createObstacles(){
  //crea mas obstaculos

}

};

