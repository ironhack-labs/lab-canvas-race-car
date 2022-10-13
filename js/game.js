const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

};

class Game{
  constructor(ctx, width, height, player){
    this.ctx= ctx;
    this.width = width;
    this.height =height;
    this.player= player;
    this.intervalId= null;
    this.obstacles = [];
    this.frames = 0;
}

start(){
  this.intervalId = setInterval(this.update, 1000/60)
}

clear(){
  this.ctx.clearRect(0, 0, this.width, this.height)
}

update =() =>{
  this.frames ++;
  this.clear()
  this.player.newPos();
  this.player.draw();
}


}