window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
}

  function startGame() {
actualizarJuego()
setInterval(()=>{
  const obstaculo = new Obstaculos(10)
    obstaculos.push(obstaculo);
  },5000);
}

const dibujarObstaculos=()=>{
  obstaculos.forEach(obstaculo=>{
    obstaculo.moverse()
    obstaculo.dibujarse()


    if(carro.x <=obstaculo.x &&carro.x + 40 >= obstaculo.x && obstaculo.y>=carro.y){
        alert('GameOver');
    }


  })
}

const obstaculos=[];

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const fondo=new Image()
fondo.src="../images/road.png"

const car=new Image()
car.src="../images/car.png"


class Obstaculos{
  constructor(y){
    this.x=Math.floor(Math.random()*250);
    this.y=y
  }
  dibujarse(){
    ctx.fillRect(this.x, this.y,30,60)
  }

  moverse(){
    if(this.y<700){
      this.y += 5
    }
  }
}

      class Carro{
        constructor(x,y,w,h,car){
            this.x=x
            this.y=y
            this.w=w
            this.h=h
            this.car=car
        }

        dibujarse(){
          ctx.drawImage(this.car,this.x, this.y,this.w,this.h)
        }

          derecha(){
            console.log("Derecha")
            if(this.x<440){
              this.x += 1
            }
          }

          izquierda(){
            console.log("Izquierda")
            if(this.x>=0){
              this.x -= 1
            }
            
          }

      }

      const carro = new Carro(220, 500, 60, 150,car)
     
document.addEventListener("keydown", (evento)=>{
  //console.log(evento.key)
  switch(evento.key){
    case "ArrowRight":
      carro.derecha()
      break;
      case "ArrowLeft":
        carro.izquierda()
        break;
  }
})

/////
function actualizarJuego(){
   ctx.clearRect(0,0,500, 700)
   ctx.drawImage(fondo, 0,0,500,700)
carro.dibujarse()
dibujarObstaculos()
 requestAnimationFrame(actualizarJuego);
}








    
   

