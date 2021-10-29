window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  
  function startGame() {
    setInterval(()=>{
     app.clearScreen()
     app.drawBoard()
     app.setListeners()
     app.insertImage ()
    },1000/20)
    
    
  }
  
  const app = {
    ctx: undefined,
    canvasDom: undefined,
    canvasSize:  { width: undefined, height: undefined },
    carX: 220,

  drawBoard () {
    
  const canvas = document.getElementById('canvas');
  const ctx= canvas.getContext('2d');
  ctx.fillStyle="green";
  ctx.fillRect(20,20,500,700);
  ctx.fillStyle="grey";
  ctx.fillRect (60,20,400,700);
  ctx.fillStyle="white";
  ctx.fillRect (70,10,20,700);
  ctx.fillRect (430,0,20,700);

  ctx.strokeStyle="white";
  ctx.lineWidth = 10;
  ctx.setLineDash([30, 15]);
  ctx.beginPath();
  ctx.moveTo(250, 10);
  ctx.lineTo(250, 700);
  ctx.stroke();
  ctx.closePath();
  },

  insertImage () {
  const canvas = document.getElementById('canvas');
  const ctx= canvas.getContext('2d');
  const pos = this.carX;
  let imageCar = new Image();
  imageCar.src="images/car.png";
  imageCar.onload = function () {
  ctx.drawImage (imageCar,pos,560, 60,100);
  }
},


    
setListeners() {
const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
  document.onkeydown = e => {
    e.key === 'ArrowLeft' ? this.moveLeft() : null
    e.key === 'ArrowRight' ? this.moveRight() : null
  }
},

clearScreen() {
const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
  },

moveLeft() {
const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
        this.carX -= 5
  },

moveRight() {
const canvas = document.getElementById('canvas');
const ctx= canvas.getContext('2d');
     this.carX += 5
  },

drawObst () {
ctx.strokeStyle="red";
ctx.lineWidth = 10;
ctx.setLineDash([30, 15]);
ctx.beginPath();
ctx.moveTo(250, 10);
ctx.lineTo(250, 700);
ctx.stroke();
ctx.closePath();
  },
  
} 
  
};