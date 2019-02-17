window.onload = function() {
    document.getElementById("start-button").onclick = function() {
        var game = new startGame();
        game.init()


    };

    function startGame() {

        // Inicializados valores y propiedades reutilizables
        this.w = window.innerWidth
        this.h = window.innerHeight

        this.posX = 220 // Coche default
        this.posY = 390 // Coche default
        this.poslY = 0

        this.fps = 60
    }

    startGame.prototype.init = function() { // Iniciamos la aplicación

        this.canvasDom = document.getElementById('gamecar')
        this.ctx = this.canvasDom.getContext('2d');
        // Medidas
        this.canvasDom.setAttribute("width", "400px");
        this.canvasDom.setAttribute("height", "500px");
        this.canvasDom.setAttribute("float", "left");

        this.dibujarPista()
        this.dibujarLinea()
        this.dibujarCoche()
        this.moverCoche()
        this.moverLinea()
        this.refreshCanvas()

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

        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([30, 15])

        this.ctx.moveTo(200, this.poslY)
        this.ctx.lineTo(200, 500)
        this.ctx.stroke()

        this.ctx.beginPath()
        this.ctx.lineWidth = 10
        this.ctx.strokeStyle = 'white'
        this.ctx.setLineDash([30, 15])

        this.ctx.moveTo(200, this.poslY - 500)
        this.ctx.lineTo(200, this.poslY)
        this.ctx.stroke()

    }

    startGame.prototype.dibujarCoche = function() {

        var img = new Image(); // Create new img element
        img.src = "./images/car.png"; // Set source path

        this.ctx.drawImage(img, this.posX, this.posY, 60, 100)

    }

    startGame.prototype.moverLinea = function() {

        this.poslY += 2
        if (this.poslY > 500) this.poslY = 0;
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

    }

    startGame.prototype._moveRight = function() {
        this.posX += 10

    }


    startGame.prototype.refreshCanvas = function() {

        this.interval = setInterval(function() {

            this.ctx.clearRect(0, 0, this.w, this.h)

            this.framesCounter++;

            if (this.framesCounter > 1000) {
                this.framesCounter = 0;
            }

            // controlamos la velocidad de generación de obstáculos
            //if (this.framesCounter % 50 === 0) {
            //    this.generateObstacle();
            //}

            this.dibujarPista()
            this.dibujarLinea()
            this.dibujarCoche()
            this.moverCoche()
            this.moverLinea()

        }.bind(this), 1000 / this.fps)
    }

}