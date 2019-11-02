class Obstacles {
    constructor(game){
        this.height = game.height
        this.boundaryLeft = game.boundaryLeft
        this.obstMaxwidth = 180;
        this.borderRight = 250;
        this.obst = []
        this.y = -50
        this.rndmX = 0
        this.rndmObstWidth = 0
        this.veloY = 4;
        
    }
    createObstacleArray() {
    
        //let maxCanvas = 320;
    
        //let marginWidth = maxCanvas - borderRight;
        //let obstEndPoint = rndmWidth + rndmObstWidth;
        let y = 0
        for (let i = 0; i <= 50; i++) {
            this.rndmX = Math.floor((Math.random() * this.borderRight) + 1);
            this.rndmObstWidth = Math.floor((Math.random() * this.obstMaxwidth) + 100);
            //if (obst.length <= 50) {
            //console.log(obst.length)
            this.obst.push([this.rndmX, this.rndmObstWidth, y]);
            y += 100
            // } else {
            //   obst.shift();
            // }
            }
    }
    drawObstacles(i) {
        /* let rndmObstWidth = 146
        let rndmWidth = 146  */
        
        
        
            /*    if(obstEndPoint> borderRight){
               rndmObstWidth = (maxCanvas - obstEndPoint) - marginWidth
             }
             */
            //for( let i = 0 ; i < obst.length; i++){
            //console.log(i)
        
            context.fillStyle = 'darkred';
            context.save();
            context.translate(this.boundaryLeft, 0);
            context.fillRect(this.obst[i][0]/* rndmX */, this.y, this.obst[i][1]/* rndmObstWidth */, 50);
            context.restore();
            
            // }
        }
        updateObst() {
            this.y += this.veloY*0.1
        }
    }



