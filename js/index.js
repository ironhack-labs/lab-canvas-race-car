window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
};

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

let backgroundImg = new Image()
backgroundImg.src = "./images/road.png"
console.log(backgroundImg)
backgroundImg.onload = () => {
  context.drawImage(backgroundImg, 0, 0, 500, 700)
}


let carImg = new Image()
carImg.src = "./images/car.png"
console.log(carImg)
carImg.onload = () => {
  context.drawImage(carImg, 250, 50, 100, 100)
}

const startGame = () => {
  //movingCar upwards
  let posCar = {
    X: 250,
    Y: 650
  }

  setInterval(() => {
    (() => {
      context.clear(0, 0, 300, 300)
      // context.fill(0, 0, 20, 20)
      console.log("what")

      for (let i = 0; i < arrayOfObstcl.length; i++) {
        const obstcl = arrayOfObstcl[i];
        context.fill(posCar.x, posCar.y, 20, 20)
        posCar.x -= 1
      }
    }, 1000 / 60)
  }
  )

//create Obstacles
  class obstacle {
    constructor(obstclX, obstclY, obstclWidth, obstclHeight){
      this.x = obstclX
      this.y = obstclY
      this.width = obstclWidth
      this.height = obstclHeight
    }
  }

  let obstcl1 = new obstacle(0, 50, 100, 50)
  let obstcl2 = new obstacle(200, 100, 100, 50)
  let obstcl3 = new obstacle(0, 200, 100, 50)

  let arrayOfObstcl = [obstcl1, obstcl2, obstcl3]
  let frameCounter = 0

  //game loop
  //Object falling down of obstacles
  setInterval(() => {
    (() => {
      context.clearRect(0, 50, 80, 150)
      context.fillRect(0, 50, 80, 150)

      for (let i = 0; i < arrayOfObstcl.length; i++) {
        const obstcl = arrayOfObstcl[i];

        context.fillRect(obstcl.x, obstcl.y, 20, 20)
        obstcl.y += 1
      }

      // 2 sec have past
      if (frameCounter % 120 === 0) {
        let newObstcl = new obstacle(200, 100, 100, 50)
      }
      frameCounter += 1
    })
  }, 1000 / 60)

}