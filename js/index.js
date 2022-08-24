//canvas
let lienzo = document.getElementById("canvas")
let ctx = lienzo.getContext("2d");

const carRoad = new Image();
carRoad.src = "/images/road.png"

//car
const carImg = new Image();
carImg.src = "/images/car.png"

class Car{
  constructor(x,y,w,h,image){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.image = image;
    this.score = 0;
    this.vidas = 3;
  }
  dibujarse(){
    ctx.fillStyle = "blue";
    //ctx.fillRect(this.x,this.y,this.w,this.h);
    ctx.drawImage(this.image,this.x,this.y,this.w,this.h);
  }
  moverDerecha(){
    if(this.x + this.w < 450){
      this.x += 20;
    } 
    
  }
  moverIzquierda(){
    if(this.x >= 50){
      this.x -= 20;
    }
    
  } 

}

function teclas(carrito){
  document.addEventListener("keydown", (evento) =>{
      console.log("Tecla tocada", evento.code);
      switch(evento.code) {
          case "ArrowRight":
          carrito.moverDerecha();
          break;
          case "ArrowLeft":
          carrito.moverIzquierda();
          break;        
      } 
  })
}

//obstaculos
let obstaculosVarios = [];
class Obstaculos{
  constructor(x,y,w,h){
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
  
  }
  dibujarse(){
      ctx.fillStyle = "red";
      ctx.fillRect(this.x,this.y,this.w,this.h);
      this.y += 4;    
  }
}


function crearObstaculos(){
  const num = Math.floor(Math.random()*220);
  const x = Math.floor(Math.random()*400);
  const w = Math.floor(Math.random()*300);
  if(num === 3 || num === 10) {
      const obstaculos = new Obstaculos(x,100,w,30);
      obstaculosVarios.push(obstaculos);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    
    const carrito = new Car (225,615,40,80,carImg);

    teclas(carrito);

    setInterval(()=>{
      ctx.clearRect(0,0,500,700);
      ctx.fillStyle="green";
      ctx.fillRect(0,0,500,700);
      ctx.drawImage(carRoad,0,0,500,700);
      carrito.dibujarse();
      ctx.fillStyle = "white";
      ctx.font ="24px arial";
      ctx.fillText(`Score: ${carrito.score}`,100,20)
      ctx.fillText (`Vidas: ${carrito.vidas}`,350,20)
      obstaculosVarios.forEach((obstaculo,index)=>{
        obstaculo.dibujarse();
        if(
          carrito.x + carrito.w >= obstaculo.x &&
          carrito.y <= obstaculo.y + obstaculo.h &&
          carrito.x <= obstaculo.x + obstaculo.w
          ){
            obstaculosVarios.splice(index,1);
            carrito.vidas -= 1;

        } else if(obstaculo.y > carrito.y){
          obstaculosVarios.splice(index,1);
          carrito.score += 1;
        }
        
      })

      if(carrito.vidas === 0){
        alert("game over!")
      }
    
      crearObstaculos();
    }, 1000/30)
    


  }
};
