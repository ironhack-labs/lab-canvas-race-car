window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        var game = new startGame();
        game.dibujarPista()
        game.dibujarLinea()
        game.dibujarCoche()
        game.moverCoche()
        game.moverLinea()


    };

    function startGame() {

        // Inicializados valores y propiedades reutilizables
        this.canvasDom = document.getElementById('gamecar')
        this.ctx = this.canvasDom.getContext('2d');
        this.posX = 220 // Coche defaul
        this.posY = 390 // Coche default




        // Medidas
        this.canvasDom.setAttribute("width", "400px");
        this.canvasDom.setAttribute("height", "500px");
        this.canvasDom.setAttribute("float", "left");

    }

    startGame.prototype.init = function() { // Iniciamos la aplicación

    }


    startGame.prototype.dibujarPista = function() {
        this.ctx.fillStyle = 'green'
        this.ctx.fillRect(0, 0, 400, 500);

        this.ctx.fillStyle = 'grey'
        this.ctx.fillRect(30, 0, 340, 500);

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(40, 0, 10, 500);

        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(350, 0, 10, 500);

        this.ctx.fillStyle = 'white'
    }

    startGame.prototype.dibujarLinea = function() {

        var posY = 0

        setInterval(function() { //Pendiente de revisión, no funciona el movimiento
            posY += 1
        }.bind(this), 10)


        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([30, 15])

        this.ctx.moveTo(200, posY)
        this.ctx.lineTo(200, 500)
        this.ctx.stroke()


    }

    startGame.prototype.moverLinea = function() {

        setInterval(function() {

            this.ctx.moveTo(200, 0)
        }.bind(this), 10)

        this.dibujarLinea
    }

    startGame.prototype.dibujarCoche = function() {

        var img = new Image(); // Create new img element
        img.src = "./images/car.png"; // Set source path
        img.onload = function() {
            this.ctx.drawImage(img, this.posX, this.posY, 60, 100)
        }.bind(this)

    }

    startGame.prototype.moverCoche = function() {


        document.onkeyup = function(e) {
            switch (e.keyCode) {
                case 39:
                    this._moveRight()
                    break;
                case 37:
                    this._moveLeft()
                    break;
            }
        }.bind(this)
    }

    startGame.prototype._moveLeft = function() {
        this.posX -= 10
        this._refreshCanvas()
    }

    startGame.prototype._moveRight = function() {
        this.posX += 10
        this._refreshCanvas()
    }


    AnimateApp.prototype._refreshCanvas = function() {
        this.ctx.clearRect(0, 0, this.w, this.h)
            // this.ctx.fillRect(this.posX, this.h / 2 - 50, 100, 100)
    }








}