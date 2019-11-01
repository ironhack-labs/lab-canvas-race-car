class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.width = 100;
        this.height = 100;
        this.carImage = new Image();
        this.carImage.src = 'images/car.png'
    }

    drawPlayer() {
        context.drawImage(this.carImage, this.col, this.row, 40, 70);
    }

    checkCollision(a, b) {
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2) < a.radius + b.radius;
      }


    moveRight() {
        this.col += 10;
    }

    moveLeft() {
        this.col -= 10;
    }

    carControls() {
        window.addEventListener("keydown", event => {
            event.preventDefault();

            switch (event.keyCode) {
                case 39:
                    console.log(this.col)
                    this.moveRight()
                    break;

                case 37:
                    console.log(this.col)
                    this.moveLeft()
                    break;
            }
        })
    }
};