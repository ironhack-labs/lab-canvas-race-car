class obstacle {
    constructor() {
        this.posibleWidth = [120, 180, 250];
        this.posibleAxisX = [
            [70, 220, 280, 310],
            [70, 120, 220, 250],
            [70, 150, 180]
        ];
        this.randomSize = {
            w: 0
            h: 25
        }
        this.randomPosition = {
            x: 0
            y: 0
        }
    }

    setRandomPosition() {
        const randNumber = Math.floor(Math.random() * (3 - 1 + 1) + 1)
        this.randomSize.w = this.posibleWidth[randNumber]
        if (this.randomSize.w === 120) {
            const randX1 = Math.floor(Math.random() * (4 - 1 + 1) + 1)
            this.randomPosition.x = this.posibleAxisX[1][randX1]
        } else if (this.randomSize.w === 180) {
            const randX2 = Math.floor(Math.random() * (4 - 1 + 1) + 1)
            this.randomPosition.x = this.posibleAxisX[2][randX2]
        } else {
            const randX3 = Math.floor(Math.random() * (3 - 1 + 1) + 1)
            this.randomPosition.x = this.posibleAxisX[3][randX3]
        }
    }

    createRandObstacle() {
        this.setRandomPosition()
        this.ctx.fillStyle = 'brown'
        this.ctx.fillRect(this.randomPosition.x, this.randomPosition.y, this.randomSize.w, this.randomSize.h)
    }
}