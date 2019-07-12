let Game = {
    title: 'Island Racer',
    author: 'Maria',
    version: '1.0',
    license: null,
    canvas: undefined,
    ctx: undefined,
    fps: 60,
    obstaclesArray: [],
    framesCounter: 0,


    init: function(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = 500
        this.canvas.height = 680
                    
        this.car = new Car(this.ctx, './images/car.png') //cargamos el coche (llamar) NO PINTAR
        
        this.start()           //Llamamos a start: function() que incluye el interval, restart ....
        this.setEventListeners()
    },

   
    drawRoad: function () {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(50, 0, this.canvas.width - 100, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(65, 0, 20, this.canvas.height)
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(415, 0, 20, this.canvas.height)
    },

    drawDiscLine: function() {
        this.ctx.strokeStyle = 'white'
        this.ctx.lineWidth = 10
        this.ctx.setLineDash([40, 20])
        this.ctx.beginPath()
        this.ctx.moveTo(255, 0)
        this.ctx.lineTo(255,this.canvas.height )
        this.ctx.stroke()
    },

    clearScreen: function() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },



    setEventListeners: function() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.car.goLeft() : null       //IZQ cogemos la 'variable' this.car de arriba de new Car y le ponemos el método de la class Car del car.js
            e.keyCode === 39 ? this.car.goRight() : null     //DER
        }
    },


/// OBSTACLES !!!!! ----------


    start: function() {
        this.restart()

        this.interval = setInterval(() => {
            this.clearScreen() 
            this.drawRoad()
            this.drawDiscLine()
            this.car.drawCar() 
            this.obstacle = new Obstacle(this.ctx, 0, 50, 'red', 300, 50)
            this.obstacle.draw()
            this.drawAllObst()
            this.moveAllObst()
            
            this.framesCounter ++

            if(this.framesCounter > 1000) {
                this.framesCounter = 0
            } 
            if(this.framesCounter % 200 == 0) {
                this.generateObst()
            }
            this.clearObst()

        },1000/this.fps)
    },

    restart: function() {
        this.obstaclesArray = []
    },

    drawAllObst: function() {
        this.obstaclesArray.forEach(obstacle => obstacle.draw())  //Pintamos los obstaculos iterando el array
    },

    moveAllObst: function() {
        console.log("entra en mover")
        this.obstaclesArray.forEach(obstacle => obstacle.moveObstacle()) //Lo mismo para moverlos
    },

    generateObst: function() {
        console.log("se genera obstaculo")
        this.obstaclesArray.push(new Obstacle(this.ctx, 0, this.canvas.height, 'blue', 30, Math.floor(Math.random() * 100 + 200)))  //Generamos obstaculos en el array. El math.Random sirve para que tengan diferentes tamanios.
    },
    
    clearObst: function() {
        this.obstaclesArray.forEach((obs, idx) => {
        if(obs.x < 0)  {this.obstaclesArray.splice(idx, 1)}  //Limpiamos los obstaculos iterando sobre ellos.
        })
    },
}