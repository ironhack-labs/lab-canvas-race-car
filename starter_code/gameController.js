class gameController{

  
  constructor(road, car){
    
    //Get canvas from DOM
    this.canvas = document.getElementById('game');

    //Get canvas context
    this.ctx = this.canvas.getContext('2d');
    
    //Set canvas size
    this.canvas.width = 500;
    this.canvas.height = 500;

    //Set road and car
    this.road = road;
    this.car = car;

    //Create a randomly positioned roadblock
    this.roadBlock = this.randomRoadBlock();

    //Make a boolean array of key presses with event listeners (true on keydown and false on keyup)
    this.keys = [];
    $('body')[0].addEventListener('keydown', (e) =>{
      this.keys[e.keyCode] = true;
    });
    $('body')[0].addEventListener('keyup', (e) =>{
      this.keys[e.keyCode] = false;
    });

  }

  //Generates randomly positioned road blocks (random x coordinate and width)
  randomRoadBlock(){
    let randomX = Math.random() * 315;
    let randomWidth = Math.random() * 315 + 105;

    if(randomX + randomWidth > 420){
      randomWidth = 420 - randomX;
    }

    return new RoadBlock(randomX + 40, randomWidth);
  }

  //Collision detection
   //Temporary code below this line
   collisionCheck(shapeA, shapeB){
    // get the vectors to check against
    let vectorX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2));
    let vectorY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2))
        // add the half widths and half heights of the objects
    let hWidths = (shapeA.width / 2) + (shapeB.width / 2);
    let hHeights = (shapeA.height / 2) + (shapeB.height / 2);
    // if the x and y vector are less than the half width and half height, they we must be inside the object, causing a collision
    if (Math.abs(vectorX) < hWidths && Math.abs(vectorY) < hHeights) {
        alert('Collision detected! Game Over!');
    }
  }

  //Draw road, map hazards, and car
  updateGameFrame(){

    //Check for collisions
    this.collisionCheck(this.car, this.roadBlock);

    //Clear the canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //Draw the road
    this.road.draw(this.ctx);

    //Draw the roadblock
    this.roadBlock.draw(this.ctx);

    //Move the car
    this.car.drive(this.keys);

    //Draw the car
    this.car.draw(this.ctx);

    if(this.roadBlock.y > 500){
      this.roadBlock = this.randomRoadBlock();
    }

    requestAnimationFrame(() => this.updateGameFrame());
    
  }
}