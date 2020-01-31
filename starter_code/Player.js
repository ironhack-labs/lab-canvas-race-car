//const $canvas = document.getElementsByTagName('canvas')[0];
//const canvasContext = $canvas.getContext('2d');

class Player{
    constructor(){
        this.posX = 0;
        this.posY = 0;
        this.width = 0;
        this.height = 0;
        this.image = new Image();
        this.image.src = './images/car.png';
        this.gameRunning = true;
        this.score = 0;
        this.setKeyboardEventListeners();
    }

    setKeyboardEventListeners () {
        window.addEventListener('keydown', (event) => {
            event.preventDefault();
            switch (event.key) {
              case 'ArrowRight':
                this.posX += 20;
                break;
              case 'ArrowLeft':
                this.posX -= 20;
                break;
              case 'ArrowDown':
                this.posY += 20;
                break;
              case 'ArrowUp':
                this.posY -= 20;
                break;
            }
            canvasContext.clearRect(0, 0, 500, 800);
            drawBackground();
            this.draw();
        });
    }

    setInitialPos (){
        this.width = 80;
        this.height = 100;
        const midX = $canvas.width/2 - this.width/2; 
        const midY = $canvas.height/2 - this.height/2;

        this.posX = midX;
        this.posY = midY;

        canvasContext.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    draw () {
        canvasContext.drawImage(this.image, this.posX, this.posY, this.width, this.height);
    }

    getPosX () {
        return this.posX;
    }

    getPosY () {
        return this.posY;
    }

    setPosX (x) {
        this.posX = x;
    }
    
    setPosY () {
        this.posY = y;
    }

}