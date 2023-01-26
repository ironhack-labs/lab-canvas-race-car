/** @type {HTMLCanvasElement} */
const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

let backgroundImage = new Image()
backgroundImage.src = "images/road.png"

let player = new Component(50,90,canvas.width / 2 - 25, 400, "", ctx)
const game = new Game(ctx, canvas.width, canvas.height, player)
window.onload = () => {
  
  document.getElementById('start-button').onclick = () => {
    
    startGame();
    
    
  };
  
  function startGame() {
    canvas.style.backgroundImage = "url('../images/road.png')"
    canvas.style.backgroundRepeat = 'no-repeat'
    canvas.style.backgroundSize = 'cover'
    game.start();


  }
};

document.addEventListener("keydown", (e) => { 
  switch(e.code){
      case "ArrowLeft":
          player.speedX -= 1
          break;
      case "ArrowRight":
          player.speedX += 1
          break;

  }

}) 

document.addEventListener("keyup", () =>{
  player.speedX = 0;
  player.speedY = 0;
})



