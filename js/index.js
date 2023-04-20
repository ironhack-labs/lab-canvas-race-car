// JS Initialization
console.log("JS is loaded");

// Canvas Initialization
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Create tha Player
const player = new Player(212, 550, 75, 125, ctx);


// Move the Player
document.addEventListener("keydown", (e)=>{
    switch (e.code){
        case "ArrowUp":
            player.speedY -=1;
            break;
        case "ArrowDown":
            player.speedY +=1;
            break;
        case "ArrowLeft":
            player.speedX -=1;
            break;
        case "ArrowRight":
            player.speedX +=1;
            break;
    }
})

// Stop Speed
document.addEventListener("keyup", () => {
    player.speedX = 0;
    player.speedY = 0;
})


window.onload = () => {
  document.getElementById('start-button').onclick = () => {
        const game = new Game(ctx, canvas.width, canvas.height, player);
        game.start();
  };
};
