// window.onload = () => {
//   document.getElementById('start-button').onclick = () => {
//     startGame();
//   };

//   function startGame() {}
// };

window.onload = () => {

  //CREATE CANVAS 2D CONTEXT
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = 'maroon'

  //CLASSES

  class Car {
    constructor(){
      this.x = 225;
      this.y = 580;
      this.speed = 0; //2
      this.height = 100;
      this.width = 50;
    }

    updatePosition(){ //3
      this.x += this.speed
    }

    checkForBoundries(){
      if(this.x > 384){
        this.x = 384
      }

      if(this.x < 69){
        this.x = 69
      }
    }
  }

  class Obstacle {
    constructor(){
      this.x = Math.floor(Math.random() * 301) 
      this.y = 0;
      this.speed = 0;
      this.width = 170;
      this.height = 30;
    }
  }

  const car = new Car()

  //VARIABLES
  const CANVAS_WIDTH = canvas.width // 500
  const CANVAS_HEIGHT = canvas.height // 700
  const totalOfImages = 2
  let counterForLoadedImages = 0



  //EVENT LISTENERS
  document.getElementById('start-button').onclick = ()=>{
    startGame();
  };

  document.addEventListener('keydown', (event)=>{ //4
    if(event.key === 'ArrowLeft'){ //6
      car.speed = -3
    } else if(event.key === 'ArrowRight'){
      car.speed = 3
    }
  })

  document.addEventListener('keyup', (event)=>{ //5
    if(event.key === 'ArrowLeft' || event.key === 'ArrowRight'){
      car.speed = 0
    }
  })

  //FUNCTIONS 

  const arrayOfObstacles = []

  const startGame = ()=>{ 
    generateImages()
    updateCanvas()
    const createObstacles = setInterval(()=>{
      arrayOfObstacles.push(new Obstacle())
    }, 1500)
  }

  let roadImage = ''
  let carImage = ''

  const drawImages = (roadImage, carImage)=>{
    ctx.drawImage(roadImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) 
    ctx.drawImage(carImage, car.x, car.y, car.width, car.height)
  }

  const generateImages = ()=>{
    roadImage = new Image()
    carImage = new Image()

    roadImage.src = '../images/road.png'
    carImage.src = '../images/car.png'

    roadImage.onload = ()=>{
      counterForLoadedImages++
      if(counterForLoadedImages === totalOfImages){
        drawImages(roadImage, carImage)
      }
    }

    carImage.onload = ()=>{
      counterForLoadedImages++
      if(counterForLoadedImages === totalOfImages){
        drawImages(roadImage, carImage)
      }
    }
  }

  const updateObstacles = ()=>{
    arrayOfObstacles.forEach((obstacle)=>{
      obstacle.speed = 3
      obstacle.y += obstacle.speed
    })
  }

  const drawObstacles = ()=>{
    arrayOfObstacles.forEach((obstacle)=>{
      ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height)
    })
  }

// "Mala practica" para cragar muchas imagenes 😅
//   const generateImages = ()=>{
//     const roadImage = new Image()
//     roadImage.src = '../images/road.png'
//     roadImage.onload = ()=>{
//       const carImage = new Image()
//       carImage.src = '../images/car.png'
//       carImage.onload = ()=>{
//         ctx.drawImage(roadImage, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) 
//         ctx.drawImage(carImage, CAR_X, CAR_Y, CAR_WIDTH, CAR_HEIGHT)
//       }
//     }
//   }
// }

  const updateCanvas = ()=>{ //1
    car.updatePosition()
    car.checkForBoundries()
    if(counterForLoadedImages === totalOfImages){
      drawImages(roadImage, carImage)
    }
    updateObstacles()
    drawObstacles()
    requestAnimationFrame(updateCanvas) //Activa un loop infinito. Este loop va a la velocidad de la tasa de refresco de la pantalla en la que se está viendo el juego. Le vamos a pasar como argumento la función donde estamos llamando al requestAnimationFrame (en este caso, updateCanvas)
  }


}




//Images
//ctx.drawImage(img,x,y,width,height);

//Dibujar rectangulo
// fillRect(x, y, width, height)

//PASOS PARA CUANDO QUIERO MOVER ALGO EN MI CANVAS

//1. Crear la funcion "master" llamada updateCanvas() que va a ser la encargada de ejecutar el loop infinito a la velocidad de la tasa de refreso de tu monitor (gracias a requestAnimationFrame())
//2. Crear velocidad para el elemento que quiero mover
//3. Crear un metodo en la clase Car que se llame updatePosition() que se encargue de actualizar la posicion del coche teniendo en cuenta el speed
//4. Crear un event listener de keydow para las flechas de derecha e izquierda
//5. Crear un event listener de keyup para que detecte que he dejado de presionar la tecla y me iguale el speed a 0
//6. Sumar o restar al valor de car.speed dependiendo de si has presionado la tecla izquierda o derecha
