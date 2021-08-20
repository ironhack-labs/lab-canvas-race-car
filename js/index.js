window.onload = () => {
  //Create the canvas and its context
  const canvas = document.getElementById("canvas"); //querySelector?
  const ctx = canvas.getContext("2d");
  let frameId = null;
  let obstacleId = null;

  //Create instances of the classes we want to paint on the canvas
  //Use info from constructors!
  const background = new Background(ctx);
  const car = new Car(ctx, canvas.width / 2 - 25, canvas.height - 110);

  //Create empty array to store obstacles
  const obstacleArray = [];

  const score = {
    points: 0,
    draw: function () {
      ctx.font = "30px Arial";
      ctx.fillStyle = "hotpink";
      ctx.fillText = (`Score: ${this.points}`, 200, 50);
    },
  };

  obstacleId = setInterval(function () {
    let obstacle = new Obstacle(
      ctx,
      Math.random() * canvas.width - 200, //position x
      0, //postion y - objects will be coming from top of canvas
      Math.random() * 50 + 100, //widtth
      Math.random() * 15 + 10, //height
      Math.ceil(Math.random() * 2) //spe¯ed
    );
    score.points += 10; // missing score.
    obstacleArray.push(obstacle);
  }, 2000);

  //Create collision
  function checkCollision(car, obstacle) {
    let crash =
      car.x < obstacle.x + obstacle.width && //check the right side of the car
      car.x + car.width > obstacle.x &&
      car.y < obstacle.y + obstacle.height &&
      car.y + car.height > obstacle.y; //had not defined this variable

    if (crash) {
      cancelAnimationFrame(frameId);
      clearInterval(obstacleId);
      alert("You crashed! Game over, looser.");
      window.location.reload();
    }
  }

  //Increment total score
  function updateScore() {
    numObstaclesTotal = obstacleArray.length;

    obstacleArray = obstacleArray.filter((eachObstacle) => {
      eachObstacle.y < canvas.height;
    });

    numObstaclesOnScreen = obstacleArray.length;

    score.points += numObstaclesTotal - numObstaclesOnScreen;
  }

  //This is where the game logic happens - startGame or game loop
  function startGame() {
    //Create a loop to animate the game
    frameId = requestAnimationFrame(startGame);
    //Check if the game is working
    console.log("The game is working, WOO!");

    //1-Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    //2-Paint the object
    background.draw();
    car.draw();
    score.draw(); //did not call this function

    //3-Loop through the obstace array and move every obstacle
    obstacleArray.forEach((eachObstacle) => {
      eachObstacle.draw();
      eachObstacle.move();
      checkCollision(car, eachObstacle);
    });

    //4-Remove obstacles that are outside of the screen and update score
    updateScore();
  }

  //Start the game when we click on the start button
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  //Add an event listener to move the car with the arrow keys
  //Keyboard events checker => https://keycode.info/
  window.addEventListener("keydown", moveCar);

  function moveCar(event) {
    switch (event.keyCode) {
      case 37:
        if (car.x > 0) car.x -= 15;
        break;

      case 39:
        if (car.x < canvas.width - car.width) car.x += 15;
        break;

      default:
        break;
    }
  }
};
