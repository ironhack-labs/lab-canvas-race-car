class Movements {
    constructor(gameElement){
        this._el = gameElement
    }

    init() {
        document.addEventListener('keydown', (event) => {
            switch(event.keyCode) {
                case RIGHT_KEY:
                    this._el.vx = 5
                    break;
                case LEFT_KEY:
                    this._el.vx = -5
                    break;
            }
        })

        document.addEventListener('keyup', (event) => {
            switch(event.keyCode) {
                case RIGHT_KEY:
                    this._el.vx = 0
                    break;
                case LEFT_KEY:
                    this._el.vx = 0
                    break;
            }
        })

    }
}