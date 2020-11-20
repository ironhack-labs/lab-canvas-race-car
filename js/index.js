const ctx = document.getElementById("canvas").getContext("2d");
const img = new Image();
img.src = "../images/road.png";

class Car {
  constructor() {
    this.x = 220;
    this.y = 600;
    const img = new Image();
    img.addEventListener("load", () => {
      // Once image loaded => draw
      this.img = img;
      this.draw();
    });
    img.src = "../images/car.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y, 50, 80)
  }
}
const car = new Car();


window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(img, 0, 0, 500, 700);
    car.draw();
  }
};
