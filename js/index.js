window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    gameBoard.init("canvas")
  }
};

const gameBoard = {
      name: 'Race car game',
      description: 'Race car game',
      license: undefined,
      ctx: undefined,
      canvasDom: undefined,
      canvasSize: {
        w: 500,
        h: 700
      },
      car: undefined,
      obstacle: [],
      keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
      },
      init(id) {
        this.canvasDOM = document.querySelector(`#${id}`)
        this.ctx = this.canvasDOM.getContext('2d')
        this.setEventListeners()
        this.createCar()
        this.drawAll()
        this.createObstacle()
      },
      showBoardImage(imgName) {
        let boardImage = new Image()
        boardImage.src = `images/${imgName}`
        this.ctx.drawImage(boardImage, 0, 0, 500, 700)
      },
      
      setEventListeners() {
        document.onkeyup = e => {
            if (e.key === this.keys.left) {
              if (this.car.carPos.x > 55) {
                this.car.move(-25)
              }
                // console.log(this.car.carPos.x)
            }
            if (e.key === this.keys.right) {
              if (this.car.carPos.x < 405) {
                this.car.move(25)
              }
                // console.log(this.car.carPos.x)
            }
        }
      },
      createCar() {
        this.car = new Car(this.ctx, this.canvasSize, 230, 600, 35, 65)
        // console.log(this.car)
      },
      createObstacle() {
        this.obstacle.push( new Obstacle(this.ctx, this.canvasSize))
        console.log(this.obstacle)
      },
      drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.showBoardImage("road.png")
            this.car.draw()
            //this.obstacle.draw()
        }, 70)
      },
      clearScreen() {
          this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.w)
      },

      
  }

