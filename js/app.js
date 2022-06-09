const raceGameApp = {
    name: 'Basic canvas application',
    author: 'Santiago Moncada',
    version: '0.1.0',
    license: undefined,
    description: 'Basic Canvas racing game',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    framesIndex: 0,
    carHeight: 100,
    car: undefined,
    obstacles: [],
    lineOffset: 0,
    scoreBoard: score,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);
        this.scoreBoard.init(this.ctx, 0, 0, 10, this.canvasSize);
        this.car = new Car(this.ctx, this.canvasSize.w / 2 - 25, this.canvasSize.h - 150, this.carHeight, this.canvasSize);
        this.setEventListeners();
        this.drawAll();
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            // w: window.innerWidth,
            // h: window.innerHeight
            w: 500,
            h: 700
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)
    },

    drawSomething() {
        this.ctx.fillRect(this.canvasSize.w / 2 - 50, this.canvasSize.h / 2 - 50, 100, 100);
    },

    drawRoad() {
        const grassGreen = "#009100";
        const roadGray = "#7f7f7f";
        const whiteLines = "#ffffff";
        const concreteWidth = 400;
        const outerLinesWidth = 350;
        const innerConcrete = 300;
        const lineWidth = 10;

        this.ctx.fillStyle = grassGreen;
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        this.ctx.fillStyle = roadGray;
        this.ctx.fillRect(this.canvasSize.w / 2 - concreteWidth / 2, 0, concreteWidth, this.canvasSize.h);
        this.ctx.fillStyle = whiteLines;
        this.ctx.fillRect(this.canvasSize.w / 2 - outerLinesWidth / 2, 0, outerLinesWidth, this.canvasSize.h);
        this.ctx.fillStyle = roadGray;
        this.ctx.fillRect(this.canvasSize.w / 2 - innerConcrete / 2, 0, innerConcrete, this.canvasSize.h);

        //draw the middle line
        this.ctx.lineWidth = lineWidth;
        this.ctx.strokeStyle = whiteLines;
        this.ctx.beginPath();
        this.ctx.setLineDash([30, 15]);
        this.ctx.lineDashOffset = -this.lineOffset;
        this.ctx.moveTo(this.canvasSize.w / 2, 0)
        this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h)
        this.ctx.stroke()
        this.ctx.closePath()

    },
    drawAll() {
        setInterval(() => {
            console.log(this.obstacles.length);
            this.clearAll();
            this.drawRoad();
            this.car.draw();

            this.obstacles.forEach(obstacle => {
                obstacle.draw();
                if (obstacle.checkForCollision(this.car.getPosition(), this.car.getSize())) {
                    alert("Game Over Score : " + this.scoreBoard.score);
                }
            });

            this.obstacles = this.obstacles.filter(obstacle => {
                if (obstacle.obstaclePos.y < this.canvasSize.h) {
                    return true;
                } else {
                    console.log("purge");
                    return false;
                }
            });

            this.lineOffset += 10;
            if (this.lineOffset > 45) {
                this.lineOffset = 0;
            }

            if (this.framesIndex % 35 === 0) {
                this.obstacles.push(new Obstacle(this.ctx, this.carHeight, this.canvasSize));
            }

            if (this.framesIndex % 20 === 0) {
                this.scoreBoard.updateScore();
            }

            this.scoreBoard.draw();
            this.framesIndex++
        }, 50)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
    setEventListeners() {
        document.onkeydown = e => {
            const { key } = e;
            switch (key) {
                case 'ArrowLeft':
                    this.car.moveLeft()
                    break;
                case 'ArrowRight':
                    this.car.moveRight()
                    break;
            }
        }
    },
}