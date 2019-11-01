class Game {
    constructor($canvas){
        this.canvas = $canvas;
        this.context = this.canvas.getContext('2d');
        this.road = new Background(this);
        this.car = new Player(this);
        this.myControls = new Controls(this);
        this.previousTimestamp = 0;
        this.stonesArray = [];
        

    }
    startGame(){
        
        this.animateGame();
    
    }
    
    animateGame(timestamp){
        this.currentTimeStamp = timestamp;

        this.updateEverything(timestamp);
        this.drawEverything(timestamp);
        
        
        
        window.requestAnimationFrame(timestamp=>this.animateGame(timestamp));
    }

    
    drawEverything(timestamp){
        
      this.road.draw(); // or if timestamp = 0
        this.stonesArray.forEach(stone=>stone.draw());
        this.car.draw();
         
        
    }

    updateEverything(timestamp){
        if (timestamp-this.previousTimestamp > 1000) {

            
            this.stonesArray.push(new Obstacle(this));
            
            if (this.stonesArray[0].yPosition>600) { // kill passed stones
                this.stonesArray.shift();

            }


            this.previousTimestamp = timestamp;
        }


    }

}