const canvas = document.getElementById('canvas');

const c = canvas.getContext('2d');
let deltaX = 0;
car_image = new Image();
car_image.src = './images/car.png';
background_image = new Image();
background_image.src = './images/road.png';

const background = {
  x: 0,
  y: 100,
  h: 900,
  w: 500,
  draw: function(){
    c.drawImage(background_image, this.x, this.y, this.w, this.h)
  }
}

const car = {
  x: 200,
  y: 700,
  h: 150,
  w: 100,
  draw: function () {
    c.drawImage(car_image, this.x, this.y, this.w, this.h)
  }
}

const score = {
  points: 0,
  draw: function () {
    c.font = "30px Arial";
    c.fillStyle = "#000000";
    c.fillText("Score: "+this.points, 200, 50);
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
      c.fillRect(this.x, this.y, this.w, this.h)
  }
  move = () => {
      this.y += 3;
  }
}

console.log(window.location)
let badGuys = []

setInterval(function () {
  badGuys.push(new BadGuy(Math.random() * 400, 100, 200, 50))
  score.points += 10
}, 1500)



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
  function animate() {
    gameInt=requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    score.draw()
    background.draw()
    car.draw()
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
          car.x -= 8
        }
        else{
          car.x = 0
        }
          break;
      case 39:
        if (car.x < 400){
          car.x += 8
        }
        else{
          car.x = 400
        }
          break;
  }
}