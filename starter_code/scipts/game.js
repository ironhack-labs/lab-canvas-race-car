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
        this.playerWidth = this.player.width;
        this.points = 0
        this.pointsTimer = 0
        this.rounds = 69
        this.running = false;
    
        
        
    }

    startGame(){
        this.restart();
        this.animation();
        
        
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
        
        this.roundsDisplay();
        this.pointsDisplay();
        if (this.pointsTimer < timestamp - this.coolDown) {
            this.points += 5;
            this.pointsTimer = timestamp
        }
        //console.log("<<<--- Points: " + this.points + " --->>>")
        //console.log("ROUNDS:" + this.rounds)
        
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
        if (this.rounds <= 0) {
            this.gameOverScreen();
        } else {
            this.running = true;
            this.drawEverything();
            this.updateEverything(timestamp);
            window.requestAnimationFrame(timestamp => this.animation(timestamp));
        }
    }

    clearCanvas() {
        this.context.clearRect(0, 0, this.width, this.height);
    }
    
    colisionCheck(){
        for ( let i = 0; i<this.obstacles.length; i++){

            let playerStart = this.player.positionX + 2;
            let playerEnd = this.player.positionX + 58;
            let obstStart = this.obstacles[i].rndmX;
            let obstEnd = obstStart + this.obstacles[i].rndmObstWidth;
            let obstYStart = this.obstacles[i].y;
            let obstYEnd = obstYStart + this.obstacles[i].height
            let playerYStart = this.player.positionY;
            let playerYEnd = playerYStart + this.player.height

            if( obstYEnd >= playerYStart && obstYEnd <= playerYEnd){
                if (this.player.positionX + 2 > obstStart && playerStart < obstEnd || 
                    playerEnd > obstStart && playerEnd < obstEnd){
                    
                    this.rounds--;
                        
                    this.context.save();
                    this.globalAlpha = 0.1;
                    this.context.fillStyle = 'darkred';
                    this.context.fillRect(0, 0, this.width, this.height);
                    this.context.restore();

                    //this.context.fillStyle = 'grey';
                    //this.context.fillRect(this.player.positionX, this.player.positionY, this.player.width, this.player.height);
                    //this.context.clearRect(this.player.positionX, this.player.positionY, this.player.width, this.player.height);
                    
                    /* this.context.save();
                    this.context.globalAlpha = 0.2;
                    this.context.drawImage(this.player.image, this.player.positionX, this.player.positionY, this.player.width, this.player.height);
                    this.context.restore(); */

                    //console.log("CRASH!!!");
                }
            }
        }

    }
    
    pointsDisplay(){
        this.context.save();
        this.context.fillStyle = 'black'
        this.context.font = "bold 30px Arial";
        this.context.fillText("SCORE: " + this.points, this.boundaryLeft + 5, 35);
        this.context.restore();
    }

    gameOverScreen(){
        this.running = false;
        this.context.fillStyle = 'darkred';
        this.context.fillRect(0, 0, this.width, this.height)
        this.context.font = "bold 80px Arial";
        this.context.fillStyle = 'firebrick';
        this.context.fillText("¯\\_(ツ)_/¯", this.boundaryLeft+5, 250)
        this.context.fillStyle = 'black';
        this.context.fillText("YOU", this.boundaryLeft +100 , this.height / 2 - 100);
        this.context.fillText("LOSE", this.boundaryLeft +75 , this.height / 2 +10 );
        /* this.context.fillStyle = 'grey';
        this.context.font ="30px Arial";
        this.context.fillText("Your final score", this.boundaryLeft+75, this.height-200)
        this.context.fillStyle = 'black';
        this.context.font ="50px Arial";
        this.context.filltext(this.points, this.width/2, this.height-150) */


    }

    restart(){
        this.rounds = 69
        this.points = 0
    }

    roundsDisplay(){
        if (this.rounds === 69 ){
            this.context.drawImage(this.player.image, this.boundaryRight, 40,20, 30);
            this.context.drawImage(this.player.image, this.boundaryRight+30, 40,20, 30);
            this.context.drawImage(this.player.image, this.boundaryRight+60, 40,20, 30);
        }else if(this.rounds === 46){
            this.context.drawImage(this.player.image, this.boundaryRight+30, 40,20, 30);
            this.context.drawImage(this.player.image, this.boundaryRight+60, 40,20, 30);
        }else if (this.rounds === 23) {
            this.context.drawImage(this.player.image, this.boundaryRight + 60, 40, 20, 30);
        }

    }
}