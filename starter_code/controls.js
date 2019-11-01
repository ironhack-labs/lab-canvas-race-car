class Controls {
    constructor(game) {
        this.game = game;
        document.addEventListener("keydown",(e)=>
        {
        if (e.keyCode===37) {
            if (game.car.position > -130) {this.game.car.position -=10;}
            
        }
        else if (e.keyCode===39) {
            
            if (game.car.position < 130) {this.game.car.position +=10;}
        }
        
        
        
        }
        
        );    
    }
}

