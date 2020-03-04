window.onload = () => {
  let canvas=document.getElementById("canvas")
  let ctx=canvas.getContext("2d")
  var road= new Image()
  road.src="images/road.png"
  var car=new Image()
  car.src="images/car.png"

  let rectCar= {
    x: 130,
    y: 370,
    width: 20,
    height: 50,
    rightArrowPressed: function() {
      this.x+=10
    },
    leftArrowPressed: function () {
      this.x-=10
    },
    update: function () {
      ctx.drawImage(car, this.x, this.y, this.width, this.height)
    },
    top : function () {
      return this.y
    },
    left: function () {
      return this.x
    },
    bottom: function () {
      return this.y + this.height
    },
    right: function () {
      return this.x + this.width
    },
    crashWith: function (obstacle) {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      );
    }
  }

  class Obstacle{

    constructor(){
      this.x= Math.floor(Math.random() * (125-40+1)+ 40)
      this.y=0
      this.width=100
      this.height=15
    }

    update(){
      ctx.fillRect(this.x, this.y, this.width, this.height)
      this.y+=4
    }
    top() {
      return this.y
    }
    left() {
      return this.x
    }
    bottom() {
      return this.y + this.height
    }
    right() {
      return this.x + this.width
    }
  }


  let obstacleArr=[]
  let frameCounter=0
    document.getElementById('start-button').onclick = () => {
    startGame()
  }


  function startGame() {
    ctx.drawImage(road, 0, 0)
    rectCar.update()
    draw()
  }

  let draw= () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(road, 0, 0)
    frameCounter++
    ctx.font="20px serif"
    ctx.fillText(`score: ${frameCounter}`, 20, 100)
    obstacleArr.forEach((o)=>{
      if (rectCar.crashWith(o)) {
        alert('loser')
      }
      o.update()
    })
    rectCar.update()


    if((frameCounter % 120) === 0){
      obstacleArr.push(new Obstacle())
    }
    window.requestAnimationFrame(draw)

  }

  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 39:
        rectCar.rightArrowPressed();
        break;
      case 37: rectCar.leftArrowPressed(); 
      break;
    }
  }
};