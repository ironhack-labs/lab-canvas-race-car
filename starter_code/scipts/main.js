const $canvas = document.querySelector('canvas');

const game = new Game ($canvas);
const context = $canvas.getContext('2d');

window.onload = function () {
    document.getElementById("start-button").onclick = function () {        
        //console.log("before: "+ game.running);

        if(game.running === false){
            game.startGame();   
        }




        //console.log("after: "+ game.running);
        
    };
    
};