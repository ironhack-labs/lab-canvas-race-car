window.onload = function() {

    var board = new Board();
    var car = new Car();
    car.setCarImage(board);

    document.getElementById("start-button").onclick = function() {
        startGame();
    };

    function startGame() {

    }
};
