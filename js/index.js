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
      keys: {
        left: 'ArrowLeft',
        right: 'ArrowRight'
      },
      init(id) {
        this.canvasDOM = document.querySelector(`#${id}`)
        this.ctx = this.canvasDOM.getContext('2d')
        // this.showBoardImage("road.png")
        this.setEventListeners()
        this.createCar()
        this.drawAll()
        // this.showCarImage("car.png")
      },
      showBoardImage(imgName) {
        let boardImage = new Image()
        boardImage.src = `images/${imgName}`
        this.ctx.drawImage(boardImage, 0, 0, 500, 700)
      },
      // showCarImage(imgName) {
      //   let carImage = new Image()
      //   carImage.src = `images/${imgName}`
      //   const carWidth = 35
      //   let xOffset = carWidth < this.canvasSize.w ? ((this.canvasSize.w - carWidth) / 2) : 0;
      //   carImage.onload = () => this.ctx.drawImage(carImage, xOffset, 600, carWidth, 65)
      // },
      
      setEventListeners() {
        document.onkeyup = e => {
            if (e.key === this.keys.left) {
              if (this.car.carPos.x > 35) {
                this.car.move(-15)
              }
                // console.log(this.car.carPos.x)
            }
            if (e.key === this.keys.right) {
              if (this.car.carPos.x < 425) {
                this.car.move(15)
              }
                // console.log(this.car.carPos.x)
            }
        }
      },

      createCar() {
        this.car = new Car(this.ctx, this.canvasSize, 230, 600, 35, 65)
        // console.log(this.car)
      },

      drawAll() {
        setInterval(() => {
            this.clearScreen()
            this.showBoardImage("road.png")
            this.car.draw()
        }, 70)
      },

      clearScreen() {
          this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.w)
      }

  }

