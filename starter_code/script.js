var canvas = document.querySelector('#canvas')
var ctx = canvas.getContext('2d');

const images = {
  img1: './images/car.png',
  img2: 'https://www.pinclipart.com/picdir/middle/111-1114991_man-walking-clip-art-png-download.png',
  img3: 'https://www.clipartmax.com/png/middle/261-2613051_temporary-lot-garage-closures-barrier-icon.png',
  img4: 'https://png.pngtree.com/element_pic/00/16/07/165789a95245e1f.jpg',
  img5: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCgdZ_6XOYf5UdY1f2kVb-gB8AHasW_5tkrkqkyo4mzfe0eNJ',
  img6: './images/truck-png.jpg'
}

class RaceTrack {
  constructor() {
    this.y = 0
    this.drawRaceTrack()
  }
  drawRaceTrack() {
    this.y += 10
    //ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = "gray";
    ctx.fillRect(20, 0, 260, 500)

    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 20, 500)

    ctx.fillStyle = "green";
    ctx.fillRect(280, 0, 20, 500)

    ctx.fillStyle = "white"; // end 30
    ctx.fillRect(25, 0, 5, 500)

    ctx.fillStyle = "white";  // begins 270
    ctx.fillRect(270, 0, 5, 500)

    for (let i = 0; i < 17; i++) {
      ctx.beginPath()
      ctx.lineWidth = 5
      ctx.strokeStyle = "white";
      ctx.moveTo(150, i * 30 + 21 + this.y)
      ctx.lineTo(150, i * 30 + 40 + this.y)
      ctx.stroke()
      ctx.closePath()
    }

    for (let i = 0; i < 16; i++) {
      ctx.beginPath()
      ctx.lineWidth = 5
      ctx.strokeStyle = "white";
      ctx.moveTo(150, i * 30 + 21 - 500 + this.y)
      ctx.lineTo(150, i * 30 + 40 - 500 + this.y)
      ctx.stroke()
      ctx.closePath()
    }
    if (this.y > 500) this.y = 0
  }
}

class Obstacle {
  constructor() {
    this.xx = 50
    this.ww = 50
    this.yy = 0;
    this.randomY = -100 + Math.floor(Math.random() * -400)
    this.drawObstacle()
  }
  drawObstacle() {
      this.yy += 5
      ctx.fillStyle = 'orange';
      ctx.fillRect(this.xx, this.yy + this.randomY, this.ww, 50);
    
    if ((this.yy + this.randomY) > 500) {
      this.yy = 0
      this.xx = 30 + Math.floor(Math.random() * 230)
      this.ww = 10 + Math.floor(Math.random() * 180)
      if (this.xx + this.ww > 270)
        this.ww = 270 - this.xx
    }
  }
}

class Car {
  constructor(img) {
    this.x = canvas.width / 2 - 25
    this.y = canvas.height - 100
    this.height = 100
    this.width = 60
    this.img = new Image()
    this.img.src = img
    this.img.onload = () => {
      this.draw() // draw image when image has alrady charged
    }
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 90)
  }
  moveRight() {
    if (this.x > 210) this.x = 210
    this.x += 15
  }
  moveLeft() {
    if (this.x < 50) this.x = 40
    this.x -= 15
  }
}

const raceTrack = new RaceTrack()
const obstacle1 = new Obstacle()
const obstacle2 = new Obstacle()
const ferrari = new Car(images.img1)

let interval
let frames = 0

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  raceTrack.drawRaceTrack()
  ferrari.draw()
  obstacle1.drawObstacle()
  obstacle2.drawObstacle()
}

function startGame() {
  if (interval) return
  interval = setInterval(update, 1000 / 60)
}

//function carMov(){ }

// EVENT 
document.addEventListener('keydown', e => {
  e.preventDefault()
  switch (e.keyCode) {
    case 39:
      return ferrari.moveRight()
    case 37:
      return ferrari.moveLeft()
  }
})
// 
window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

};

