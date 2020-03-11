class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        // referencing the game (this) inside the player class
        this.player = new Player(this);
        this.player.setControls(); // calls a method of the player within the game constructor

        this.obstacles = [];
        // this.obstacle = new Obstacle (this);
        this.animationId;
        this.frame = 0;
        this.gameOn = true;
        this.road = [];
        this.startingLine = new Obstacle(this);
        this.startingLine.x = 80;
        this.startingLine.y = 60;
        this.startingLine.height = 10;
        this.startingLine.width = this.width - 160;
        this.score = 0;
        this.difficultyLevel = 120;
    }

    start() {
        this.reset();
        console.log("Game started!");
        this.animation();
    }

    gameOver() {
        // window.cancelAnimationFrame(this.animationId);
        this.gameOn = false;
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, this.width, this.height);
        this.context.fillStyle = "red";
        this.context.font = "25px monospace";
        this.context.fillText("GAME OVER!", this.width / 2 - 100, this.height / 2);
        this.context.fillStyle = "white";
        this.context.fillText(`Your final score: ${this.score}`, this.width / 2 - 100, this.height / 2 + 40);

    }

    renderScoresAndDiff() {
        this.context.fillStyle = "white";
        this.context.font = "25px monospace";
        this.context.fillText(`Score: ${this.score}`, 105, 80);
        
        if (this.difficultyLevel === 120) {
            this.context.fillStyle = "green";
            this.context.fillText(`Difficulty: Easy`, 105, 120);
        }
        if (this.difficultyLevel === 100) {
            this.context.fillStyle = "yellow";
            this.context.fillText(`Difficulty: Hard`, 105, 120);
        }
        if (this.difficultyLevel < 100) {
            this.context.fillStyle = "red";
            this.context.fillText(`Difficulty: Very Hard`, 105, 120);
        }


    }

    reset() {
        this.player = new Player(this);
        this.player.setControls(); // calls a method of the player within the game constructor
        this.obstacles = [];
        // this.obstacle = new Obstacle (this);
        this.frame = 0;
        this.score= 0;
        this.difficultyLevel = 120;
        this.gameOn = true;
    }

    draw() {
        this.context.clearRect(0, 0, this.width, this.height);
        this.staticRoad();
        this.startingLine.draw("white");
        for (let i = 0; i < this.road.length; i++) {
            this.road[i].draw();
        }
        this.player.draw();
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].draw("red");
        }
        this.renderScoresAndDiff();

    }

    staticRoad() {
        this.context.save();
        this.context.fillStyle = "green";
        this.context.fillRect(0, 0, 80, this.height);
        this.context.fillRect(this.width - 80, 0, this.width, this.height);
        this.context.restore();

        this.context.save();
        this.context.fillStyle = "grey";
        this.context.fillRect(80, 0, this.width - 160, this.height)
        this.context.restore();

        this.context.save();
        this.context.fillStyle = "white";
        this.context.fillRect(90, 0, 10, this.height);
        this.context.fillRect(this.width - 100, 0, 10, this.height);

        this.context.restore();
    }



    update() {
        this.frame++;
        this.player.update();
        this.startingLine.update();


        
        if (this.frame % this.difficultyLevel === 0) {
            this.obstacles.push(new Obstacle(this));
        }
        
        if (this.frame % 30 === 0) {
            this.road.push(new Road(this));
        }
        
        for (let i = 0; i < this.road.length; i++) {
            this.road[i].update();
            if (this.road[i].y + this.road[i].height > this.height) {
                this.road.shift();
            }
            
        }
        
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].update();
            if (this.obstacles[i].y + this.obstacles[i].height > this.height) {
                this.obstacles.shift();
            }
            
            if (this.obstacles[i].y === this.player.y) {
                this.score++;
                if (this.score % 10 === 0) {
                    this.difficultyLevel -= 20;
                    console.log(this.difficultyLevel)
                    if (this.difficultyLevel < 80) {
                        this.difficultyLevel = 80;
                    }
                }
            }
            if (this.player.crashWith(this.obstacles[i])) {
                // stop the animation if it detects a collision and draws game over text
                
                this.gameOver();
                
            }
            
        }
    }

    animation() {
        this.draw();
        this.update();


        this.animationId = window.requestAnimationFrame(() => {
            if (this.gameOn) {
                this.animation();
            }

        });

    }
} 