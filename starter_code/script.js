const canvas = document.getElementById("race-canvas");
const ctx = canvas.getContext("2d");

let posicaoXCarro = 115;

let velocidadeObstasculo1 = 0;
let velocidadeObstasculo2 = 0;



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();    
  };

  function startGame() {
// start calling updateCanvas once the image is loaded
   updateCanvas();  
  }
}

//Obstáculos 1
function desenharObstaculo1() {
  ctx.fillStyle = 'black';
  ctx.fillRect(100, velocidadeObstasculo1, 50, 10);
  velocidadeObstasculo1+=0.5;   
  ctx.fillRect(100, velocidadeObstasculo1-500, 40,10);
  velocidadeObstasculo1+=0.3; 
  if(velocidadeObstasculo1 >= 500){
    velocidadeObstasculo1 = 0;
  } 
} 

//Obstáculos 2
function desenharObstaculo2() {
  ctx.fillStyle = 'black';
  ctx.fillRect(200, velocidadeObstasculo2, 30,10);
  velocidadeObstasculo2+=1; 
  ctx.fillRect(200, velocidadeObstasculo2-500, 40,10);
  velocidadeObstasculo2+=0.9; 
  if(velocidadeObstasculo2 >= 500){
    velocidadeObstasculo2 = 0;
  }    
} 

//Imagem de fundo
const img = new Image();
img.src = 'images/pista.png';
img.height = 500;

let backgroundImage = {
  img: img, 
  y: 0,    
  speed: 1,

  move: function() {
    this.y += this.speed;    
  },

  draw: function() {
    ctx.drawImage(this.img,0 , this.y, 289, 500);
      ctx.drawImage(this.img,0, this.y - 500, 289, 500);  
      if(this.y >= 500){
        this.y = 0;
      } 
  },
}

  function updateCanvas() {
  //document.onkeydown = moveCar;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();
  backgroundImage.move();
  ctx.drawImage(imgCar,posicaoXCarro , 400, 50, 50); // trasformar em função
  desenharObstaculo1()
  desenharObstaculo2()  
  requestAnimationFrame(updateCanvas);   
  
}

//Imagem do carro
const imgCar = new Image();
imgCar.src = 'images/car.png';
imgCar.onload = () => {
}

 //Escutando teclas
document.onkeydown = function(e) {  
  moveCar(e);  
}  

//Movendo o carro
function moveCar(e){
  //37 esquerda
  //39 direita
  if(e.keyCode === 37 && posicaoXCarro > 50){    //115
    posicaoXCarro -= 20;
  }   

  if(e.keyCode === 39 && posicaoXCarro < 350){
    posicaoXCarro += 20;
} 



}