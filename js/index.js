console.log("JS is loaded index");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const startButton = document.getElementById("start-button");


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
  }
//creating our player

const player = new Player(225, 650, 75, 75, "blue", ctx);


document.addEventListener("keydown", (e)=>{
         switch(e.code){
            case "ArrowLeft":
            player.moveLeft();
            break;
            case "ArrowRight":
            player.moveRight();
            break;
         }
})




};
