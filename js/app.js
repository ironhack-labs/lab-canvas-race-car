const raceApp = {
    canvasTag: undefined,
    ctx: undefined,
    frames: 0,
    canvasSize: {
        w: 500,
        h: 700
    },
    car: undefined,
    keys: {
        left: 37,
        right: 39
    },
    obstacle: [], 
    
    init(id) {
        this.canvasTag = document.getElementById(id);
        this.ctx = this.canvasTag.getContext('2d');
        this.drawRoad();
        this.drawDashedLines();
        this.drawContinuousLines();
        this.car = new Car(this.ctx, 200, 500, 100, 200, 'car.png');
        this.drawAll();
        this.setEventListeners();
    },
    drawRoad() {
        this.ctx.fillStyle = 'green';
        this.ctx.fillRect(0, 0, 500, 700);
        this.ctx.fillStyle = 'grey';
        this.ctx.fillRect(25, 0, 450, 700);
    },
    drawDashedLines() {
        this.ctx.lineWidth = 15;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.setLineDash([100, 50]);
        this.ctx.moveTo(250, 0);
        this.ctx.lineTo(250, 700);
        this.ctx.stroke();
    },
    drawContinuousLines() {
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(45, 0);
        this.ctx.lineTo(45, 700);
        this.ctx.closePath();
        this.ctx.stroke();
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(455, 0);
        this.ctx.lineTo(455, 700);
        this.ctx.closePath();
        this.ctx.stroke();
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === this.keys.left ? this.car.move('left') : null;
            e.keyCode === this.keys.right ? this.car.move('right') : null;
        }
    },
    drawAll() {
        setInterval(() => {
            this.clearScreen();
            this.drawRoad();
            this.drawDashedLines();
            this.drawContinuousLines();
            this.car.draw();
            this.frames++;
            this.frames % 50 === 0 ? this.generateObstacle() : null;
        }, 70)
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    },
    generateObstacle() {
        // start at y = 0, have to appear in random places of x axis 
        this.obstacle = new Obstacle(this.ctx, 200, 0, 60, 10, 'red', 5) // this is an array. need to push elements


        


        console.log('NUEVO OBSTÁCULO! CUIDAO QUE VA!');
    },


}
