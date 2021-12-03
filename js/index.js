// jshint esversion:6
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
class RoadBoard {

  constructor(){  

    this.col = 0;
    this.row = 0;
    
    const img = new Image();
    img.addEventListener('load', ()=>{
      this.img = img;
      this.draw();
    });
    img.src = "../images/road.png";
  }
  
  moveUp(){
    this.row--;
  }
  moveDown(){
      this.row++;
  }
  moveRight(){
      this.col++;
  }
  moveLeft() {
      this.col--;
  }
  draw(){
      ctx.drawImage(this.img, this.col, this.row, canvas.width, canvas.height);
  }
}

const board = new RoadBoard();
