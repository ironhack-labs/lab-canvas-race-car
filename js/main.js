/** @type{HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

//Grab the button

/* const startButton = document.getElementById("start-button"); */

//Create the player

const player = new Component (225, 500, 50, 100, ctx);
const game = new Game(ctx, canvas.width, canvas.height, player)

window.onload = () => {
 document.getElementById('start-button').onclick = () => {
    game.start();
  };

/*   function startGame() {
    const game = new Game(ctx, canvas.width, canvas.height, player)
    game.start();
  }   */
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
    player.speedX=0;
})
