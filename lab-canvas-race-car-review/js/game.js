class Game {
    constructor(){
      this.render = this.render.bind(this);
    }
    car = {}; // composition pattern
    obstacles = [new Obstacle()]; // composition pattern
    start(){
      // intialize game and start rendering the game continiously
      document.querySelector(".game-intro").style.display = "none";
      let $board = document.querySelector("#game-board");
      $board.style.float = "none";
      document.body.style.display = "flex";
      document.body.style.justifyContent = "center";
  
      this.car = new Car();
      setInterval(()=> {
        this.obstacles.push(new Obstacle());
      }, 3000)
      this.render();
    }
    
    obstaclesCarCollision(){
      let $car = document.querySelector("#car");
      let $obstacles = document.querySelectorAll(".obstacle");
  
      for(let i = 0; i < $obstacles.length; i++){
        if(isCollide($car, $obstacles[i])) {
          alert("BOEM!");
        };
      }
    }
  
  
    render(){
      let $board = document.querySelector("#game-board").innerHTML = "";
      this.car.render();
      this.obstacles.forEach((obstacle, index)=> {
         obstacle.render()
         if(obstacle.position.y > window.innerHeight){
            this.obstacles.splice(index, 1);
         }
      });
  
      this.obstaclesCarCollision();

    
     requestAnimationFrame(this.render)
 
    }
  
  }