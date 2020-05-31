class Game {
    constructor(ctx) {
        this._ctx = ctx;
        this._invervalId;
        this.intervalCounter = 0;
        this.score = 0;

        this.bg = new Background(ctx);
        this.car = new Car(ctx);
        this.obstacle = [];

    }

    start() {
        this._invervalId = setInterval(() => {
            
            this._clear();
            this._draw();
            this._move();
            this._addObstacle();
            this._checkForIntersections();
            this.intervalCounter++;
        }, 1000 / 60 );
    }

    moveCar(direction) {
        switch(direction) {
            case 37:
                this.car._move('moveLeft');
                break;
            case 39:
                this.car._move('moveRight');
                break;
            default:
                return;
        }
    }

    _clear() {
        this._ctx.clearRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height);
    }

    _clearObstacles() {
        this.obstacle = this.obstacle.filter( obst => obst.y + obst.h < this._ctx.canvas.height);
    }

    _draw() {
        if(this.intervalCounter > 10000) {
            this.intervalCounter = 0;
        }
        this.bg._draw();
        this.car._draw();
        this.obstacle.forEach(item => item._draw());
    }

    _move() {
        this.bg._move();
        this.obstacle.forEach( item => item._move());
    }

    _addObstacle() {
        if(this.intervalCounter % 150 === 0) this.obstacle.push(new Obstacle(ctx));
    }

    _outputScore() {
        this._ctx.font = '36px Arial';
        this._ctx.fillStyle = 'white';
        this._ctx.fillText(`Score: ${this.score}`, 100, 60)
    }

    _gameOver() {
        clearInterval(this._invervalId);
        this._clear();
        this._ctx.fillStyle = 'black'; 
        this._ctx.fillRect(0,0,this._ctx.canvas.width,this._ctx.canvas.height); 

        this._ctx.textAlign = 'center';
        this._ctx.font = '40px Arial';

        this._ctx.fillStyle = 'red';
        this._ctx.fillText('Game Over!', this._ctx.canvas.width / 2, this._ctx.canvas.height / 2 - 50)

        this._ctx.fillStyle = 'white';
        this._ctx.fillText(`Your final score: ${this.score}`, this._ctx.canvas.width / 2 , this._ctx.canvas.height / 2)
    }

    _checkForIntersections() {
        this.obstacle.forEach( obst => {
            const colX = (this.car.x > obst.x && this.car.x < obst.x + obst.w) || (this.car.x + this.car.w > obst.x && this.car.x + this.car.w < obst.x + obst.w);
            const colY = (this.car.y > obst.y && this.car.y < obst.y + obst.h) || (this.car.y + this.car.h > obst.y && this.car.y + this.car.h < obst.y + obst.h);

            if(colX && colY) {
                this._gameOver(); 
            } else if (this.car.y + this.car.h === obst.y){
                this.score++;
                this._clearObstacles();
            } 
            this._outputScore();
        });
    }
}