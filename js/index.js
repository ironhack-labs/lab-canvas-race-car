
const canvas = document.getElementById('canvas'),
//con la variable de arriba tenemos accseso a todas las propiedades de la etiqueta

ctx = canvas.getContext("2d");
let obst = []
let frames = 0
let running = false  ///ver si esta corriendo
let crash = false   /// estado inical para ver si chocó
let velocidad = 3
let score = 0    ///suma de puntaje por avanar en el juego
const canvasWidth = 500
const canvasHeight = 700
const canvasInitX = canvasWidth - canvasWidth
const canvasInitY = canvasHeight-canvasHeight

window.onload = function() {
    document.getElementById('start-button').onclick = () => {
    startGame();
  }




function startGame() {
  //backgroudImg.dibujar()
  backgroudImg.speed = velocidad
  updateCanvas()
}

}


const scoreEl = document.querySelector(".score")
const scoreCount = document.querySelector(".scoreCount")
console.log(scoreCount)
let animationId 

function updateCanvas() {

  backgroudImg.move()
  ctx.clearRect(0,0,500,700)
  backgroudImg.dibujar()
  frames++
  bocho.draw()
  //newPos()  //no se le pone .obst porq es un arregl0
  updateObstacles()
console.log(score)
  obst.forEach((obs,index)=>{
    if(obs.y > bocho.y + bocho.height) {
    
    }

    if(obs.y + obs.height > canvasHeight) {
      obst.splice(index,1)
      score+=1
      scoreCount.innerHTML = score
    }

  })
  checkGameOver(animationId)
  animationId = requestAnimationFrame((updateCanvas)) // Metodo que activa el motor,
  //ejecuta todo lo que este dentro de esta funcion y se invoca 
  //dentro de si mismo y se vuelve infinito
}

//////////////////////////////////
//////DESARROLLO DEL FONDO//////////
////////////////////////////////
//instanciamiento de la imagen para que se vea
const imgRoad = new Image()
imgRoad.src = "./images/road.png"

//para hacer que le fondo se mueva
//
const backgroudImg = {
    img:imgRoad,
    x:0,
    y:0,
    speed:0,
    move: function move() {
      this.y += this.speed    //mientras más velicidad la coor Y tiene que bajar más rápido
      this.y %= canvas.height //se acumula para que no se acabe
    },
    dibujar: function draw() {
      ctx.drawImage(this.img,this.x,this.y,canvas.width,canvas.height)
      ctx.drawImage(this.img,this.x,this.y - canvas.height,canvas.width,canvas.height)
    }
    
}







function stopGame(frame) {

  cancelAnimationFrame(frame)
  console.log(Number(frames))
   ctx.clearRect(0,0,500,700)
   
   
   /*backgroudImg.move()
   backgroudImg.dibujar()
  
  ctx.font ="30px Arial"
  ctx.fillText("Perdiste",250,300)
*/

}

//clase principal para heredar despues 
//El componente son las propiedades básicas para
//despues llevarlas al resto de las clases
class Component {
  constructor(width,height,x,y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
  }

  izquierdo() {
    return this.x
  }

  derecha() {
    return this.x + this.width
  }

  arriba() {
    return this.y
  }

  abajo() {
    return this.y + this.height
  }

  crash(obstacle) { ////RANGOS

    return !(this.abajo()<obstacle.arriba() ||
      this.arriba()>obstacle.abajo() ||
      this.derecha()<obstacle.izquierdo() ||
      this.izquierdo()>obstacle.derecha()
    )
  }
}

class Carro extends Component{
  constructor(width,height,x,y,imgSrc) {
    super(width,height,x,y);
    this.speedX = 0;
    const carRaw = new Image ()
    carRaw. src = imgSrc
    window.addEventListener("load", () =>{
      this.carimg = carRaw //esperar a que cargue el carro
      this.draw()
    })
  }
    //cada clase debe tener un metodo draw por si mismo
  draw() {
    ctx.drawImage(this.carimg,this.x,this.y,this.width,this.height)
  }

  moveLeft() {
    if(this.x <= canvasInitX + 30){
      return this.x = 30
    }
    this.x -=25
  }

  moveRight() {
    if(this.x >= canvasWidth - 90)  {
        return this.x = canvasWidth - 90
      }
    
    this.x +=25
  }
}

  class Obstacles extends Component {
    constructor(width, height, x,y) {
      super(width, height, x,y)
      this.color = "red"
      this.speedY = 0
    }

    draw() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }

    newPos () {
      this.y+=this.speedY
    }
  }

//funciones de actualizacion
function updateObstacles() {
  //cada vez que neceiste bloques usar el modulos
    for(let i = 0; i < obst.length; i++) {
      obst[i].y += velocidad
      obst[i].draw()

  }

  //cada 80 fotogr se genera obst
  if(frames % 80 === 0) {
    let minWidth = 40  //px
    let maxWidth =180 //px
    let width = Math.floor(Math.random() * (maxWidth - minWidth)) + minWidth


    let position = Math.floor(Math.random() * ((canvas.width - width - 25) - (canvasInitY+30)))+(canvasInitY+30)
    obst.push(new Obstacles(width,16,position,0))

  }


  
}
const bocho = new Carro(60,90,225,600,"./images/car.png");
//const ambulace = new Carro(100,150,225,600,"./images/ambulance-icon-cartoon-ambulance.jpg")



////perder si choca
    function checkGameOver(frame) {
      const crashed = obst.some(function (obstacle) {
        return bocho.crash(obstacle);
      });
     
      if (crashed) {
        stopGame(frame);
      }
    }
    

  




addEventListener('keydown', e => {
  switch (e.code) {
    case "ArrowLeft":
      bocho.moveLeft();
      //console.log('left', carro);
      break;
    case "ArrowRight":
      bocho.moveRight();
      //console.log('right', carro);
      break;
  }
  //updateCanvas();
});


/*
////ESTE ES EL MOTOR---BORRA Y PINTA
function updateCanvas(){
    ctx.clearRect(0,0,500,700)
}



window.onload = () => {

    
  };

  let myGameArea = {  
  canvas: document.getElementById('canvas'),
  start:function() {
      this.canvas.width = 500;
      this.canvas.height = 700;
      this.ctx = this.canvas.getContext("2d");
      this.frameNo = 0;
    },
    clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); 
      this.interval = setInterval(updateGameArea, 20);
}}


  function startGame() {
          myGameArea.start()
       




    



class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
  
    ctx = myGameArea.ctx;
 
    // Load the image
    const img = new Image();
    img.addEventListener('load', () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = 'images/road.png';
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 500, 700);
}}
 const calle = new Road();
          const carro = new Carro(); 
const myObstacles = [];





/*function updateCanvas() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.fillText('Carro_x: ' + carro.x, 10, 10);
  ctx.fillText('Carro_y: ' + carro.y,  10, 10);
 
  calle.draw();
  carro.draw();
  

}
  
}*/
