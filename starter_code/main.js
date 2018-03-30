window.onload = function () {
    document.getElementById('start-button').onclick = function () {
        var game = new Game('my-canvas');       
            $('#my-canvas').show();   
        game.start();
    };
    
    
};
