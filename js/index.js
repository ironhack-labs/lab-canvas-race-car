//obtener canvas
const canvas = document.getElementById("canvas")
//set up context
const ctx = canvas.getContext("2d")

let frames = 0;
let requestID;
const muros = []
//const puntos = Math.round(frames/5)
//const puntos


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    
    startGame();
  };
  
}

function startGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
    requestID = requestAnimationFrame(updateCanvas)
}


class Background {
  constructor() {
      this.x = 0;
      this.y = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.image = new Image();
      this.image.src = "images/road.png"
  }

  draw() {
      this.y+=10;
      if (this.y > canvas.height) {
          this.y = 0;
      }
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      //colocamos una segunda imagen
      ctx.drawImage(this.image, this.x,this.y - this.height, this.width, this.height)
  }
  gameOver() {
    ctx.font ="80px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.fillText("Game Over",55,160)
    ctx.font ="80px Comic Sans MS"
    ctx.fillStyle = "black"
    ctx.fillText("Game Over",50,155)

    requestID = false
    
    

  } 
}

class Carro{
  constructor(x,y,w,h){
      this.x = x
      this.y = y
      this.width = w
      this.height = h
      this.image = new Image()
      this.image.src = "images/car.png"
  }
  draw(){
    ctx.drawImage(this.image,this.x,this.y,this.width,this.height)
  }

  collision(item) {
      return (
          this.x < item.x + item.width &&
          this.x + this.width > item.x &&
          this.y < item.y + item.height &&
          this.y + this.height > item.y
      )
  }

}  

class Muro{
  constructor(x,y){
    this.x = x
    this.y = y
    this.width = 250
    this.height = 50
  }
  draw(){ 
    ctx.fillStyle="#870007"
    ctx.fillRect(this.x,this.y,this.width,this.height)
    this.y +=5; //+= para velocidad progresiva
      if (this.y > canvas.height) {
          this.y = 0;
      }
  }
}







const fondo = new Background();
const carro = new Carro(canvas.width/2-25,canvas.height-110,50,100)
//const muro = new Muro(40,50);


function updateCanvas() {
  frames++;
  //limpiamos al inicio de la funciones
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  fondo.draw()
  carro.draw()
  score()
  //muro.draw()
  generateMuros()
  drawMuros()

  if (requestID) {
      requestID = requestAnimationFrame(updateCanvas)
  }

}

function generateMuros(){
  
  if (frames % 50 === 0 ) {
    console.log(frames)
        let x = Math.floor(Math.random() * ((canvas.width-250-40)-20)) + 40
        // return Math.floor(Math.random() * (max - min)) + min;
        const muro = new Muro(x,0) 
        muros.push(muro)
        console.log(muro)
    }
}

function drawMuros(){

   muros.forEach((muro,index_muros) =>{
    muro.draw()
    if(muros.length === 4){
        muros.splice(index_muros-1,1)
    }

    if(carro.collision(muro)){
      console.log("me estas tocando")
      requestId = undefined
      fondo.gameOver()
    }
  
    
  })
}

function score(){
  const puntos = Math.round(frames/25)
  ctx.font ="50px Comic Sans MS"
    ctx.fillStyle = "white"
    ctx.fillText(`Score ${puntos}`, 155,65);
    ctx.font ="50px Comic Sans MS"
    ctx.fillStyle = "black"
    ctx.fillText(`Score ${puntos}`, 150,60);
}



addEventListener("keydown", (event) => {
  //izquierda
    if (event.keyCode === 37) {
      if (carro.x <= 40){
        carro.x = 40
      }else{
        carro.x -= 20;
      }
         //creo mas o menos es algo asi solo que lo hace raro haha efectivamente
    }
    //derecha
    if (event.keyCode === 39) {
        if (carro.x >= canvas.width-40-50){
        carro.x = canvas.width-40-50
      }else{
        carro.x += 20;
      }
    }
    //arriba
    // if (event.keyCode === 38) {
    //     carro.y -= 20;
    // }
    // //abajo
    // if (event.keyCode === 40) {
    //     carro.y += 20;
    // }
})