class Game {
    constructor ($canvas){
        this.$canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.height = $canvas.height;
        this.width = $canvas.width;
        this.car = new Car (this);
        this.board = new Board(this);
        this.obstacle = new Obstacles(this);
        this.obstacles = [];
        this.keyPressed = new Controls(this);
        this.keyPressed.setBindingKeys();
        this.timer = 0;
        this.speed = 2000;
        this.alive = true;
    }

    reset(){
        this.obstacles = [];
        this.timer = 0;
        this.speed = 2000;
        this.alive = true;
        document.getElementById("lost").style.visibility = 'hidden';
        document.getElementById("reset-button").id = "start-button"
        drawEverything()
    }

    startGame() {

        console.log(document.getElementById("start-button"))
        console.log(document.getElementById("reset-button"))
        if(document.getElementById("start-button")){
                this.board.drawBoard(this);
                this.car.drawCar(this);
                this.movingObjects(0);
                this.StartToReset();
        }else{
            document.getElementById("reset-button").onclick = function (){
                console.log("its clicking!")
                this.reset();
            }
        }
    }

    StartToReset(){
        document.getElementById("start-button").innerText = "Reset"
        document.getElementById("start-button").id = "reset-button";
    }

    drawEverything(){
        this.context.clearRect(0,0,this.width,this.height);
        this.board.drawBoard(this);
        this.car.drawCar(this);

        for (let i = 0; i<this.obstacles.length;i++){
            this.obstacles[i].y += this.obstacle.vy
            this.obstacles[i].drawObstacle(this);
        }
    }
    
    carMove(key){
        switch (key){
            case 'left':
                //console.log('left')
                //this.context.clearRect(0,0,this.width,this.height);
                this.car.moveLeft();
                break;
            case 'right':
                //console.log('right')
                //this.context.clearRect(0,0,this.width,this.height);
                this.car.moveRight();
                break;
        }
    }

    movingObjects(timestamp){
        window.requestAnimationFrame(timestamp => {
            if (this.alive){
                this.movingObjects(timestamp)
            }
            })
        if(this.timer < (timestamp-this.speed)){
            this.timer = timestamp;
            let width = 50+Math.floor(Math.random()*70);
            let posX = 45+Math.floor(Math.random()*(260-width));
            let a = new Obstacles(this, posX, width)
            this.obstacles.push(a);
        }
        this.collision()
        this.drawEverything();
    }

   collision (){
    for (let i = 0; i<this.obstacles.length;i++){
        if((
            (this.car.x>this.obstacles[i].x &&
            this.car.y<(this.obstacles[i].y+this.obstacles[i].height) &&
            this.obstacles[i].y<this.height)
            )|| 
            (this.car.x+10<(this.obstacles[i].x+this.obstacles[i].width) &&
            this.car.y<(this.obstacles[i].y+this.obstacles[i].height) &&
            this.obstacles[i].y<this.height)
        ){
                this.lose();
        }
        }
    }
    

    lose(){
        console.log("you lost!")
        document.getElementById("lost").style.visibility = 'visible';
        this.alive = false;
        
    }

    
}


