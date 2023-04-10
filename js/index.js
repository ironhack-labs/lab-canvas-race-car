document.getElementById('start-button').addEventListener('click', () => {
  startGame();
});

// GAME AREA
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

// START
function startGame() {
  canvas.style.backgroundImage = 'url("images/road.png")';
  canvas.style.backgroundSize = "cover";
  car.draw();
  drawLoop();
}

// CAR 🏎️
class Car {
  constructor(x0, y0) {
    this.x = x0;
    this.y = y0;

    const img = document.createElement('img');
    img.src = "images/car.png";

    this.image = img;
    img.addEventListener('load', () => {
      this.image = img;
    });
  }

  draw() {
    if (!this.image) return;
    ctx.drawImage(this.image, this.x, this.y, 60, 105);
  }
}
// NEW CAR 🏎️🏎️
let car = new Car(220, 555);

//OBSTACLE 🧱
class Obstacles{
  constructor(x,y,h,w,color) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = w;
    this.color = "red";
  }

  draw(){
    ctx.fillRect(this.x, this.y, this.w, this.h)
    ctx.fillStyle = this.color
  }

  update() {
    this.y += 2; // Changez cette valeur pour modifier la vitesse de déplacement des obstacles
  }

} 
let obstacle = new Obstacles  (113, 0, 26, 124, "red");



// ADD KEY EVENT LISTENER
function update() {
  document.addEventListener('keydown', function (event) {
    console.log('keydown!!!!!!!!', event.keyCode);
    switch (event.keyCode) {
      case 37:
        console.log("gauche");
        car.x -= 50;
        break;
      case 39:
        console.log("droite");
        car.x += 50;
        break;
    }
  });
}

update();

// ANIMATION LOOP
function drawLoop() {
  ctx.clearRect(0, 0, 500, 700);
  car.draw();
  obstacle.draw();
  obstacle.update();
  requestAnimationFrame(drawLoop);
}










