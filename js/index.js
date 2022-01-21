const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let frames = 0;
let requestId;

const muros = []

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};


function startGame() {
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // fondo.draw()
  //if(requestId) return 
  
  //requestedId = setInterval(updateCanvas, 1000 / 60);
  requestId = requestAnimationFrame(updateCanvas)
}

// Sección de clases
class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "images/road.png"
  }

  // Métodos
  draw() {
    this.y ++;
    if(this.y > canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x ,
      this.y - this.height, //coloca la imagen seguida de la primera
      this.width,
      this.height
  )
  }

  gameOver(){
    ctx.font = "88px Arial"
    ctx.fillText("ouch",150,150)
  }
}

class Car{
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "images/car.png"
  }
//metodos
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
    
  }
  collition(item){
    return(
        this.x < item.x + item.width &&
        this.x + this.width > item.x &&
        this.y < item.y + item.heigth &&
        this.y +this.heigth > item.y
    )
}
}

class Muro{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = canvas.width-200
    this.height = 50
  }
  draw(){ 
    ctx.fillStyle="#870007"
    ctx.fillRect(this.x,this.y,this.width,this.height)
    this.y +=1; //+= para velocidad progresiva
      if (this.y > canvas.height) {
          this.y = 0;
      }

  }
  
}
// Sección de Instancias
const fondo = new Background();
const carro = new Car (224,618,50,80 )


function updateCanvas() {
  frames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  fondo.draw()
  carro.draw()
  generateMuros()
  drawMuros()
  if(requestId){
    requestId = requestAnimationFrame(updateCanvas)
  }
  // function score(){
  //   const puntos = Math.round(frames/25)
  //   ctx.fillStyle="black"
  //   ctx.font = '25px Arial';
  //   ctx.fillText(`Score ${puntos}`, 10, 25);
  // }
  
}
function generateMuros(){
  //en que intervalo quiero que se genere mi wall
  if(frames % 700 === 0 || frames % 500 === 0){
    let x = Math.floor(Math.random() * ((canvas.width-240-40)-20)) + 40
    const muro = new Muro(x,0)
    muros.push(muro)
    console.log(muro)
}
}

function drawMuros(){
  muros.forEach((muro,index_muros) =>{
    muro.draw()
  })
  
  if(carro.collition(muro)){
    console.log("jeje")
    requestId = undefined
    fondo.gameOver()
 }
}

addEventListener('keydown', (event) =>{
 
  if(event.keyCode === 37){
    if (carro.x > 10){
      carro.x -=15  
    }
    
  }
  if(event.keyCode === 39){
    if (carro.x < 435){
      carro.x +=15  
    }
    
  }

})