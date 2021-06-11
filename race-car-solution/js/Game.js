class Game {
    constructor(){
        this.car = {};//we only have a car so it is an object
        this.obstacles = [];//we have several objects so we an array
        this.score = 0;
        this.obstaclesFrequency = 0;
        this.animationId = null;
        this.gameOver = false;
    }
}