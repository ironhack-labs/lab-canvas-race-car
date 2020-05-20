class Car {
    constructor(){
      this.initControls();
    }
    moving = false;
    startMove = null;
    x = 400;
    y = 400;
    speed = 100;
  
    initControls(){
      document.addEventListener("keydown", (event)=>{
        this.x = this.position.x;
        this.y = this.position.y;
        switch(event.key){
          case "ArrowLeft":
            this.moving = "left";
            this.startMove = new Date();
            break;
          case "ArrowRight":
            this.moving = "right";
            this.startMove = new Date();
            break;
            case "ArrowUp":
              this.moving = "up";
              this.startMove = new Date();
              break;
            case "ArrowDown":
              this.moving = "down";
              this.startMove = new Date();
            break;    
        }
      })
    }
    get position(){
  
      switch (this.moving) {
        case "left":
          return {
            x: this.x - ((new Date() - this.startMove)/1000)* this.speed, 
            y: this.y
          }
        case "right":
          return {
            x: this.x + ((new Date() - this.startMove)/1000)* this.speed, 
            y: this.y
          }
        case "up":
          return {
            x: this.x, 
            y: this.y - ((new Date() - this.startMove)/1000)* this.speed
          } 
        case "down":
          return {
            x: this.x, 
            y: this.y + ((new Date() - this.startMove)/1000)* this.speed
          }        
        case false:
          return {
            x: this.x,
            y: this.y
          }
      }
  
    }
  
    render(){
      // car dom manipulation here
      let $gameBoard = document.querySelector("#game-board");
      let $car = document.createElement("img")
      $car.setAttribute("src", "./images/car.png");
      $car.setAttribute("id", "car");
  
      $car.style.left = `${this.position.x}px`;
      $car.style.top = `${this.position.y}px`;
      $gameBoard.appendChild($car);
    }
  }