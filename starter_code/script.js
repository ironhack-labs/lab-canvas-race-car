window.onload = function() {

    document.getElementById("start-button").onclick = function() {
        var app = new StartGame()

        app.init("racer")
        app._drawCar("img/car.png")
            /* setInterval(function() {
                 app._printGreen()
                 app._printGrey()
                 app._drawLineLeft()
                 app._drawLineRigth()
                 app._drawLineCenter()
                 app._drawCar("img/car.png")
                 app._moveCar()


                 this.posX += this.dir




             }.bind(this), 60)
             */
    }.bind(this);

    function StartGame() {
        this.version = "1.0"
        this.name = "Racer"
        this.canvas = undefined
        this.ctx = undefined
        this.wt = undefined
        this.ht = undefined
        this.posX = 0
        this.dir = 0
        this.positionCar = 140


    }

    StartGame.prototype.init = function(id) {
        this.canvas = document.getElementById(id)
        this.ctx = this.canvas.getContext("2d")
        this._dimensions()
        this._printGreen()
        this._printGrey()
        this._drawLineLeft()
        this._drawLineRigth()
        this._drawLineCenter()
        this._drawCar()
        this._setHandlers()
            //this._refresh()
        this._moveCar()

    }
    StartGame.prototype._dimensions = function() {
        var backgroundWidth = window.innerWidth
        var backgroundHeigth = window.innerHeight

        this.canvas.setAttribute("width", backgroundWidth)
        this.canvas.setAttribute("height", backgroundHeigth)
        this.wt = backgroundWidth
        this.ht = backgroundHeigth

    }



    console.log("qué volá!!")
    StartGame.prototype._printGreen = function() {
        this.ctx.fillStyle = "green"
        this.ctx.fillRect(0, 0, 360, 10000)

    }
    StartGame.prototype._printGrey = function() {
        this.ctx.fillStyle = "grey"
        this.ctx.fillRect(17, 0, 320, 10000)


    }
    StartGame.prototype._drawLineLeft = function() {
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(30, 0, 10, this.ht)
    }
    StartGame.prototype._drawLineRigth = function() {
        this.ctx.fillStyle = "white"
        this.ctx.fillRect(310, 0, 10, this.ht)
    }
    StartGame.prototype._drawLineCenter = function() {

        this.ctx.lineWidth = 5
        this.ctx.beginPath();
        this.ctx.setLineDash([18, 80])
        this.ctx.moveTo(175, 0);
        this.ctx.lineTo(120, 3000);
        this.ctx.strokeStyle = "white"
        this.ctx.stroke();
    }
    StartGame.prototype._drawCar = function(url) {
        var img = new Image();
        img.src = url;

        img.onload = function() {

            this.ctx.drawImage(img, this.positionCar, 500, 60, 100)
        }.bind(this)

    }
    StartGame.prototype._setHandlers = function() {

        window.onresize = function() {
            this._dimensions()
        }.bind(this)

    }


    StartGame.prototype._moveCar = function() {

        document.onkeyup = function(e) {
            switch (e.keyCode) {
                case 39:
                    this._moveRight()
                    this._refresh()
                    break;
                case 37:
                    this._moveLeft()
                    this._refresh()
                    break;

            }
        }.bind(this)


    }
    StartGame.prototype._controlMove = function() {
        if (this.positionCar === this.wt - 100) this._moveRight()
        if (this.positionCar === 0) this._moveLeft()

    }
    StartGame.prototype._moveLeft = function() {
        this.positionCar -= 20
        this._refresh()
    }

    StartGame.prototype._moveRight = function() {
        this.positionCar += 20
        this._refresh()
    }
    StartGame.prototype._refresh = function() {
        console.log("hahahahahaahahaha")
        this.ctx.clearRect(0, 0, this.wt, this.ht)
        console.log("jajajajajajahaha")
        this.ctx.fillRect //(this.positionCar, this.h / 2 - 50, 100, 100)
        this._printGreen()
        this._printGrey()
        this._drawLineLeft()
        this._drawLineRigth()
        this._drawLineCenter()
        this._drawCar("img/car.png")
        this._moveCar()
            // this._controlMove()

    }


};