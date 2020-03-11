class Player {
    constructor(game){
        this.game = game
        this.context = game.context;
        this.x = this.game.width /2;
        this.y = this.game.height-(this.game.height /6);
        this.width = 50;
        this.height = 65;
        this.speedX = 0;
        this.img = new Image()
        this.img.src = "images/car.png"
    }

    draw(){
        this.context.drawImage(this.img, this.x, this.y, this.width, this.height)
        // this.context.save()
        // this.context.fillStyle= "pink";
        // this.context.fillRect(this.x, this.y, this.width, this.height);
        // this.context.restore();
       }

    update(){
        this.x += this.speedX;
        if (this.x <= 0){
            this.speedX = 0;
        }
        if (this.x >= this.game.width -40){
            this.speedX = 0;
        }
    }
    
    setControls(){
        window.addEventListener("keydown", event => {
            if (event.keyCode === 39) {
                this.speedX = 2;
                console.log(this.x)
                console.log("right key pressed");
            }
            if (event.keyCode === 37) {
                this.speedX = -2;
                console.log(this.x)
                console.log("left key pressed");
            }
        })
    }
}
