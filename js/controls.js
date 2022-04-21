document.addEventListener('keydown', (e)=> {
    switch (e.code) { 
        case 'ArrowLeft': 
            player.speedX -=1;
            break;
    
        case 'ArrowRight': 
            player.speedX +=1;
            break;
    }
    });


    
    document.addEventListener('keyup', (e)=>{ //everyime the key is released it moves and everytime the key in unpress it stops 
    player.speedX = 0;
    player.speedY = 0;
    });