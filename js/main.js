//creating player
const player = new Component(225, 550, 50, 50, ctx);


//creating game

let game = new Game(ctx, 500, 700, player);


game.start();

document.addEventListener('keydown', (e) =>{
    switch(e.code){
        case 'ArrowRight':
            player.speedX += 1;
            break;
        case 'ArrowLeft':
            player.speedX -= 1;
            break;
    }
});

document.addEventListener('keyup', (e) =>{
    player.speedX = 0
   
});