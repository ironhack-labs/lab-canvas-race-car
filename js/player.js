class Player {
    constructor(game) {
        this.game = game;
        this.context = game.context;
        this.x = 250
        this.y = game.height / 1.5
        this.width = 40
        this.height = 50
        this.speedX = 0
        this.carCrashAudio = new Audio();
        this.carCrashAudio.src =
            "../audios/car_brake_crash-Cam_Martinez-567114981.mp3";
        //this.speedY= 3 //--> does not apply because the car will only be moving across the X-axis (from left to right)

    }
    draw() {
        this.context.save() // makes sure all styles defined are stored/saved up until this moment. If not declared, everything will be pink;
        let playerIcon = new Image();
        playerIcon.src = "images/car.png"
        this.context.drawImage(playerIcon, this.x, this.y, this.width, this.height)
        this.context.restore()
    }
    update() {
        this.x += this.speedX;
    }

    setControls() {
        window.addEventListener("keydown", event => {
            if (event.keyCode === 37) {
                if (this.x <= 0) {
                    this.speedX = 0;
                } else {
                    this.speedX = -4;
                }
            }
            if (event.keyCode === 39) {
                if (this.x >= this.game.width - this.width) {
                    this.speedX = 0;
                } else {
                    this.speedX = 4;
                }
            }
        })
        window.addEventListener("keyup", event => {
            this.speedX = 0;
        });
    }


}