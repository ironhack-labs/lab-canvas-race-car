class Game {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.context = this.canvas.getContext('2d');
        this.score = 0;
    }
    startGame() {
        this.context.clearRect(0, 0, canvas.width, canvas.height);
        this.context.drawImage(road.roadImage, 0, 0, this.canvas.width, this.canvas.height);
        this.context.drawImage(car.carImage, car.x, car.y, car.width, car.height);
        this.showScore();
    }
    updateCanvas() {
        canvasUpdate = setInterval(() => {
            this.startGame();
            obstacleArray.forEach(obstacle => {
                obstacle.draw();
                obstacle.move();
            })
        }, 50);
        points = setInterval(() => {
            this.scorePoints();
        }, 1000);
    }
    scorePoints() {
        for (let i = 0; i < obstacleArray.length; i++) {
            if(obstacleArray[i].y > car.y + car.height) {
                this.score += 1;
            }
        }
    }
    startObstacles() {
        obstacles = setInterval(() => {
            obstacleArray.push(new Obstacle());
        }, 3000);
    }
    showScore() {
        this.context.fillStyle = 'white';
        this.context.font = '20px Arial';
        this.context.fillText(`Score: ${this.score}`, 350, 30);
    }
    
    gameOver() {
        alert(`GAME OVER!\n\nYou scored ${game.score} points!`);
        button.innerText = "Play Again";
        button.addEventListener('click', () => {
            location.reload();
        })

    }
}