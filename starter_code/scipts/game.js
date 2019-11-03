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
        this.obstTimer = 0;
        this.coolDown = 1500
        this.positionY = this.player.positionY;
        this.positionX = this.player.positionX;
        this.playerWidth = this.player.width;

    
        
        
    }

    startGame(){
        this.animation()
        console.log("player:: positionX: " + this.positionX)
        console.log("player:: positionY: " + this.positionY)
        
    }
    
    drawEverything(timestamp){
        //console.log(timestamp)
       /*  this.clearCanvas();
        if (this.obstTimer < timestamp - this.coolDown) {
            this.obstacles.push(new Obstacle(this))
            this.obstTimer = timestamp
        }
        this.background.drawMap();
        
        for (let i = 0; i< this.obst.length; i++){
            this.obstacles[i].drawObstacle();
            this.obstacles[i].update();
        } */
        
        this.player.drawCar();


        this.clearCanvas()
        this.background.drawMap();
        this.player.drawCar();

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].drawObstacle();
        }

        
        
    }
    
    updateEverything(timestamp){
        this.background.update();
        
        
        
        if (this.obstTimer < timestamp - this.coolDown) {
            this.obstacles.push(new Obstacle(this))
            this.obstTimer = timestamp
        }
        //console.log(this.obstTimer)
        //console.log(this.obstacles)
        
        
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].updateObst();
            //console.log(this.obstacles[0].y)   
        }
        
        this.colisionCheck();
        for (let i = 0; i<this.obstacles.length; i++){
            if (this.obstacles[i].y > 610){
                this.obstacles.splice(i, 1);
                //console.log(this.obstacles)
            }
            
        }
        
        
    }
    
    animation(timestamp){
        this.drawEverything();
        this.updateEverything(timestamp);
        window.requestAnimationFrame(timestamp => this.animation(timestamp));
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
    colisionCheck(){
        for ( let i = 0; i<this.obstacles.length; i++){
            //console.log(this.obstacles[0].y)
            //console.log(this.positionY)
            //console.log("positionX: " + this.positionX)
            //console.log("Obstacle " + i + " " + this.obstacles[i].rndmX)
            if ( this.positionX +2 > this.obstacles[i].rndmX && this.positionX +58 < this.obstacles[i].rndmObstWidth && this.obstacles[i].y === 512 || this.obstacles[i].y === 514 || this.obstacles[i].y === 516 ){
                console.log(this.positionX + 2 +">"+ this.obstacles[i].rndmX)
                console.log(this.positionX + 58 +"<"+ this.obstacles[i].rndmObstWidth)
                console.log(this.obstacles[i].y +"==="+ 512)
                
                console.log("CRASH!!!")
            }
        }

    } 
}