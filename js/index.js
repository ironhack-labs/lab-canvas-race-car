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
  }
};
