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
