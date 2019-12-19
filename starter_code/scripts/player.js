class Player extends Component {
    constructor(game, x, y, w, h) {
        super(game, x, y, w, h);
    }

    // moves the car
    move() {
        document.onkeydown = event => {
            const key = event.keyCode;
            const possibleKeystrokes = [37, 65, 38, 87, 39, 83, 40, 68];
            if (possibleKeystrokes.includes(key)) {
                event.preventDefault();
                switch (key) {
                    case 37:
                    case 65:
                        if (this.x >= 10) this.x -= 20;
                        break;
                    case 38:
                    case 87:
                        if (this.y >= 10) this.y -= 20;
                        break;
                    case 39:
                    case 83:
                        if (this.x <= 490 - this.width) this.x += 20;
                        break;
                    case 40:
                    case 68:
                        if (this.y <= 690 - this.height) this.y += 20;
                        break;
                }
            }
        };
    }
    
    // gets the left position
    getLeft() {
        return this.x + 15;
    }

    // gets the top right position
    getRight() {
        return this.x + this.width - 15;
    }

    // // gets the top position
    getTop() {
        return this.y + 15;
    }

    // gets the bottom position
    getBottom() {
        return this.y + this.height - 15;
    }

    // detects the collision of the car and obstacles
    detectCollision(otherComp) {
        const crossLeft = otherComp.x <= this.getRight() && otherComp.x >= this.getLeft();

        const crossRight = otherComp.x + otherComp.width >= this.getLeft() && otherComp.x + otherComp.width <= this.getRight();

        const crossTop = otherComp.y <= this.getBottom() && otherComp.y >= this.getTop();

        const crossBottom = otherComp.y + otherComp.height >= this.getTop() && otherComp.y + otherComp.height <= this.getBottom();

        if((crossLeft || crossRight) && (crossTop || crossBottom)) {
            return true;
        } else {
            return false;
        }
    }
}