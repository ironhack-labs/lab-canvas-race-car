class Game {
    constructor($canvas){
        this.canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.boundaryLeft = 65;
        this.boundaryRight = 385;
        this.obstacles = [];
        this.player = new Player(this);
        this.background = new Background(this);
        this.controls = new Controls(this);
        this.controls.setControls();
        this.obstTimer = 0
        this.coolDown = 3000
    
        
        
    }

    startGame(){
        this.drawEverything()
        this.updateEverything()
        
    }
    
    drawEverything(timestamp){
        //console.log(timestamp)
        if (this.obstTimer < timestamp - this.coolDown) {
            this.obstacles.push(new Obstacle(this))
            this.obstTimer = timestamp
        }
        this.clearCanvas();
        this.background.drawMap();
        this.background.update();
        
        for (let i = 0; i< this.obst.length; i++){
            this.obstacles[i].drawObstacle();
            this.obstacles[i].update();
        }
        
        this.player.drawCar();
        
        window.requestAnimationFrame(timestamp => this.drawEverything(timestamp));
    
    }

    updateEverything(timestamp){

    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
}