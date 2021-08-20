window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
drawRoad()
  
};

function startGame() {
  let cont = 0;
  getCar()

  setInterval(() => {
    cont++;

    ctx.clearRect(0, 0 , 500, 700)
    drawRoad()
    getCar();
    if(cont % 120 === 0) {
      cont = 0;
      obstArr()
      console.log('fail');
    }
  }, 1000/60)
}



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

function getCar() {
  let car = new Image()

  car.src = "images/car.png"

  let carY = 540

  ctx.drawImage(car, ghost.x, carY, 80, 160 )
}

let speed = 2
let ghost = {
x : 210,
moveLeft:  function() {if(this.x>60) this.x -= 25 },
moveRight: function() { if(this.x<440)this.x += 25 },
}

document.onkeydown = function(e) {
  switch (e.key) {
    case 'ArrowLeft': ghost.moveLeft(); 
    console.log(ghost.x); 
     break;
    case 'ArrowRight': ghost.moveRight(); 
    console.log(ghost.x);
     break;
  }
}
//NO SE COMO METER COSAS EN EL ARRAY 

function obstArr () {
  arr =[]
  arr.push()
  

  ctx.fillStyle = ('#86120A')
  ctx.fillRect(arr[0], 0, arr[1], arr[2])
}


function obstacules(){
  let arisX = Math.random()* (500-120)
  let arisY = 0
  let widthX = Math.random()*(500-120)
  let heightY = 40
  let randomObs = ctx.fillRect(arisX, arisY, widthX, heightY )
  return randomObs
}

function drawRoad() {
  ctx.fillStyle = ('#0AB22E')
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = ('#969B97')
  ctx.fillRect(40, 0, 420, 700 )
  ctx.strokeStyle = ('#FFFFFF')
  ctx.lineWidth = 10.0
  ctx.beginPath()
  ctx.moveTo(60, 0)
  ctx.lineTo(60, 700)
  ctx.stroke()
  ctx.closePath()
  ctx.fillStyle = ('#FFFFFF')
  ctx.lineWidth = 10.0
  ctx.beginPath()
  ctx.moveTo(440, 0)
  ctx.lineTo(440, 700)
  ctx.stroke()
  ctx.closePath()
  ctx.fillStyle = ('#FFFFFF')
  ctx.lineWidth = 10.0
  ctx.setLineDash([50, 30])
  ctx.beginPath()
  ctx.moveTo(250, 0)
  ctx.lineTo(250, 700)
  ctx.stroke()
  ctx.closePath()
}
