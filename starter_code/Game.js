const $canvas = document.querySelector('canvas');


class Game {
    constructor($canvas) {
        this.$canvas = $canvas;
        this.context = this.$canvas.getContext('2d');
        this.car = new Car(this);
        this.controls = new Controls(this);
        this.gameHeight = 600;
        this.gameWidth = 500;
        this.controls.setControls();
        this.obstaclesArray = [];
        this.obstaclesTime = 0;
        this.speed = 1500;
        this.loose = false;
        this.score = 0;
    };

    paintGame() {
        this.context.fillStyle = 'rgb(0, 153, 51)';
        this.context.fillRect(0, 0, this.gameWidth, this.gameHeight);

        //grey road color
        this.context.fillStyle = 'grey';
        this.context.fillRect(50, 0, 400, 600)

        //white lines in the border
        this.context.fillStyle = 'white';
        this.context.fillRect(60, 0, 10, 600);
        this.context.fillRect(430, 0, 10, 600);


        //center lines
        for (let i = 0; i < 10; i++) {
            this.context.fillRect(250, i * 60, 5, 30);
        };
    }

    clear() {
        this.context.clearRect(0, 0, this.gameWidth, this.gameHeight);
    }

    start() {
        this.loop();
    }


    loop(timestamp) {

        this.drawEverything(timestamp);


        window.requestAnimationFrame(timestamp => this.loop(timestamp));
    }


    createObstacles(timestamp) {
        if (this.obstaclesTime < timestamp - this.speed) {
            const obstacle = new Obstacles(this);
            obstacle.randomPosition();
            this.obstaclesArray.push(obstacle);
            this.obstaclesTime = timestamp;
        };

    };

    checkCollision() {
        for (let i = 0; i < this.obstaclesArray.length; i++) {

            let bottomOfObstacle = this.obstaclesArray[i].position.y + this.obstaclesArray[i].height;
            let rightBorderOfCar = this.car.position.x + this.car.width;
            let leftBorderOfCar = this.car.position.x;
            let rightBorderOfObstacle = this.obstaclesArray[i].position.x + this.obstaclesArray[i].width;
            let leftBorderOfObstacle = this.obstaclesArray[i].position.x;

            if ((this.car.position.y === bottomOfObstacle) &&
                (
                    (leftBorderOfObstacle >= leftBorderOfCar && leftBorderOfObstacle < rightBorderOfCar)

                    || (rightBorderOfObstacle <= rightBorderOfCar && rightBorderOfObstacle >= leftBorderOfCar)

                    || ( leftBorderOfObstacle <= leftBorderOfCar && leftBorderOfObstacle <= rightBorderOfCar

                        && rightBorderOfObstacle >= leftBorderOfCar && rightBorderOfObstacle >= rightBorderOfCar
                ))) {

               
                this.loose = true;
            } else if (this.car.position.y === bottomOfObstacle) {
                this.score += 1;
                //to make velocity of obstacles increase with time
            }
        }
    };

    drawEverything(timestamp) {
        if (this.loose === true) {
            this.clear();
            this.context.fillStyle = 'red';
            this.context.textAlign = 'center';
            this.context.font = '30px Arial';
            this.context.fillText(`GAME OVER!`, this.gameWidth / 2, this.gameHeight / 2);
            this.context.fillStyle = 'black';
            this.context.fillText(`Your score is: ${this.score}`, this.gameWidth / 2, this.gameHeight / 2 + 50);
        } else {
            this.clear();
            this.paintGame();
            this.car.drawCar();
            this.createObstacles(timestamp);
            for (let i = 0; i < this.obstaclesArray.length; i++) {
                this.obstaclesArray[i].drawObstacles();
                this.obstaclesArray[i].movingObstacleDown();
            }
            this.checkCollision();
        }
    }

};



