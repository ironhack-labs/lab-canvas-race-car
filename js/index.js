window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  console.log(ctx);

  const roadImage = new Image();
  roadImage.src = "images/road.png";

  const carStripe = new Image();
  carStripe.src = "images/car.png";

  // class obstacles

  class Obstacle {
    constructor() {
      this.x = Math.floor(Math.random() * canvas.width);
      this.y = 0;
      this.width = Math.floor(Math.random() * 200) + 75;
      this.height = 20;
    }
    draw() {
      ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
      this.y += 10;
    }
  }
  const obstacle = [];

  // Function create obstacles

  function createObstacle() {
    const rectangles = new Obstacle();
    obstacle.push(rectangles);
  }
  // Function move obstacles
  function moveObstacles() {
    obstacle.forEach((rectangles) => rectangles.move());
  }

  //  Function Draw obstacles
  function generateObstacles() {
    obstacle.forEach((rectangles) => rectangles.draw());
  }

  // Update everything with setInterval

  function update() {
    let counter = 0;
    setInterval(() => {
      counter++;
      if (counter % 1 === 0) {
        createObstacle();
      }
      if (counter % 2 === 0) {
        moveObstacles();
      }
      if (counter % 5 === 0) {
        generateObstacles();
      }
      render();
    }, Math.floor(1000 / 60));
  }
    // const rectangleOne = new Obstacle();

    // class Car

    class Car {
      constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
      }

      draw() {
        ctx.drawImage(
          carStripe,
          this.x,
          this.y,
          (this.width = carStripe.width / 4),
          (this.height = carStripe.height / 4)
        );
      }
      move(direction) {
        if (direction === "left" && this.x > 0) {
          this.x -= 10;
        } else if (
          direction === "right" &&
          this.x < canvas.width - carStripe.width / 4
        ) {
          this.x += 10;
        }
      }
    }

    // proper car

    const blueCar = new Car(canvas.width / 2.2, 610);

    // Render car
    function render() {
      ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
      blueCar.draw();
    }
  

  // function EventListener

  function event() {
    addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          blueCar.move("left");
          break;
        case "ArrowRight":
          blueCar.move("right");
          break;
      }
    });
  }
};

// Function start the game

function startGame() {
  windows.event();
  windows.update();
}
