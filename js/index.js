let btnText = document.getElementsByClassName("description");
let button = document.getElementById("start-button");
let game = new Game();
let road = new Road();
let car= new Car();
let obstacleArray = [];
let obstacles;
let canvasUpdate;
let points;


window.onload = () => {
    document.getElementById('start-button').onclick = () => {
    game.startObstacles();
    game.updateCanvas();
    };
}

document.addEventListener('keydown', event => {
    switch (event.code) {
        case 'ArrowLeft':
        case 'KeyA':
            if(car.x > 55) car.x -= 20;
            break;
        case 'ArrowRight':
        case 'KeyD':
            if(car.x <= game.canvas.width - car.width - 55) car.x += 20;
        break;
    }
});