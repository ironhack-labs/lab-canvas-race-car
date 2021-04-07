// window.onload = () => {
// }
const canvas = document.getElementById('canvas');

const c = canvas.getContext('2d');
let deltaX = 0;
car_image = new Image();
car_image.src = '/ironHack/lab-canvas-race-car/images/car.png';
background_image = new Image();
background_image.src = '/ironHack/lab-canvas-race-car/images/road.png';

const background = {
  x: 0,
  y: 0,
  h: 500,
  w: 900,
  draw: function(){
    c.drawImage(background_image, this.x, this.y, this.h, this.w)
  }
}

const car = {
  x: 200,
  y: 700,
  h: 100,
  w: 150,
  draw: function () {
  c.drawImage(car_image, this.x, this.y, this.h, this.w)
  }
}

class BadGuy {
  constructor(x, y, w, h) {
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${Math.random() * 255}`
  }
  draw = () => {
      c.fillStyle = this.color
      //ctx.fillRect(this.x, this.y, this.h, this.w)
      c.fillRect(this.x, this.y, this.h, this.w)
  }
  move = () => {
      this.y += 5;
  }
}


let badGuys = []


setInterval(function () {
  badGuys.push(new BadGuy(Math.random() * 400, 0, 50, 200))
  score += 1
}, 1000)
document.querySelector('#start-button').onclick = () => {
  function detectCollision(rect1, rect2) {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.y + rect1.h > rect2.y) {
        // collision detected!
        console.log("COLLISION")
        cancelAnimationFrame(gameInt)
        alert("GAME OVER")
    }
  }
  
let gameInt = null;
let score = 0;
function animate() {
  gameInt=requestAnimationFrame(animate)
  c.clearRect(0,0,canvas.width,canvas.height)
  c.fillText(score, 0, 0, 200, 100)
  background.draw()
  car.draw()
  setInterval
  badGuys.forEach(eachBadGuy => {
    eachBadGuy.move()
    eachBadGuy.draw()
    detectCollision(car, eachBadGuy)
})
}
animate()
}

window.addEventListener("keydown", moveSomething, false);
function moveSomething(e) {
  switch(e.keyCode) {
      case 37:
        if (car.x > 0){
          car.x -= 4
        }
        else{
          car.x = 0
        }
          break;
      case 39:
        if (car.x < 400){
          car.x += 4
        }
        else{
          car.x = 400
        }
          break;
  }
}