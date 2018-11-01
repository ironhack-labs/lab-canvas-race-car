window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        startGame();
    };
    var KEY_RIGHT = 39;
    var KEY_LEFT = 37;

    function Canvas(id) {
        this.canvas = document.querySelector(id);
        this.ctx = this.canvas.getContext("2d");
        this.fps = 60; //Frames per second
        this.canvas.width = 350;
        this.canvas.height = 600;
        this.obstacles = [];
        this.car = new Car(this.canvas);
        this.road = new Road(this.canvas);
        this.counter = 0;


    }
    Canvas.prototype.draw = function () {
        this.road.draw();
        this.car.draw();
        this.obstacles.forEach(function(obstacle){
            obstacle.draw();
            obstacle.y++;
        })
    }

    Canvas.prototype.start = function () {
        setInterval(function () {
            console.log(this.counter)
            if(this.counter===0||this.counter===200||this.counter===400){
                this.obstacles.push(new Obstacle(this.canvas));
            }
            this.draw();
            this.road.lineOffset = (-this.counter % 38); //line longitud +  space length
            this.counter++;
        }.bind(this), 1000 / this.fps); // Interval 60 times per second
    }

    function startGame() {
        myCanvas.start();
    }

    function Road(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.greenLineWidth = 40;
        this.greyMarginWidth = 10;
        this.whiteLineWidth = 10;
        this.roadWidth = 270;
        this.centerLineWidth = 5;
        this.lineOffset = 0;
        this.greenColor = "rgb(8,113,0)";
        this.whiteColor = "rgb(255,255,255)";
        this.greyColor = "rgb(109,109,109)";
    }
    Road.prototype.draw = function () {
        // Green lateral lines
        this.ctx.fillStyle = this.greenColor;
        // 1st green line
        this.ctx.fillRect(0, 0, this.greenLineWidth, this.canvas.height);
        // 2nd green line
        this.ctx.fillRect(this.greenLineWidth + this.roadWidth,
            0, this.greenLineWidth, this.canvas.height);
        // Gray lateral lines
        this.ctx.fillStyle = this.greyColor;
        //Road 
        this.ctx.fillRect(this.greenLineWidth,
            0, this.roadWidth, this.canvas.height);
        //Line white
        this.ctx.fillStyle = this.whiteColor;
        //1st white line
        this.ctx.fillRect(this.greenLineWidth + this.greyMarginWidth, 0, this.whiteLineWidth,
            this.canvas.height);
        //2nd white line
        this.ctx.fillRect(this.greenLineWidth + this.roadWidth -
            this.whiteLineWidth - this.greyMarginWidth, 0, this.whiteLineWidth, this.canvas.height)
        //DrawCenterLine;    
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.whiteColor;
        this.ctx.lineWidth = this.centerLineWidth;
        this.ctx.lineDashOffset = this.lineOffset;
        this.ctx.setLineDash([15, 23]);
        this.ctx.moveTo(this.greenLineWidth + (this.roadWidth / 2), 0);
        this.ctx.lineTo(this.greenLineWidth + (this.roadWidth / 2), this.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }
// CAR
    function Car(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 155;
        this.y = this.canvas.height - 150;
        this.width = 40;
        this.height = 70;
        this.img = new Image();
        this.img.src = "./images/car.png";
        this.speed = 5;
        this.setListeners();
    }

    Car.prototype.draw = function () {
        this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
    Car.prototype.setListeners = function () {
        
        document.onkeydown = function (e) {
            e.preventDefault();
            switch (e.keyCode) {
                case KEY_RIGHT:
                    this.moveRight();
                    break; 
                case KEY_LEFT:
                    this.moveLeft();
                    break;
            }
        }.bind(this); // function inside a method loose the scope this
    }

    Car.prototype.moveRight = function (){
      var finalX = this.x + this.speed;
      if(finalX < this.canvas.width - this.width- 60){ 
          this.x = finalX;
      }
    }
    Car.prototype.moveLeft = function (){
        var finalX = this.x - this.speed;
        if(finalX > 60){ 
            this.x = finalX;
        }
    }

    function Obstacle (canvas){
        this.canvas=canvas;
        this.ctx=canvas.getContext("2d");
        this.y = 0;
        this.height = 20;
        this.color="rgb(116,0,0)";
        this.setRandomValues();
    }

    Obstacle.prototype.draw = function(){
        if (this.y>this.canvas.height){
            this.y=0;
            this.setRandomValues();
        }
        this.ctx.fillStyle=this.color;
        this.ctx.fillRect(this.x,this.y,this.width,this.height);

    }

    Obstacle.prototype.setRandomValues = function(){
        this.width = 80 + Math.floor(Math.random()*100);//Random number between 80 and 290
        this.x = 60 + Math.floor(Math.random()*150);
    }
    // Instacniamos nuevo objeto del tipo Canvas
    var myCanvas = new Canvas("#canvas-game");


};