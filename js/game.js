const game = {
      name: 'Race car game for HTML5 canvas',
      author: 'Héctor Antón',
      version: '1.0',
      description: 'Juego donde el usuario controla un coche evitando obstaculos aleatorios',
      license: undefined,
      //INFO canvas
      canvasDom: undefined,
      ctx: undefined,
      canvasSize: {
            width: 500,
            height: 700
      },
      //Propiedades del status del juego
      isplaying: false,
      isGameOver: false,
      //OBJETOS del juego
      car: undefined,
      obstacles: [],
      //Gestión del tiempo
      timer: 0,
      deltaTime: 20,
      //Medidas útiles
      roadWidth: 420,
      grassWidth: 40,
      //Puntuación
      score: 0,

      intervalId: 0,

      //Método de inicialización
      start(id) {
            //Se actualiza el status del juego
            this.isplaying = true
            this.isGameOver = false

            this.canvasDom = document.getElementById(id)
            this.ctx = this.canvasDom.getContext('2d')

            //Player
            this.car = new Car(this.ctx, this.canvasSize, 'car.png')

            //Se asegura de que la lista de obstaculos esté vaccía
            this.obstacles = []

            //Se reinicia la puntuación
            this.score = 0

            //Se reinicia el timer
            this.timer = 0

            //bucle
            this.intervalId = setInterval(() => {
                  this.update()
            }, this.deltaTime)
            //EventListener de teclado
            this.setEventListeners()
      },
      //Método actualización del juego
      update() {
            this.clearScreen()
            if (this.isplaying) {
                  this.drawRoad()
                  this.car.update()
                  this.updateObstacles(this.timer)
                  this.updateScore()
                  this.timer += this.deltaTime
            } else if (this.isGameOver) {
                  this.showGameOver()
            }
      },
      //Eventos de teclado
      setEventListeners() {
            document.onkeydown = e => {
                  e.keyCode === 37 ? this.car.move('left') : null
                  e.keyCode === 39 ? this.car.move('right') : null
            }
      },
      //Dibujo del área de juego
      drawRoad() {
            //Se dibuja el cesped y la carretera
            this.ctx.fillStyle = 'forestgreen'
            this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
            this.ctx.fillStyle = 'lightslategray'
            this.ctx.fillRect(this.grassWidth, 0, this.roadWidth, this.canvasSize.height)
            //Se dibujan las líneas laterales
            this.ctx.strokeStyle = 'snow'
            this.ctx.lineWidth = 12
            this.ctx.beginPath()
            this.ctx.moveTo(60, 0)
            this.ctx.lineTo(60, this.canvasSize.height)
            this.ctx.moveTo(this.canvasSize.width - 60, 0)
            this.ctx.lineTo(this.canvasSize.width - 60, this.canvasSize.height)
            this.ctx.setLineDash([0, 0])
            this.ctx.stroke()
            //Se dibuja la línea discontinua
            this.ctx.lineWidth = 6
            this.ctx.setLineDash([30, 30])
            this.ctx.moveTo(this.canvasSize.width / 2, 5)
            this.ctx.lineTo(this.canvasSize.width / 2, this.canvasSize.height)
            this.ctx.stroke()
      },

      updateObstacles(timer) {
            //Cada 5 segundos crea un nuevo obstaculo y lo añade al final del array
            timer % 5000 === 0 ? this.obstacles.push(new Obstacle(this.ctx, this.canvasSize, this.roadWidth, this.car.width, this.grassWidth)) : null

            //Llama al método update() de cada obstaculo
            this.obstacles.forEach(elm => elm.update())

            //Comprobación de colisiones con el coche
            this.checkCollisions()

            //Si el primer obstaculo se ha salido de la pantalla se elimina
            this.obstacles[0].posY > this.canvasSize.height ? this.obstacles.shift() : null
      },
      clearScreen() {
            this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height)
      },
      checkCollisions() {
            //Se comprueban las colisiones por los cuatro lados
            this.obstacles.forEach(elm => {
                  if (this.car.posX + this.car.width > elm.posX &&
                        this.car.posX < elm.posX + elm.width &&
                        this.car.posY + this.car.height > elm.posY &&
                        this.car.posY < elm.posY + elm.height) {
                        this.isplaying = false
                        this.isGameOver = true
                  }
            })
      },

      //Actualiza la posición y la pinta por pantalla; cada segundo conseguirá 1 punto
      updateScore() {
            this.timer % 1000 === 0 ? this.score++ : null
            this.ctx.font = 'bold 20px sans-serif'
            this.ctx.fillStyle = 'maroon'
            this.ctx.textAlign = 'start'
            this.ctx.fillText(`SCORE: ${this.score}`, 10, 50)
      },
      //Pinta la "pantalla" de Game Over
      showGameOver() {
            this.ctx.fillStyle = 'darkslategray'
            this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height)
            //Text: GameOver
            this.ctx.font = 'bold 50px sans-serif'
            this.ctx.fillStyle = 'orangered'
            this.ctx.textAlign = 'center'
            this.ctx.fillText('Game Over!', this.canvasSize.width / 2, 150)
            //Text: Final score...
            this.ctx.font = 'bold 50px sans-serif'
            this.ctx.fillStyle = 'snow'
            this.ctx.fillText('Your final Score', this.canvasSize.width / 2, 250)
            //Text: SCORE
            this.ctx.font = 'bold 80px sans-serif'
            this.ctx.fillStyle = 'tomato'
            this.ctx.fillText(`- ${this.score} -`, this.canvasSize.width / 2, 350)
            //Text: try again?
            this.ctx.font = 'bold 20px sans-serif'
            this.ctx.fillStyle = 'snow'
            this.ctx.fillText(`Click 'StartGame' to try again`, this.canvasSize.width / 2, 400)
            //Se cancela el interval para que no cause probelma el haber varios si el jugador repite 
            clearInterval(this.intervalId)
      }

}
