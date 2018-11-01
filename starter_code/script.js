window.onload = function () {
    document.getElementById("start-button").onclick = function () {
        startGame();
    };

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
    }

    Canvas.prototype.start = function(){
        setInterval(function(){
            this.draw();
            this.road.lineOffset = (-this.counter % 38); //line longitud +  space length
            this.counter++;
        }.bind(this),1000/this.fps); // Interval 60 times per second
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
        this.ctx.fillRect(this.greenLineWidth+this.roadWidth-
            this.whiteLineWidth-this.greyMarginWidth,0,this.whiteLineWidth,this.canvas.height)
        //DrawCenterLine;    
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.whiteColor;
        this.ctx.lineWidth = this.centerLineWidth;
        this.ctx.lineDashOffset = this.lineOffset;
        this.ctx.setLineDash([15, 23]);
        this.ctx.moveTo(this.greenLineWidth+(this.roadWidth/2), 0);
        this.ctx.lineTo(this.greenLineWidth+(this.roadWidth/2),this.canvas.height);
        this.ctx.stroke();
        this.ctx.closePath();
    }

    function Car(canvas) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 200;
        this.y = 480;
    }
    Car.prototype.draw = function () {

    }

    // Instacniamos nuevo objeto del tipo Canvas
    var myCanvas = new Canvas("#canvas-game");

};