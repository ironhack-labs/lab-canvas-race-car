const keyCodes = {
    up: 38,
    down: 40,
    left: 37,
    right: 39,
    w: 87,
    s: 65,
    a: 83,
    d: 68
}

window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        main();
    };

    document.onkeydown = function(e) {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case (keyCodes.up):
                world.gameObjects.player.speedY = -CAR_SPEED;
                break;
            case (keyCodes.down):
                world.gameObjects.player.speedY = CAR_SPEED;
                break;
            case (keyCodes.left):
                world.gameObjects.player.speedX = -CAR_SPEED;
                break;
            case (keyCodes.right):
                world.gameObjects.player.speedX = CAR_SPEED;
                break;
            case (keyCodes.w):
                world.gameObjects.player.speedY = -CAR_SPEED;
                break;
            case (keyCodes.a):
                world.gameObjects.player.speedY = CAR_SPEED;
                break;
            case (keyCodes.s):
                world.gameObjects.player.speedX = -CAR_SPEED;
                break;
            case (keyCodes.d):
                world.gameObjects.player.speedX = CAR_SPEED;
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