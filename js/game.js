class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.invervalId = undefined;
        
        this.obstaclesInterval = 70;
        this.framesCount = 0;

        this.obstacles = [ 
            new Obstacles(ctx, this.obstacleX, this.obstacleWidth)
        ];

        this.points = 0;
        this.record = localStorage.getItem("record");
    }

    start() {
        this.setListeners();

        if(!this.invervalId){
            this.invervalId = setInterval(() => {
                this.clear()
                this.newObstacle()
                this.draw()
                this.move()
                this.checkCollisions()
                this.setDifficulty()
            }, 1000 / 60)
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
        // Clean Obstacles Array
        this.obstacles = this.obstacles.filter(obstacle => {
            return obstacle.y <= this.ctx.canvas.height
        })
    }

    draw() {
        this.background.draw();
        this.car.draw();

        this.obstacles.forEach((obstacle) => {
            obstacle.draw()
        })

        this.ctx.save()
        this.ctx.font = '20px Arial'
        this.ctx.fillText(`Score: ${this.points}`, 35, 30)
        this.ctx.restore()
    }

    move() {
        this.car.move();
        this.background.move();
        this.obstacles.forEach((obstacle) => {
            obstacle.move()
        })
    }

    pause() {
        clearInterval(this.invervalId)

        if (this.points > this.record){
            localStorage.setItem("record", this.points);
            this.record = this.points
        }
    
        this.ctx.save()
        this.ctx.fillStyle = 'rgba(0, 0, 0, 0.4)'
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    
        this.ctx.font = '35px Arial Bold'
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.fillText(
          'Game over!',
          this.ctx.canvas.width / 2,
          (this.ctx.canvas.height / 2) - 25,
        )
        this.ctx.font = '25px Arial'
        this.ctx.fillText(
            `Your points: ${this.points}`,
            (this.ctx.canvas.width / 2),
            (this.ctx.canvas.height / 2) + 15,
        )
          this.ctx.fillText(
            `Record: ${this.record}`,
            (this.ctx.canvas.width / 2),
            (this.ctx.canvas.height / 2) + 45,
        )
        this.ctx.restore()
      }

    setListeners() {
        document.onkeydown = (event) => {
            switch(event.keyCode){
                case 37:
                    this.car.vx = -10;
                    break;
                case 39:
                    this.car.vx = 10;
                    break;
            }
        }
        document.onkeyup = () => {
            this.car.vx = 0;
        }
    }

    newObstacle() {
        this.framesCount++
        if(this.obstaclesInterval === this.framesCount){
            this.obstacles.push(new Obstacles(ctx))
            this.framesCount = 0
            this.points++
        }
    }

    checkCollisions() {
        if(this.obstacles.some((obs) => this.car.collidesWith(obs))) {
            this.pause()
        }
    }

    setDifficulty() {
        if(this.points > 10 && this.points < 25){
            this.background.vy = 8
            this.obstacles.forEach((obs) => {
                obs.vy = 8
            })
            this.obstaclesInterval = 50
        } else if (this.points > 25 && this.points < 50){
            this.background.vy = 10
            this.obstacles.forEach((obs) => {
                obs.vy = 10
            })
            this.obstaclesInterval = 49
        } else if (this.points > 50 && this.points < 70){
            this.background.vy = 11
            this.obstacles.forEach((obs) => {
                obs.vy = 11
            })
            this.obstaclesInterval = 48
        } else if (this.points > 70){
            this.background.vy = 12
            this.obstacles.forEach((obs) => {
                obs.vy = 12
            })
            this.obstaclesInterval = 47
        }
    }
}