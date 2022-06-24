//OPTION #1 for waiting for the global window object to load
//window.addEventListener('load', () => {})

//OPTION #2 for waiting for the global window object to load
window.onload = () => {

  let totalFrameCount = 0;

  let obstacleArray = [];

  let intervalId = null;
  
  document.getElementById('start-button').onclick = () => {
    
    startGame();
  };

  function startGame() {
    
    const myCanvas = document.querySelector('canvas');
    const ctx = myCanvas.getContext('2d');
    
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    
    // imageArray.push(roadImg);
    
    const carImg = new Image();
    carImg.src = './images/car.png';

    class RectangleObject {
      constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.vX = 0;
        this.vY = 0;
        this.width = width;
        this.height = height;
      }

      updatePosition(){
        this.x += this.vX;
        this.y += this.vY;
      }

      draw(){
        ctx.fillRect(this.x, this.y, this.width, this.height);
      }
      left() {
        return this.x;
      }
      right() {
        return this.x + this.width;
      }
      top() {
        return this.y;
      }
      bottom() {
        return this.y + this.height;
      }
     
      crashWith(obstacle) {
        return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
      }

    }

    class ImageObject extends RectangleObject {
      constructor(x, y, width, height, imageElement) {
        super(x, y, width, height);
        this.image = imageElement;
      }

      draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
      }
    }

    const myRoad = new ImageObject(0, 0, myCanvas.width, myCanvas.height, roadImg);
    const myCar = new ImageObject(myCanvas.width / 2, myCanvas.height - 150, 50, 100, carImg);

    
    function updateGame(){
      //update frame totalFrameCount
      totalFrameCount++;

      if(totalFrameCount % 240 === 0){
        console.log('4 seconds have passed')
        
        //width between 20% and 60%
        let rectWidth = Math.floor((Math.random() * (myCanvas.width * 0.4)) + myCanvas.width * 0.2);

        //X position between 0 and myCanvas.width - rectWidth
        let rectX = Math.floor(Math.random() * (myCanvas.width - rectWidth))

        obstacleArray.push(new RectangleObject(rectX, 0, rectWidth, 20));

        console.log(obstacleArray);

      }

      //position updates
      myCar.updatePosition();
      for(let i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].y += 1;
        if(myCar.crashWith(obstacleArray[i])){
          clearInterval(intervalId);
          alert('you crashed!')
        };
      }

      //drawings
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
      myRoad.draw();
      for(let i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].draw();
      }
      myCar.draw();
    }

    

    roadImg.onload =  () => {
      intervalId = setInterval(updateGame, 16.67)
    };



    document.addEventListener('keydown', (event) => {
      switch(event.code){
        case 'ArrowLeft':
          myCar.vX -= 1;
          break;
        case 'ArrowRight':
          myCar.vX += 1;
          break;
      }
    })

    document.addEventListener('keyup', (event) => {
      switch(event.code){
        case 'ArrowLeft':
          myCar.vX = 0;
          break;
        case 'ArrowRight':
          myCar.vX = 0;
          break;
      }
    })

  }
};

class RectangleObject {
  constructor(x, y, width, height, canvasContext) {
    this.x = x;
    this.y = y;
    this.vX = 0;
    this.vY = 0;
    this.width = width;
    this.height = height;
    this.ctx = canvasContext;
  }

  updatePosition(){
    this.x += this.vX;
    this.y += this.vY;
  }

  draw(){
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
 
  crashWith(obstacle) {
    return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
  }

}

class ImageObject extends RectangleObject {
  constructor(x, y, width, height, canvasContext, imageElement) {
    super(x, y, width, height, canvasContext);
    this.image = imageElement;
  }

  draw(){
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}



//OPTION #1 for waiting for the global window object to load
//window.addEventListener('load', () => {})

//OPTION #2 for waiting for the global window object to load
window.onload = () => {

  //create a starting frame count of zero
  let totalFrameCount = 0;

  //create a default empty obstacle array (we will add obstacles later)
  let obstacleArray = [];

  //create a default intervalId of null (we will set it with a non-null value later)
  let intervalId = null;

  //when the start button is clicked, invoke the startGame function to start our game
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  /**
   * this function sets up and starts the game loop
   */
  function startGame() {
    
    /**
     * GET CANVAS AND CONTEXT
     */
    const myCanvas = document.querySelector('canvas');
    const ctx = myCanvas.getContext('2d');


    /**
     * CREATE ROAD AND CAR HTML IMAGE ELEMENTS
     */
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    
    const carImg = new Image();
    carImg.src = './images/car.png';


    /**
     * INSTANTIATE IMAGE OBJECT CLASSES FOR ROAD AND CAR
     */
    const myRoad = new ImageObject(0, 0, myCanvas.width, myCanvas.height, ctx, roadImg);
    const myCar = new ImageObject(myCanvas.width / 2, myCanvas.height - 150, 50, 100, ctx, carImg);

    /**
     * FUNCTION FOR CREATING NEW OBSTACLE
     */
    function createObstacle(){

      //set obstacle width between 20% and 60% of total canvas width
      let rectWidth = Math.floor((Math.random() * (myCanvas.width * 0.4)) + myCanvas.width * 0.2);

      //set obstacle X position between 0 and myCanvas.width - rectWidth
      let rectX = Math.floor(Math.random() * (myCanvas.width - rectWidth))

      //push new obstacle to array of existing obstacles
      obstacleArray.push(new RectangleObject(rectX, 0, rectWidth, 20, ctx));

    }

    
    function updateGame(){
      
      //update frame totalFrameCount
      totalFrameCount++;

      //we have 60 frames per second - so create new obstacle every 4 seconds
      if(totalFrameCount % 240 === 0){
        createObstacle();
      }

      //update car position
      myCar.updatePosition();

      //update obstacle positions
      for(let i = 0; i < obstacleArray.length; i++){
        
        //update individual obstacle Y position (X does not change for obstacles)
        obstacleArray[i].y += 1;

        //detect if obstacle is overlapping with car (collision) - if true, then stop game
        if(myCar.crashWith(obstacleArray[i])){
          clearInterval(intervalId);
          alert('you crashed!')
        };

      }

      //clear existing canvas
      ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

      //draw road
      myRoad.draw();

      //draw all obstacles
      for(let i = 0; i < obstacleArray.length; i++){
        obstacleArray[i].draw();
      }

      //draw car
      myCar.draw();

    }

    
    //only start the game loop after the road image has finished loading
    roadImg.onload =  () => {
      intervalId = setInterval(updateGame, 16.67)
    };


    //add event listener to change the car's velocity (speed in the X direction) on keydown event
    document.addEventListener('keydown', (event) => {
      switch(event.code){
        case 'ArrowLeft':
          myCar.vX -= 1;
          break;
        case 'ArrowRight':
          myCar.vX += 1;
          break;
      }
    });

    //add event listener to change the car's velocity (speed in the X direction) to zero on keyup event
    document.addEventListener('keyup', (event) => {
      switch(event.code){
        case 'ArrowLeft':
          myCar.vX = 0;
          break;
        case 'ArrowRight':
          myCar.vX = 0;
          break;
      }
    });

  }
};