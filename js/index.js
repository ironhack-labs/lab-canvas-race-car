console.log("JS-index");
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let startButton = document.getElementById("start-button");


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    let game = new Game(ctx, canvas.width, canvas.height, player);
    game.start();
  }
//creating our player

let player = new Player(230, 610, 40, 80, ctx);


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