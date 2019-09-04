var myGameArea= {
    canvas: document.getElementById("board"),
    frames: 0,
    start: function(){
        this.canvas.width= 500
        this.canvas.height= 600
        this.canvas.style= "background-color: black; opacity:0.5"
        this.context= this.canvas.getContext("2d")
        document.body.insertBefore(this.canvas, document.body.childNodes[3])
        this.interval= setInterval(updateGameArea, 15)
    },
    clear: function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop: function(){
        clearInterval(this.interval)
    },
    score: function(){
        var points= Math.floor(this.frames/10)
        this.context.font= "18px serif"
        this.context.fillStyle= "blue"
        this.context.fillText("score: "+ points, 400, 50)
    }
}


class component{
    constructor(width, height, src, x, y){
        this.width= width;
        this.height= height;
        this.src= src;
        this.x= x;
        this.y= y;
        this.speedX= 0;
        this.speedY= 0;
    }
    update(){
        var ctx= myGameArea.context
        var car= new Image()
        car.src= "./images/car.png"
        // car.onload = function(){
        //     ctx.drawImage(car, this.x, this.y, this.width, this.height)
        // }
    }
    newPos(){
        this.x += this.speedX
        this.y += this.speedY
    }
    left(){
        return this.x
    }
    right(){
        return this.x + this.width
    }
    top(){
        return this.y
    }
    bottom(){
        return this.y + this.height
    }
    crashWith(obstacle){
        return !(
            this.bottom()<obstacle.top() ||
            this.top()> obstacle.bottom() ||
            this.right()> obstacle.left() ||
            this.left()<obstacle.right()
        )
    }
}

var player = new component(25, 25, 135, 125)

function updateGameArea(){
    myGameArea.clear()
    player.newPos()
    player.update()
    // updateObstacles()
    // checkGameOver()
    myGameArea.score()
}

myGameArea.start()
player
myGameArea.context.fillStyle = "green"; myGameArea.context.fillRect(0, 0, 20, 600); myGameArea.context.fillRect(280, 0, 20, 600);
myGameArea.context.fillStyle = "white"; myGameArea.context.fillRect(25, 0, 5, 600); myGameArea.context.fillRect(270, 0, 5, 600); myGameArea.context.fillRect(147, 0, 3, 7); myGameArea.context.fillRect(147, 12, 3, 7)
myGameArea.context.fillRect(147, 24, 3, 7); myGameArea.context.fillRect(147, 36, 3, 7); myGameArea.context.fillRect(147, 48, 3, 7); myGameArea.context.fillRect(147, 60, 3, 7)
myGameArea.context.fillRect(147, 72, 3, 7); myGameArea.context.fillRect(147, 84, 3, 7); myGameArea.context.fillRect(147, 96, 3, 7); myGameArea.context.fillRect(147, 108, 3, 7)
myGameArea.context.fillRect(147, 120, 3, 7); myGameArea.context.fillRect(147, 132, 3, 7); myGameArea.context.fillRect(147, 144, 3, 7)
