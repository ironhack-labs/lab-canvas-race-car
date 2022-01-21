const drawGame = {
    appName: 'Island Race Car',
    author: 'Guillermo Pérez',
    version: '1.0.0',
    license: undefined,
    size: { 
        w: undefined, 
        h: undefined 
    },
    canvas: document.querySelector('#canvas'),
    ctx: undefined,
    car: undefined,
    arr: [],
    framesIndex: 0,
    init() {
        this.setContext();
        this.setSize();
        this.createCar();
        this.drawAll();
        this.setEventHandlers();
    },
    setContext() {
        this.ctx = this.canvas.getContext('2d');
    },
    setSize() {
        this.size = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.canvas.setAttribute('width', this.size.w / 2);
        this.canvas.setAttribute('height', this.size.h);
    },
    drawRectangle() {
        this.ctx.fillStyle = 'grey';
        this.ctx.fillRect(50, 0, this.canvas.width - 100, this.canvas.height);
    },
    drawRegularLines() {
        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(80, 0);
        this.ctx.lineTo(80, this.canvas.width);
        this.ctx.stroke();
        this.ctx.closePath();

        this.ctx.lineWidth = 20;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.moveTo(690, 0);
        this.ctx.lineTo(690, this.canvas.width);
        this.ctx.stroke();
        this.ctx.closePath();
    },
    drawDashedLines() {
        this.ctx.lineWidth = 10;
        this.ctx.strokeStyle = 'white';
        this.ctx.beginPath();
        this.ctx.setLineDash([60, 20]);
        this.ctx.moveTo(370, 0);
        this.ctx.lineTo(370, this.canvas.width);
        this.ctx.stroke();
        this.ctx.closePath();
        this.ctx.setLineDash([0, 0]);
    },
    pressStart() {
        this.init();
        this.collision();
        this.framesIndex;
        this.framesIndex % 50 === 0 ? this.createObstacles() : null;
        setInterval(() => {
            this.arr.forEach(elm => {
                elm.move();
                elm.draw();
            });
        }, 50);
    },
    createCar() {
        this.car = new Car(this.ctx, 325, 550, 80);
    },
    createObstacles() {
        this.arr.push(new Obstacles(this.ctx, 350, this.size));
    },
    collision() {
        if (this.createCar().carPos.x < this.createObstacles().obsPos.x + this.createObstacles().obsSize.w &&
        this.createCar().carPos.x + this.createCar().carSize.w >  this.createObstacles().obsPos.x &&
        this.createCar().carPos.y < this.createObstacles().obsPos.y + this.createObstacles().obsSize.h &&
        this.createCar().carSize.h + this.createCar().carPos.y > this.createObstacles().obsPos.y) {
            alert('COLISIOOOOON');
        }
    },
    drawAll() {
        setInterval(() => {
            this.clearAll();
            this.drawRectangle();
            this.drawRegularLines();
            this.drawDashedLines();
            this.car.draw();
        }, 50);
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.size.w, this.size.h);
    },
    setEventHandlers() {
        document.addEventListener('keydown', event => {
            const { key } = event;
            key === 'ArrowRight' ? this.car.moveRight() : null;
            key === 'ArrowLeft' ? this.car.moveLeft() : null;
        });
    }
}