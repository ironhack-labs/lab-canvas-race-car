window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    scenary.init('myCanvas'); // 1- tengo que llamar a init para que se cargue el canvas
  };

  // function startGame() {
  //   this.init('myCanvas')
  // }
}


/*---------------OBJETO CANVAS----------------*/


const scenary = {
  title: 'Los autos locos',
  author: 'Inma',
  version: '1.0',
  license: null,
  canvasDOMobj: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  car : new Image (),
  carVel: 15,
  carPosX: 265,
  fps: 60,            
  obstaclesArr: [],     
  framesCounter: 0,
  obstY: 0,

  init: function (id) {
      this.canvasDOMobj = document.getElementById(id)
      this.ctx = this.canvasDOMobj.getContext('2d')
      this.setDimensions() // 2- para que cargue las medidas del canvas
      this.setEventListeners()
      setInterval(()=>{ // 7- ESTO ES SUPER IMPORTANTE!!!!!!
        this.showCar('./images/car.png')
        this.framesCounter ++          
        if(this.framesCounter > 1000) {   //Cada 1000 vueltas lo reiniciamos
          this.framesCounter = 0
        }

        if(this.framesCounter % 200 == 0) { //Cada 200 vueltas pintamos un objeto
          this.generateObstacles()       
        }
      }, 1000/this.fps)
      this.drawObstacles()             
      this.moveAll()          
      this.clearObstacles()       //Limpiamos los obstaculos para no crear un array infinito
  },

  setDimensions: function () {
    this.width = 600
    this.height = 900
    this.canvasDOMobj.setAttribute('width', this.width)
    this.canvasDOMobj.setAttribute('height', this.height)
  },

  drawFilledSquares: function (color,x,y,w,h) { // 3- creo este método para los rectángulos
    this.ctx.fillStyle = color
    this.ctx.fillRect(x, y, w, h)
  },

  drawMultipleLines: function (num, space) { // 5- la línea discontínua móvil
    this.ctx.lineWidth = 8
    this.ctx.strokeSyle = 'white' // no me la coge y no consigo darles alto

    for (let i = space; i <= num * space; i += space) { 
        console.log(i)
        this.ctx.beginPath()
        this.ctx.moveTo(296, i)
        this.ctx.lineTo(304, i)
        this.ctx.stroke()
    }
  },

   resetScreen: function () {
    this.drawFilledSquares('green', 0, 0, 600, 900) // 4- voy llamando el método para crear rectángulos
    this.drawFilledSquares('gray', 60, 0, 480, 900)
    this.drawFilledSquares('white', 70, 0, 15, 900)
    this.drawFilledSquares('white', 515, 0, 15, 900)
    this.drawMultipleLines (1000,80) // 5- creo la línea
    this.obstacles = [] 
   },

  showCar: function (src) { // 6- meto el coche y en init también
    this.car.src = src
    this.ctx.clearRect(0, 0, 600, 900)
    this.resetScreen()
    this.ctx.drawImage(this.car, this.carPosX, 750, 70, 150)

  },

  setEventListeners: function () {
    document.onkeydown = e => {
        e.keyCode === 37 ? this.goLeft() : null
        e.keyCode === 39 ? this.goRight() : null
    }
  },

  goLeft: function() {
  
    this.carPosX -= this.carVel
  },
  
  goRight: function() {
    
      this.carPosX += this.carVel
  },

  /*-------------A POR LOS OBSTÁCULOS!!! ----------------- */


  generateObstacles: function() {
    console.log("se genera obstaculo")
    this.obstaclesArr.push(new Obstacles(0, 900, "red", Math.floor(Math.random() * 100 + 200)), 50)  //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
  },

  drawObstacles: function() {
    this.obstaclesArr.forEach(obstacle => obstacle.draw())  //PIntamos los obstaculos iterando el array
  },

  moveObstacle() {
    this.obstacle.y -= 5
  },

  moveAll: function() {
    this.obstaclesArr.forEach(obstacle => obstacle.moveObstacle()) //Lo mismo para moverlos
  },

  clearObstacles: function() {
    this.obstaclesArr.forEach((obs, idx) => {
      if(obstacle.y < 0)  {this.obstaclesArr.splice(idx, 1)}  //Limpiamos los obstaculos iterando sobre ellos.
    })
  },

}




  class Obstacles {           
    constructor(x, y, color, width, height) {
      this.width = width;
      this.height = height;
      this.color = color;
      this.x = x;
      this.y = y;
    }

    draw() {
      let ctx = Game.ctx;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
  }

