
document.getElementById('start-button').onclick = () => {
  startGame();
};
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d')

function startGame() {
  canvas.style.backgroundImage = 'url("../images/road.png")'
  canvas.style.backgroundSize = "cover"
}

class Car {
  constructor(x0, y0) {
    this.x = x0;
    this.y = y0;

    const img = document.createElement('img'); // <img>
    img.src = "../images/car.png";
    this.image = img
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, 60, 105)
  }

}
const car = new Car(220, 600) // { x: , y: , draw: f() }
car.draw()








