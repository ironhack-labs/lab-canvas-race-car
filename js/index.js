document.addEventListener('keydown', (e) => {
    const key = e.code;
    switch (key) {
       
    
        case 'ArrowLeft': // left arrow
        myGame.player.speedX -= 1;
        break;
        case 'ArrowRight': // right arrow
        myGame.player.speedX += 1;
        console.log(myGame.obstacles);
        break;
    }
})

document.addEventListener('keyup', () => {
    myGame.player.speedX = 0
    myGame.player.speedY = 0
})


window.onload = () => {
    document.getElementById("start-button").onclick = () => {
      myGame.start();
    }
};
