class Game {
    constructor(canvas) {
        this.canvas = canvas
        this.context = canvas.getContext("2d")
        this.width = canvas.width
        this.height = canvas.height
        //this.background = new Background () if using a background class
        this.player = new Player(this); // is having 'Game' instead of 'this' the same in this case?
        this.player.setControls();
        this.score = [];
        this.seconds=0;
        this.obstacles = [] // array of obstacles
        // this.obstacle= new Obstacle(this) -> adds one obstacle 
        this.animationId;
        this.frame = 0;
        this.gameOn = true;

    }
    start() {
        if (this.gameOn) {
            console.log("Game Started!");
            this.reset();
            this.animation();
        }
    }
    draw() {
        // this.background= new Image() // create a class a background class instead
        // this.background.src="images/road.png"; // ---|
        // this.context.drawImage(this.background,50, 80)
        this.context.clearRect(0, 0, this.width, this.height)
        this.player.draw();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw();
            this.obstacles[i].update();
        }
    }
    update() {
        this.frame++;
        this.player.update()
        if (this.frame % 100 === 0) {
            this.obstacles.push(new Obstacles(this));
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].update();
                if (this.obstacles[i].y + this.obstacles[i].height > this.height) {
                    this.obstacles.shift()
                    this.score.push(this.obstacles[i]);
                }
                // //if(this.player.crashWith(this.obstacles[i])){
                //     this.gameOn = false;
                //     console.log("COLISION")
                // }
            }
        }
        this.crash();
        let scoreCard=document.getElementsByClassName("score")[1];
        scoreCard.innerHTML=this.score.length
        this.timeCount()

    }
    checkCollision(player, object) {
        if (object) {
            return (
                player.x < object.x + object.width &&
                player.x + player.width > object.x &&
                player.y < object.y + object.height &&
                player.y + player.height > object.y
            );
        }
    }

    crash() {
        for (let obstacle of this.obstacles) {
            obstacle.update();
            if (this.checkCollision(this.player, obstacle)) {
                this.gameOn = false;
                window.cancelAnimationFrame(this.animationId);
                this.gameOver()
            }
        }
    }

    animation() {
        console.log(this.obstacles)
        this.draw();
        this.update()
        this.animationId = window.requestAnimationFrame(() => {
            if (this.gameOn) {
                this.animation();
            } else {
                this.gameOver();
            }
        });
    }
    gameOver() {
        if (this.gameOn == false) {
            this.context.save();
            this.context.fillStyle = "brown";
            this.context.fillRect(0, 0, this.width, this.height);
            this.context.fillStyle = "darkblue";
            this.context.font = "25px Verdana";
            this.context.fillText(`YOU CRASHED!`, this.width / 3, this.height / 3);
            this.context.fillText(`YOU AVOIDED ${this.score.length} OBSTACLE(S)`, this.width / 8, this.height / 2);
            this.context.fillText(`TIME: ${Math.round(this.seconds/100)} seconds`,this.width/3, this.height / 6)

            this.context.restore();
        }

    }
    timeCount(){
        this.seconds+=1
        this.counter=document.getElementsByClassName("time-count")[1];
        this.counter.innerHTML=Math.round(this.seconds/100)
    }
    reset() {
        this.player.setControls();
        this.obstacles = []
        this.frame = 0;
        this.gameOn = true;
    }
}