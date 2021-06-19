window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const newRoad = new Road ();
    const newCar = new Car ();
  }
};

const canvas = getElementById ("canvas");

const roadCtx = canvas.getContext ("2d");

const carCtx = canvas.getContext ("2d");

class Car {
  constructor () {
    this.x = 215;
    this.y = 553;
    const img = new image ();
    img.addEventListener (`load`, function () {
      this.img = img;
      this.draw ();
    });
    img.src = "/images/car.png"; // Image Car
  }
  moveLeft () {
    this.x += 10;
  }
  
  moveRight () {
    this.y += 10;
  }
  draw () {
    carCtx.drawImage (this.img, this.x, this.y, 80, 130);
  }
}

class Road {
  constructor () {
    const img = new Image ();
    img.addEventListener (`load`, function () {
      this.img = img;
      this.draw ();
    });
    img.src = `/images/road.png`;
  }
  draw () {
    roadCtx.drawImage (this.img, 0, 0, 510, 710); 
  }
}

function updateCanvas () {
  carCtx.clearRect (newCar.x, newCar.y, 80, 135);
  roadCtx.clearRect (0, 0, 510, 710);
  newRoad.draw ();
  newCar.draw ();
  requestAnimationFrame (updateCanvas);
}

document.addEventListener (`keydown`, function (p) {
  switch (p.keyCode) {
    case 37: newCar.moveLeft ();
    break;
    
    case 39: newCar.moveRight ();
    break;
  }
  updateCanvas();
});



