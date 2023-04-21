
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");


const startButton = document.getElementById('start');

const player = new Component(220, 550, 50, 100, "image", ctx); 

startButton.onclick = function (){

    const game = new Game(ctx, 500, 700, player);
    game.start();

}; 

document.addEventListener("keydown", (e) => {
switch(e.code){
    case "ArrowLeft": 
    player.speedX -= 2;
    break;
    case "ArrowRight": 
    player.speedX += 2;
    break;

}
}); 

document.addEventListener("keyup", () => {
    player.speedX = 0; 
    player.speedY = 0; 
});