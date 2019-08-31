window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {
        main()
    }

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 38: // up arrow
                console.log('up')
                world.gameObjects.player.speedY = -10;
                break;
            case 40: // down arrow
                console.log('down')
                world.gameObjects.player.speedY = 10;
                break;
            case 37: // left arrow
                console.log('left')
                world.gameObjects.player.speedX = -10;
                break;
            case 39: // right arrow
                console.log('right')
                world.gameObjects.player.speedX = 10;
                break;
        }
    };

    document.onkeyup = function(e) {
        try {
            world.gameObjects.player.speedX = 0;
            world.gameObjects.player.speedY = 0;
        } catch {
            null
        }
    };
};