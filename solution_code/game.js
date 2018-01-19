'use strict';

function Game(parentElement) {
    var self = this;

    self.canvas = document.createElement("canvas");

    self.myObstacles = [];
    self.points = 0;
    self.frames = 0;
    self.lines = 0;

    self.canvas.width = screen.width - screen.width * 0.7;
    self.canvas.height = screen.height - screen.height * 0.25;
    self.ctx = self.canvas.getContext("2d");

    parentElement.append(self.canvas);
}

Game.prototype.start = function () {
    var self = this;

    self.car = new Car(self.ctx, 30, 70, "./images/car.png", (self.canvas.width / 2) - 15, self.canvas.height - 100, "player");

    self.frames = 0;
    self.lines = 0;

    self.reqAnimation = window.requestAnimationFrame(function () {
        self.updateGameArea();
    });

    self.handleKeyDown = function (e) {
        if (e.keyCode == 39 && self.car.x < (self.canvas.width - self.car.width - 55)) {
            self.car.x += 30;
        }
        if (e.keyCode == 37 && self.car.x > 55) {
            self.car.x -= 30;
        }
    };

    document.addEventListener('keydown', self.handleKeyDown);
}

Game.prototype.drawBackground = function() {
    var self = this;

    self.ctx.fillStyle = "green";
    self.ctx.fillRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.fillStyle = "grey";
    self.ctx.fillRect(30, 0, self.canvas.width - 60, self.canvas.height);
    self.ctx.fillStyle = "white";
    self.ctx.fillRect(40, 0, 10, self.canvas.height);
    self.ctx.fillRect(self.canvas.width - 50, 0, 10, self.canvas.height);
    for (var i = 0; i < Math.ceil(self.canvas.height / 35); i++) {
        self.lines += 0.1;
        self.ctx.fillRect(self.canvas.width / 2 - 5, 40 * i + (self.lines % 40), 5, 20);
    }
};

Game.prototype.drawObstacles = function () {
    if (self.frames % 140 === 0) {
        minWidth = (self.canvas.width - 80) * 0.3;
        maxWidth = (self.canvas.width - 80) * 0.7;
        width = minWidth + Math.floor(Math.random() * (maxWidth - minWidth));
        posX = 40 + (Math.floor(Math.random() * (self.canvas.width - 80 - width)));
        self.myObstacles.push(new Component(width, 20, "#870007", posX, 0));
    }
};

Game.prototype.clear = function() {
    var self = this;

    self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
};

Game.prototype.score = function() {
    var self = this;

    self.points = (Math.floor(self.frames / 5));
    self.ctx.font = '20px Verdana';
    self.ctx.fillStyle = 'white';
    self.ctx.fillText('Score: ' + self.points, 60, 40);
};

Game.prototype.stop = function() {
    var self = this;

    cancelAnimationFrame(self.reqAnimation);
    self.gameOver();
};

Game.prototype.gameOver=  function() {
    var self = this;

    self.clear();
    self.drawFinalPoints();


    document.removeEventListener('keydown', self.handleKeyDown);
};

Game.prototype.drawFinalPoints = function() {
    var self = this;

    self.ctx.fillStyle = "black";
    self.ctx.fillRect(0, 0, self.canvas.width, self.canvas.height);
    self.ctx.font = '34px Verdana';
    self.ctx.fillStyle = '#870007';
    self.ctx.fillText('Game Over!', 100, 250);
    self.ctx.fillStyle = 'white';
    self.ctx.fillText('Your final score', 70, 300);
    self.ctx.fillText(self.points, 150, 340);
};

Game.prototype.updateGameArea =function() {
    var self = this;

    for (var i = 0; i < self.myObstacles.length; i += 1) {
        if (self.car.crashWith(self.myObstacles[i])) {
            self.stop();
            return;
        }
    }
    self.clear();
    self.drawBackground();
    self.drawObstacles();
    self.frames += 1;
    for (i = 0; i < self.myObstacles.length; i += 1) {
        self.myObstacles[i].y += 1;
        self.myObstacles[i].update();
    }
    self.car.update();
    self.score();
    self.reqAnimation = window.requestAnimationFrame(function () {
        self.updateGameArea();
    });
};
