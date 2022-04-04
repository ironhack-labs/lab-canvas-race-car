const animatedApp = {
    name: "Animated App",
    description: "lab about a car race",
    version: "1.0.0",
    author: "Gaby",
    license: undefined,
    canvasNode: undefined,
    ctx: undefined,
    gameSize: { w: undefined, h: undefined },
    car: undefined,
    obst: [],
    framesIndex: 0,

    init(canvasID) {
        this.canvasNode = document.querySelector(`#${canvasID}`);
        this.ctx = this.canvasNode.getContext("2d");
        console.log("EL CONTEXTO:", this.ctx);

        this.setDimensions();
        this.setEventListeners();
        this.createCar();
        this.start();
    },

    setDimensions() {
        this.gameSize = {
            w: 500,
            h: 700,
        };
    },

    setEventListeners() {
        document.onkeydown = (event) => {
            const { key } = event;
            if (key === "ArrowLeft") {
                this.car.moveLeft();
            }
            if (key === "ArrowRight") {
                this.car.moveRight();
            }
        };
    },

    drawAll() {
        this.drawRoad();
        this.drawWhiteLines();
        this.drawDashedLine();
        this.drawCar();
        this.drawObst();
    },

    start() {
        setInterval(() => {
            this.clearAll();
            this.moveObst();
            this.checkFames();
            this.drawAll();

            this.framesIndex++;
        }, 30);
    },

    clearAll() {
        this.ctx.clearRect(0, 0, this.gameSize.w, this.gameSize.h);
    },
    createCar() {
        this.car = new Car(this.ctx, this.gameSize, 214, 550, 35, 75);
    },

    createObst() {
        this.obst.push(new Obstacle(this.ctx, this.gameSize, 10));
    },

    moveObst() {
        this.obst.forEach((element) => {
            element.move();
        });
    },

    checkFames() {
        if (this.framesIndex % 25 === 0) {
            this.createObst();
        }
    },

    drawObst() {
        this.obst.forEach((element) => {
            element.drawRandomObstacle();
        });
    },

    drawCar() {
        this.car.draw();
    },

    drawRoad() {
        this.ctx.fillStyle = "grey";
        this.ctx.fillRect(
            this.gameSize.w / 2 - 225,
            this.gameSize.h / 2 - 350,
            this.gameSize.w - 50,
            this.gameSize.h
        );
    },
    //this is an empty rect
    drawWhiteLines() {
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "white";
        this.ctx.strokeRect(
            this.gameSize.w / 2 - 200,
            this.gameSize.h / 2 - 375,
            this.gameSize.w - 100,
            this.gameSize.h + 50
        );
    },

    drawDashedLine() {
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = "white";

        this.ctx.setLineDash([60, 20]); // <--

        this.ctx.beginPath();
        this.ctx.moveTo(this.gameSize.w / 2, 0);
        this.ctx.lineTo(this.gameSize.w / 2, 700);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.setLineDash([]);
    },

    generateRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    },
};
