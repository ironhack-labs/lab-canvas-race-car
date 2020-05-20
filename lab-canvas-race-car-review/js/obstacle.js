class Obstacle {
    y = -100;
    width = Math.round(Math.random()*3)*50;
    x = Math.random() * (500 - this.width);
    startTime = new Date();
    speed = 200;
    
    get position(){
      return {
        x: this.x,
        y: this.y + ((new Date() - this.startTime)/1000)* this.speed
      }
    }
  
    render(){
      let $gameBoard = document.querySelector("#game-board");
      let $obstacle = document.createElement("div");
      $obstacle.setAttribute("class", "obstacle");
      $obstacle.style.top = `${this.position.y}px`;
      $obstacle.style.left = `${this.position.x}px`;
      $obstacle.style.width = `${this.width}px`;

      $gameBoard.appendChild($obstacle);
    }
}