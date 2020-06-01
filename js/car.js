class Car {
    constructor (ctx) {
        this.ctx = ctx;
        this.w = 90;
        this.h = 175;
        this.x = this.ctx.canvas.width/2    - this.w/2  ;
        this.y =  this.ctx.canvas.height - this.h ;
        this.img = new Image () ;
        this.img.src = './images/car.png' ;

        this.vx = 0;
        this.vy = 0;

        this.ax = 0;
        this.ay = 0;

        this._setListeners();

        this.actions = {
            up : false,
            down : false,
            right : false,
            left : false
        };
    }

    draw() {
        this.ctx.drawImage(this.img,
            this.x,
            this.y,
            this.w,
            this.h)
    }

    move() {
        this._setActions();

        this.vx += this.ax;
        this.vy += this.ay;

        this.x += this.vx;
        this.y += this.vy;

    }

    _checkcollisions() {
    }

    _switchActions(key, action) {
        switch (key) {
            case UP:
                this.up = action;
                break;
            case DOWN:
                this.down = action;
                break;
            case LEFT:
                this.left = action;
                break;
            case RIGHT:
                this.right = action;
                break;
        }
    }

    _setActions() {
        if (this.up) {
            this.vy -= 0;
        } else if (this.down) {
            this.vy += 0;
        } else {
            this.vy = 0;
        }

        if (this.right) {
            this.vx += 2;
        } else if (this.left) {
            this.vx -= 2;
        } else {
            this.vx = 0;
        }
    }
    
    _setListeners(keycode, action) {
        document.addEventListener('keydown', e => {
            this._switchActions(e.keyCode, true);
        });
        
        document.addEventListener('keyup', e => {
            this._switchActions(e.keyCode, false);
        });
    }

}