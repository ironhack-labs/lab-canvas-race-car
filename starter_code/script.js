window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  //Create the board
  $("#game-board").append(
    '<canvas id="my-canvas" width="400px" height="600px"></canvas>'
  );
  // Getting the DOM element.
  const canvas = document.getElementById("my-canvas");

  // Getting the 2d context.
  const ctx = canvas.getContext("2d");

  $("#my-canvas").toggle();

  //Start the game
  function startGame() {
    if ($("#my-canvas:hidden").length > 0) {
      $("#my-canvas").toggle();
      resetCanvas();
    }
  }
  
  // Our car class.
  class Hero {
    constructor() {
      this.x = 150;
      this.y = canvas.height - 200;
      this.width = 100;
      this.height = 150;
    }

    draw() {
      // Prevent our hero from going beyond the available area.
      if (this.x < 0) this.x = 0;
      if (this.x > canvas.width - 100) this.x = canvas.width - 100;

      // Drawing the hero itself.
      var img = new Image();
      var self = this;
      img.onload = function() {
        // We clean everything in the canvas.
        resetCanvas();

        // Draw the board
        drawBoard();

        // Draw the car
        ctx.drawImage(img, self.x, self.y, 100, 150);
      };
      img.src = "images/car.png";
    }
  }

  // We just need one hero, so let's instantiate it.
  const ourHero = new Hero();

  // Canvas cleaner.
  function resetCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawBoard() {
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 0, 300, 600);

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.moveTo(70, 0);
    ctx.lineTo(70, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 10;
    ctx.moveTo(330, 0);
    ctx.lineTo(330, 600);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.strokeStyle = "white";
    ctx.lineWidth = 4;
    ctx.moveTo(200, 0);
    ctx.lineTo(200, 30);
    ctx.moveTo(200, 60);
    ctx.lineTo(200, 90);
    ctx.moveTo(200, 120);
    ctx.lineTo(200, 150);
    ctx.moveTo(200, 180);
    ctx.lineTo(200, 210);
    ctx.moveTo(200, 240);
    ctx.lineTo(200, 270);
    ctx.moveTo(200, 300);
    ctx.lineTo(200, 330);
    ctx.moveTo(200, 360);
    ctx.lineTo(200, 390);
    ctx.moveTo(200, 420);
    ctx.lineTo(200, 450);
    ctx.moveTo(200, 480);
    ctx.lineTo(200, 510);
    ctx.moveTo(200, 540);
    ctx.lineTo(200, 570);
    ctx.stroke();
    ctx.closePath();
  }

  // Keyboard listener to check if the user press arrows keys.
  window.addEventListener("keydown", e => {
    // Left arrow key.
    if (e.keyCode === 37) {
      if (ourHero.x <= 0) return;
      ourHero.x -= 30;
    }
    // Right arrow key.
    if (e.keyCode === 39) {
      if (ourHero.x >= canvas.width - 100) return;
      ourHero.x += 30;
    }
  });

  // Each loop we call render function.
  function updateCanvas() {
    // Drawing our hero in the current position.
    ourHero.draw();

    window.requestAnimationFrame(updateCanvas);
  }

  // Starting looper.
  window.requestAnimationFrame(updateCanvas);
};
