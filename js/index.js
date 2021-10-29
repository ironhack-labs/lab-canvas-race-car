window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let requestID;
let frames = 0;

class Background {
  draw(){
    //BORDE LATERALES VERDES LADO IZQUIERDO
    ctx.fillStyle = "GREEN";
    ctx.fillRect(0,0,20,canvas.height)


    //BORDE LATERALES VERDES LADO DERECHO
    ctx.fillStyle = "GREEN";
    ctx.fillRect(480,0,20,canvas.height)

    //PISTA DE CARRERA
    ctx.fillStyle = "#808080";
    ctx.fillRect(20,0,460,canvas.height)

    //BORDE LATERAL BLANCO LADO IZQUIERDO
    ctx.clearRect(25,0,10,canvas.height);

    //BORDE LATERAL BLANCO LADO DERECHO
    ctx.clearRect(465,0,10,canvas.height);


    // LINEA PUNTEADA DEL CENTRO
    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.setLineDash([10, 15]);
    ctx.moveTo(250, 20);
    ctx.lineTo(250, 850);
    ctx.stroke();
  }

}


//IMAGEN DEL COCHE

class Car{
  constructor(){
    this.x = 225;
    this.y = 580;
    this.width = 50;
    this.height = 90;
    this.image = new Image();
    this.image.src = "../images/car.png"
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }
}


class Obstacules {
  constructor(x,width){
    this.x = x;
    this.y = 10;
    this.width = width;
    this.height = 30;
    this.randomNumber = Math.floor(Math.random()*canvas.width)
  }
  draw(){
    this.y++
    if(this.y >+canvas.height){
      this.y = 0
      this.x = Math.floor(Math.random()* canvas.width)
      this.width = Math.floor(Math.random()* canvas.width)
    }
    //segundo obstáculo
    ctx.fillStyle = "#890000"
    ctx.fillRect(this.x,this.y,this.width,this.height)
    }
}

const background = new Background();
const car = new Car()
const obstacule = new Obstacules(55,100)


function update (){
  frames ++
  background.draw()
  car.draw()
  obstacule.draw()
  requestAnimationFrame(update)
}


update()
addEventListener('keydown', (event) =>{
  if(event.keyCode === 39){
     car.x += 40; 
  }
  if(event.keyCode === 37){
    car.x -= 40; 
 }
})

