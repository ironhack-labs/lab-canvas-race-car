const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d")

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const obstacles = []
const background = new Image()
background.src = "/images/road.png"

const carImg = new Image()
carImg.src = "/images/car.png"


class Car {
  constructor(){
      this.position = {
          x: 220,
          y:400
      }
      this.velocity = {
          x:0,
          y:0
      }
      this.w = 50,
      this.h = 80,
      this.img = carImg
      }


draw(){
  ctx.drawImage(this.img, this.position.x, this.position.y,  this.w, this.h)
}
update(){
  car.draw()
  this.position.y += this.velocity.y
  this.position.x += this.velocity.x

}
}

const car = new Car()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
  }
    
  class Obstacle {
    constructor(x, y, w, h) {
      this.position = {
        x: x,
        y: y
      };
      this.w = w;
      this.h = h;
    }
  
    draw() {
      ctx.fillRect(this.position.x, this.position.y, this.w, this.h);
    }
  
    update() {
      this.position.y += 1
      this.draw();
    }
  }




document.addEventListener("keydown", (event) => {
   
  switch (event.key) {
      case "ArrowRight":
          keys.right.pressed = true
          break;

      case "ArrowLeft":
          keys.left.pressed = true
          break;

      case "ArrowUp":
       
          break;

      case "ArrowDown":
          break;

      case " ":
         
          break
  }
 
})
document.addEventListener("keyup", (event) => {
  
  switch (event.key) {
      case "ArrowRight":
          keys.right.pressed = false
          break;
      case "ArrowLeft":
         keys.left.pressed = false
          break;
      case "ArrowUp":
        
          
          break;
      case "ArrowDown":
          
          break;
      case " ":
          
          break
  }
 console.log(keys.pressed)

})

let btn = document.getElementById("start-button")
btn.addEventListener("click", () => {
    startGame()
   
  
  
})

const barrier = new Obstacle(x,y,w,h)
  let x = Math.random() * 500;
  let y = 0;
  let w = 50;
  let h = 50;

  
setInterval(() => {
  obstacles.push(createObstacle());

  obstacles.forEach((obstacle) => {
    obstacle.update();
  });
}, 2000);

function startGame(){
  setInterval(() => {
  
     ctx.clearRect(0, 0, 500, 700)
      car.update()
      
    

      if (car.position.x < 400 && keys.right.pressed) {
        car.velocity.x = 5}
        else if (car.position.x > 60 && keys.left.pressed) {
            car.velocity.x = -5
        }
        else car.velocity.x = 0
})

setInterval(() => {
  obstacles.push(createObstacle());

  obstacles.forEach((obstacle) => {
    obstacle.update();
  });
}, 2000);


}


