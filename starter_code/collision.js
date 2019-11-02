class CollisionDetection {
    constructor(game){
        this.car = game.car;
        this.allObstacles =game.stonesArray;
    }

    check() {
        if (this.allObstacles[0]){
            
            let stoneX = this.allObstacles[0].xPosition;
            
            if (stoneX+50<=this.car.position+175) 
            {console.log("collision detected"); 
            return true;}
            else return false;
            
    }
    else return false;
        
    }
    
}