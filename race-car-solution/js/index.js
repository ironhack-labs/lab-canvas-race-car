const raceCanvas = document.getElementById("canvas");
const context = raceCanvas.getContext("2d");


document.getElementById('game-board').style.display = 'none'; //display: none = doesn't show the road


document.getElementById("start-button").onclick = () => {
  document.getElementById('game-board').style.display = 'block';//display: block = when clicking shows the road
  startGame();
  
};

let currentGame; //needs to be declared outside so we can use them in several functions

function startGame() {
  //Instantiate new game
  currentGame = new Game();
  //Instantiate a new car
  let currentCar = new Car();//Always structure as classes even if it just one. Because in the future you never know
  //Assign my new car to my new game
  currentGame.car = currentCar;//Since current game has a car instance. We assign it the current car
  currentGame.car.draw();
  updateCanvas();
  
}

function detectCollision(obstacle) {
  return!(currentGame.car.x > obstacle.x + obstacle.width || //compare the x starting point
  currentGame.car.x + currentGame.car.width < obstacle.x   || //compare the x.width (x end point)
  currentGame.car.y > obstacle.y + obstacle.height
  );
}









function updateCanvas(){
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.car.draw();
  currentGame.obstaclesFrequency++;
  if(currentGame.obstaclesFrequency % 100 === 1){//you can twick this numbers to be faster or slower
    const randomObstacleX = Math.floor((Math.random() * 450));
    const randomObstacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;
    const newObstacle = new Obstacle(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight
    );

    currentGame.obstacles.push(newObstacle);

   

  }

  currentGame.obstacles.forEach((obstacle, index) => {

    obstacle.y += 1; //because it is falling down
    obstacle.draw();


    //Checking collision
    if(detectCollision(obstacle)){
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById('score').innerHTML = 0;
      document.getElementById('game-board').style.display = 'none';
      alert('BOOOM! GAME OVER')



    }







    if(obstacle.y > raceCanvas.height){
    currentGame.score++;
    document.getElementById('score').innerHTML = currentGame.score;
    currentGame.obstacles.splice(index, 1);//I remove the obstacles from the array once they are outside the canvas.
    //Otherwise the score keeps increasing


 }


  });


  console.log(currentGame.obstacles);
  requestAnimationFrame(updateCanvas); //same as the set interval_but this one makes the animation smoother. but it is always 60.
  //Set interval allows you to put things faster or slower.
}


document.addEventListener('keydown', (e) => { //e(keyboardEvent) holds the event of pressing 
  currentGame.car.moveCar(e.key);
});

