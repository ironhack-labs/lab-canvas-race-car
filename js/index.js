const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


const loadedImages = {}

const imageLinks = [ //Array de objetos con los enlaces (y los nombres para identificarlos) de todas mis imagenes
  {link: "./images/road.png", name: 'road'},
  {link: "./images/car.png", name: 'car'},
]

let counterForLoadedImages = 0; //Contador de imagenes cargadas

imageLinks.forEach((imagen)=>{ //Itero sobre todos los enlaces dentro del array de imageLinks. Cada enlace lo voy a recibir dentro del loop en el parámetro de url
  const img = new Image() //Creo un objeto de una imagen (paso 1 para crear una imagen en canvas)
  img.src = imagen.link //Le asigno el url (paso 2 para crear una imagen en canvas)
  img.onload = ()=>{ //Ejecuto el callback function cuando la imagen haya cargado (paso 3)
    counterForLoadedImages++ //Le sumo uno a el contador de imagenes cargadas. Esta linea solo se va a ejecutar cuando la imagen haya cargado
    // loadedImages[imageLinks.name] = imagen.url
    loadedImages[imagen.name] = img
    if(imageLinks.length === counterForLoadedImages){ //reviso si el contador es igual a el numero de urls que tengo en el array de imageLinks. Si es igual, significa que todas mis imagenes han cargado, y por lo tanto, veré el console.log() de que todas mis imagenes han cargado
    }
  }
})


//CLASSES
class Car {
  constructor(){ //Car always starts on the same pos
    this.x = 223
    this.y = 565
    this.speedX = 0
    this.width = 50
    this.height = 110
  }
}

const car = new Car()

//obstacles --------------------------- (bubbles :)  )
class Obstaculo {
  constructor(){
    // this.eaten = false;
    this.x = Math.random() * (canvas.width)/2;
    this.y = 0; 
    this.width = 250;
    this.height = 25;
    this.speed = 1;  
  }

  drawObstaculo(){
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}


let ObstaculosArray = []

const createObstaculos = setInterval(()=>{
  ObstaculosArray.push(new Obstaculo())
}, 2500)



const updateObstaculos = ()=>{
  ObstaculosArray.forEach((Obstaculo)=>{
    Obstaculo.speed = 1.5
    Obstaculo.y += Obstaculo.speed
  })
}


const drawObstaculos = ()=>{
  ObstaculosArray.forEach((Obstaculo)=>{
    ctx.fillRect(Obstaculo.x, Obstaculo.y, Obstaculo.width, Obstaculo.height);
  })
}



//EVENT LISTENERS

document.addEventListener('keydown', (event)=>{
  if(event.key === "ArrowRight"){
    car.speedX = 3
  } else if(event.key === "ArrowLeft"){
    car.speedX = -3
  } 
  })

document.addEventListener('keyup', (event)=>{
  if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
    car.speedX = 0
  }
})



//FUNCTIONS
const drawRoad = ()=> {
  ctx.drawImage(loadedImages.road, 0, 0, 500, 700)
}

const drawCar = ()=>{
  ctx.drawImage(loadedImages.car, car.x, car.y, car.width, car.height)
}

const updateCar = ()=>{
  car.x += car.speedX
  checkIfInBounds()
}

const checkIfInBounds = ()=>{
  if(car.x > 405){
    car.x = 405
  }

  if(car.x < 50){
    car.x = 50
  }
}


const clearCanvas = ()=>{
  ctx.clearRect(0, 0, 500, 700)
}



//SATART GAME------

window.onload = () => { //When the game loads
  document.getElementById('start-button').onclick = () => { //Target start button and initiate the game
    startGame()
  }
}

const startGame = ()=>{ 
  if(imageLinks.length === counterForLoadedImages){ 
    clearCanvas()

    drawRoad()

    drawCar()
    updateCar()

    drawObstaculos()
    updateObstaculos()
  }
  requestAnimationFrame(startGame)
}
