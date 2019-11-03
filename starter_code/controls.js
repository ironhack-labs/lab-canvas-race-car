class Controls{
    constructor(game){
        this.game = game;
    }

    setBindingKeys(){
        window.addEventListener('keydown', (event) => {
            // Stop the default behavior (moving the screen to the left/up/right/down)
            let keyPressed;
            // React based on the key pressed
            switch (event.keyCode) {
            case 37:
                //console.log('left')
                keyPressed = 'left'
                break;
            case 39:
                //console.log('right')
                keyPressed = 'right'
                break;
            }
            if (keyPressed){
                event.preventDefault();
                this.game.carMove(keyPressed);
            }
        });    
    }
}