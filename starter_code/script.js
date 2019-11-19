let canvas;
let xPos = 175
let yPos = 450
let xObsIzq = 0;
let xObsDer = 0;
let yObsIzq = 0;
let yObsDer = 0;
let largoObsIzq = [100,90,60,130,150,200,230]
let iniObsDer = [140,150,180,230,190,210,130]
let arrayObs = []
let frames = 0;
let intervalId;
let boolUnoyUno


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
      createBoard();
      paintObstacles();

      if (frames % 30 == 0) {
        //console.log('entre')
        if (boolUnoyUno){
          let rndDer = Math.floor(Math.random()*7)
          arrayObs.push([iniObsDer[rndDer], 0, 344 - iniObsDer[rndDer], 30])
          boolUnoyUno = false
        } else {
          arrayObs.push([56, 0, largoObsIzq[Math.floor(Math.random()*6)], 30])
          boolUnoyUno = true
        }
      }
      checkColision()
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
                moveMin(20,0)
                break;
            case 38:
                moveMin(0,20)
                break;
            case 39:
                movePlus(20,0)
                break;
            case 40:
              movePlus(0,20);
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

function paintObstacles(){
  //pinta lo obstaculos
      arrayObs.forEach ( element => {
        //console.log(element[0],element[1],element[2],element[3]);
        element[1] += 10;
        ctx.fillStyle = "blue";
        ctx.fillRect(element[0],element[1],element[2],element[3]);
      })
      
}

function checkColision() {
  //verifica que xPos y yPos no coincida con algun X y Y de los Arreglos
  
  arrayObs.forEach(element => {
    //falta sumar el ancho a xpos para cuando choca con obstaculos del lado derecho
    if (xPos >= element[0] && xPos <= ((element[0] + element[2])-3) && element[1] >= yPos && element[1] <= yPos+100 ) {
      alert('PErdiste !!!')
      //this.alert("perdiste !!!  xPos= " + xPos + " entre = " + element[0] + " y " + ((element[0] + element[2])-3) + ". " + element[1] + " entre yPos " + yPos + " / " + yPos+100)
    }
  })
  }

};

