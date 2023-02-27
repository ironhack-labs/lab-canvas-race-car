window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    let obstacleArray = [];
      const canvas = document.getElementById('canvas');
      const ctx = canvas.getContext('2d');
      
      const canvasBg = new Image();
      canvasBg.src = "../images/road.png";

      class gameArea {
        constructor(player){
          this.player = player;
          this.y = 0;
          this.img = canvasBg;
        }
        //Loads the Background for The Game
        loadBackground(){
          ctx.clearRect(0,0, window.innerWidth, window.innerHeight);
          ctx.drawImage(this.img, 0, 0);
        }
      }

      class Car {
        //Sets the properties for the player
        constructor(x,y){
          this.x = x;
          this.y = y;
          this.img = '../images/car.png';
          this.score = 0;
        }
        //Moves the car to the right & checks if car is inside the Game
        moveRight(){
          const car = new Image();
          car.src = this.img;
          this.x += 20;
          ctx.clearRect(0,0, canvas.width, canvas.height);
          raceGame.loadBackground();
          this.checkPosition()
        }
          //Moves the car to the left & checks if car is inside the Game
          moveLeft(){
            const car = new Image();
            car.src = this.img;
            this.x -= 20;
            ctx.clearRect(0,0, canvas.width, canvas.height);
            raceGame.loadBackground();
            this.checkPosition();
          }
           //Places car on the default position
        defaultPosition(){
          const car = new Image();
          car.src = this.img;
          ctx.drawImage(car, this.x, this.y, 30, 50);
        }
         //Checks if the car remains inside the set Coordinates
         checkPosition(){
          const car = new Image();
          car.src = this.img;
          if(this.x < 220 && this.x > 35){
            ctx.drawImage(car, this.x, this.y, 30, 50);
          }else if(this.x > 190){
            this.x = 210;
            ctx.drawImage(car, this.x, this.y, 30, 50);
          }else if(this.x < 36){
            this.x = 35;
            ctx.drawImage(car, this.x, this.y, 30, 50);
          }
        }
      }

      //Check for Keypresses Left Arrow/Right Arrow
      document.addEventListener("keydown", (event) => {
        if(event.keyCode === 39){
          raceCar.moveRight();
        }else if(event.keyCode === 37){
          raceCar.moveLeft();
        }
      })

      //Generates Obstacles on the left side with random width
      function generateLeftObstacle(){
        let randomWidth = Math.floor(Math.random() * (145 - 80) + 80);
        const obstacle = {
            x:40,
            y:0,
            width: randomWidth,
            height:20,
            type: 'Left'
        }
        obstacleArray.push(obstacle);
      }
      //Generates Obstacles on the right side with random width
      function generateRightObstacle(){
        let randomWidth = Math.floor(Math.random() * (145 - 80) + 80);
        const obstacle = {
            x:140,
            y:0,
            width: randomWidth,
            height:20,
            type: 'Right'
        }
        obstacleArray.push(obstacle);
      }
      let animate; 
      
       function renderObstacle(){
        //Loops trough the obstacleArray and renders each object as an obstacle
           obstacleArray.forEach((item,index) => {
            if(item.y < 420){
              //Adds +1 to each obstacle Y property
              item.y += 1;
              raceGame.loadBackground();
              raceCar.defaultPosition();
              //Renders the obstacleArray's other objects as well
              for(let i = 0; i < obstacleArray.length; i++){
                ctx.fillStyle = 'black';
                ctx.font = '20px serif';
                 ctx.textRendering = raceCar.score;
               ctx.fillText(`${raceCar.score}`, 5, 20);
               ctx.fillStyle = '#A00917';
                ctx.fillRect(obstacleArray[i].x, obstacleArray[i].y, obstacleArray[i].width, obstacleArray[i].height);
              }
           }else{
            //If the obstacle passes besides the player it increments by +1
            raceCar.score++;
            console.log(raceCar.score);
              obstacleArray.splice(index,1);
              //Checks if the obstacle has type of 'Right'
              if(item.type === 'Right'){
                setTimeout(() => {
                  generateRightObstacle();
                }, 1300)
                //Checks if the obstacle has type of 'Left'
              }else if(item.type === 'Left'){
                setTimeout(() => {
                  generateLeftObstacle()
                }, 1300)
               
              }
           }
          })
          animate = requestAnimationFrame(renderObstacle);
       }

       setInterval(() => {
        //Checks if the car and the obstacle is on the same Y Coordinates
        if(raceCar.y === Math.floor(obstacleArray[0].y)){
        
          if(obstacleArray[0].type === 'Left'){
            const leftEndPosition = obstacleArray[0].x + obstacleArray[0].width;
            const rightEndPosition = obstacleArray[0].x;
            //If the Car and the obstacle are on the same X coordinates it's crashes
            if(raceCar.x <= leftEndPosition){
              Crashed();
              
            }
          }else if(obstacleArray[0].type === 'Right'){
            const leftEndPosition = obstacleArray[0].x - obstacleArray[0].width;
            const rightEndPosition = obstacleArray[0].x;
            //If the Car and the obstacle are on the same X coordinates it's crashes
            if(raceCar.x >= rightEndPosition - 25){
              Crashed();
            }else{
              console.log(raceCar.x);
              console.log(obstacleArray[0].x);
            }
          }
        }
       },10)
  }
};
