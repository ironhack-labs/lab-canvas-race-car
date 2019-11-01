confirm("3, 2, 1...PARTY!! ");

window.onload = function () {

  const game = {
    title: 'Canvas RaceCar',
    author: 'Sandra & Jessica',
    license: undefined,
    version: '1.0',
    canvasDom: undefined,
    ctx: undefined,
    obstacles: [],
    frames: 1,
    startGame(id) {

      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext('2d')

      this.setDimensions()
      this.drawControlledCar("car.png")
      this.setEventListeners()
      this.backgrounds()
      this.manageObstacles()

    },

    drawControlledCar(name) {
      this.car = new Car(this.ctx, name)
      setInterval(() => {
        this.clearScreen()
        this.backgrounds()
        this.car.draw()
        this.manageObstacles()
      }, 10)
    },
    clearScreen() {
      this.ctx.clearRect(190, window.innerHeight - 120, 60, 90)
    },


    setDimensions() {

      document.getElementsByTagName('body')[0].style.margin = 0

      //Propiedades de Canvas
      this.canvasDom.setAttribute('height', window.innerHeight)
      this.canvasDom.setAttribute('width', 400)
    },


    backgrounds() {
      this.backgroundGreen()
      this.backgroundGrey()
      this.backgroundLine()
      this.backgroundDash()

    },

    backgroundGreen() {
      this.ctx.fillStyle = 'green'
      this.ctx.fillRect(0, 0, 375, window.innerHeight);
    },

    backgroundGrey() {
      this.ctx.fillStyle = 'grey'
      this.ctx.fillRect(25, 0, 325, window.innerHeight);
    },

    backgroundLine() {
      this.ctx.strokeStyle = 'white'
      this.ctx.lineWidth = 8;
      this.ctx.setLineDash([0, 0])

      this.ctx.beginPath()
      this.ctx.moveTo(35, 0)
      this.ctx.lineTo(35, window.innerHeight)

      this.ctx.moveTo(340, 0)
      this.ctx.lineTo(340, window.innerHeight)
      this.ctx.stroke()
    },

    backgroundDash() {
      this.ctx.beginPath()
      this.ctx.setLineDash([40, 80])
      this.ctx.moveTo(190, 0)
      this.ctx.lineTo(190, window.innerHeight)
      this.ctx.stroke()
    },



    setEventListeners() {
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            this.car.goLeft()
            break
          case 39:
            this.car.goRight()
            break
        }
      }
    },

    manageObstacles() {
      let random = Math.floor(Math.random() * 390)
      for (let i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].update()
      }

      this.frames += 1

      if (this.frames % 50 === 0) {
        console.log(this.obstacles)
        this.obstacles.push(new Obstacle(this.ctx, random, 20, random, 0))
      }

    }
    


  }


  document.getElementById("start-button").onclick = function () {
    game.startGame("myCanvas")

  }

};


