class Game {
    // composition pattern
    car = new Car;
    obstacles = [];
    score = 0;

    start(){
        // intialize game and start rendering the game continiously
        $gameboard.classList.toggle('active');
        this.car.$car.classList.toggle('active');
        $scoreboard.classList.toggle('active');

        this.obstacles.push(new Obstacle());
        this.obstacles.push(new Obstacle());
    }   

    stop(){
        location.reload();
        return false;
    }

    render() {
        // the game manages the other game elements
        document.addEventListener("keydown", event => {
            this.car.render(event.key);
        });

        const intervalObstacleMove = setInterval(() => {
            this.obstacles.forEach((obstacle) => obstacle.render());
        }, 200);

        const intervalObstacleCreation = setInterval(() => {
            this.obstacles.push(new Obstacle());
            this.obstacles.push(new Obstacle());
        }, 4000);
    }
}

class Car {
    constructor(){
        this.$car = document.querySelector('#car');
    }
    render(eventKey) {
        if (eventKey.toLowerCase() === "arrowright") {
            if (window.innerWidth - $gameboard.offsetLeft - $gameboard.offsetWidth < window.innerWidth - this.$car.offsetLeft - this.$car.offsetWidth) {
                this.$car.style.left = `${this.$car.offsetLeft + 10}px`;
            }
        } else if (eventKey.toLowerCase() === "arrowleft"){
            if ($gameboard.offsetLeft < this.$car.offsetLeft) {
                this.$car.style.left = `${this.$car.offsetLeft - 10}px`;
            }
        }
    }
}

class Obstacle {
    constructor(){
        this.$car = document.querySelector('#car');
        this.$obstacle = document.createElement('div');
        this.$obstacle.setAttribute('class', 'obstacle');
        this.$obstacle.style.left = `${($gameboard.offsetLeft + Math.floor(Math.random() * Math.floor($gameboard.offsetWidth))-30)}px`;
        $body.appendChild(this.$obstacle);
    }
    render() {
        // obstacle dom manipution here
        this.$obstacle.style.top = `${this.$obstacle.offsetTop + 10}px`;
        
        // put obstacle interval here
        
        if (collisionDetectIon(this.$car, this.$obstacle)){
            game.score += 1;
            $scoreboard.querySelector('span').innerText = `${game.score}`;
        }
        if (game.score === 100){
            document.querySelector('#game-over').style.visibility = 'visible';
            document.querySelector('#game-over').querySelector('span').innerHTML = `${game.score}`;
            document.getElementById('start-over').onclick = () => {
                game.stop();
            }
        }
    }
}

function collisionDetectIon($dom1, $dom2) {

    let sq1 = {
        x: $dom1.offsetLeft,
        y: $dom1.offsetTop,
        width: $dom1.offsetWidth,
        height: $dom1.offsetHeight
    }

    let sq2 = {
        x: $dom2.offsetLeft,
        y: $dom2.offsetTop,
        width: $dom2.offsetWidth,
        height: $dom2.offsetHeight
    }

    if (!(sq2.y + sq2.height < sq1.y ||
            sq2.y > sq1.y + sq1.height ||
            sq2.x + sq2.width < sq1.x ||
            sq2.x > sq1.x + sq1.width
        )) {
        return true;
    } else {
        return false
    }

}

window.onload = (event) => {
    document.getElementById('start-button').onclick = () => {
        if (document.getElementById('start-button').innerHTML === "Start Game") {
            game.start();
            game.render();
            document.getElementById('start-button').innerHTML = "Stop Game";
            document.getElementById('start-button').style.backgroundColor = "#850028";
        } else if (document.getElementById('start-button').innerHTML === "Stop Game") {
            console.log('test');
            document.getElementById('start-button').innerHTML = "Start Game";
            document.getElementById('start-button').style.backgroundColor = "#00853c";
            game.stop();
        }
    }
};

let $body = document.querySelector('body');
let $gameboard = document.querySelector('#game-board');
let $scoreboard = document.querySelector('#score');
let game = new Game();