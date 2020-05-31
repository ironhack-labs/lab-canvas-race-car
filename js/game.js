

class Game {
    constructor(canvasElement) {
        this.canvas = canvasElement
        this.ctx = this.canvas.getContext('2d')
        this._intervalId = null
        this._bg = new Road(this.ctx)
        this._car = new Car(this.ctx)
        this._obstacle = []
        this._intervalObs = 90
        this.counter = 0
        this.score = 0
    }

    start() {
        this._intervalId = setInterval(() => {
           if (this._checkCollisions) {
               
            if (!(this.counter % this._intervalObs)) {
                this.counter = 0
                this._obstacle.push(new Obstacle(this.ctx))
                this.score += 5
                while(this._intervalObs > 50) {
                    this._intervalObs -= 2
                }
                
            } 
            
            this._clear()
            this._draw()
            this._move()
            this._moveKeys()
            this.counter++
            this._checkCollisions()
            this._drawScore()
           } else {
               clearInterval(this._intervalId)
           }
            
        }, 1000 / 60 )
    
    }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

   _draw() {
        this._bg.draw()
        this._car.draw()
        this._obstacle.forEach(obs => obs.draw())
    }

    _move() {
        
        this._car.move()
        this._bg.move()
        this._obstacle.forEach(obs => obs.move())
    }
    
    _moveKeys() {
        document.addEventListener('keydown', (e) => {
            switch (e.keyCode) {
                case KEY_RIGHT:
                    this._car.vx = 0
                    this._car.vx += this._car.ax;
                    break;
                case KEY_LEFT:
                    this._car.vx = 0
                    this._car.vx += -this._car.ax;
                    break;
            }
        })

        document.addEventListener('keyup', (e) =>{
            switch (e.keyCode) {
                case KEY_RIGHT:
                    this._car.vx = 0;
                    break;
                case KEY_LEFT:
                    this._car.vx = 0;
                    break;
            } 
        })
    }

    _drawScore() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '26px Helvetica'
        this.ctx.strokeText(`Score: ${this.score}`, 80, 50, 100)
    }

    _checkCollisions() {
        this._obstacle.forEach(o => {
          const colX = this._car.x + this._car.w > o.x && this._car.x < o.x + o.w
          const colY = this._car.y + this._car.h > o.y && this._car.y < o.y + o.h 
          if (colX && colY) {
            this._gameOver()
          }
        })
      }

      _gameOver() {
        clearInterval(this._intervalId)
        this._lastScore()
        this.ctx.font = "80px Helvetica";
        this.ctx.textAlign = "center";
        this.ctx.fillText(
          "GAME OVER",
          this.ctx.canvas.width / 2,
          this.ctx.canvas.height / 2,
        );
      }

      _lastScore() {
        this.ctx.font = "40px Helvetica";
        this.ctx.textAlign = 'center'
        this.ctx.fillText(
            `Your score is ${this.score}`,
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 + 50
            );
        this.fillStyle = 'white' 
      }
}