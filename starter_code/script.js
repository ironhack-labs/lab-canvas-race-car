window.onload = function() {

    function startGame() {

    }
    
    var board = new Board();
    var car = new Car();
    car.setCarImage(board);

    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    document.onkeydown = function(event) {
        car.move(event.keyCode);
        car.setCarImage(board);
    };
};
