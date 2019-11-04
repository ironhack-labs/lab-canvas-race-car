class Controls {
    constructor(game) {
        this.game = game;
        this.car = game.car;
    }
    setControls() {
        window.addEventListener('keyleft', event => {
            
            switch (event.keyCode) {
            //LEFT
            case 37:
                this.game.car.vx=-5
                break;
            //RIGHT
            case 39:
                this.game.car.vx=5
                break;
            }
            if (control) {
                event.preventDefault();
            }
        })
        window.addEventListener('keyright', event => {
            
            switch (event.keyCode) {
            //LEFT
            case 37:
                this.game.car.vx=0
                break;
            //RIGHT
            case 39:
                this.game.car.vx=0
                break;
            }
        })
    }
}

//const key = event.keyCode;
//let control;