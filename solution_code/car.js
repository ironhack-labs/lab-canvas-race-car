'use strict';

function Car(ctx, width, height, color, x, y, type) {
    var self = this;

    self.ctx = ctx;

    self.width = width;
    self.height = height;
    self.color = color;
    self.x = x;
    self.y = y;
    self.type = type;

    if (self.type == "player") {
        self.image = new Image();
    }
}


Car.prototype.update = function() {
    var self = this;

    if(self.type == "player"){
        self.image.src = self.color;
        self.ctx.drawImage(self.image, self.x, self.y, self.width, self.height);
    } else {
        self.ctx.fillStyle = self.color;
        self.ctx.fillRect(self.x, self.y, self.width, self.height);
    }
};

Car.prototype.left = function() { 
    return self.x; 
};

Car.prototype.right = function() { 
    return (self.x + self.width); 
};

Car.prototype.top = function() { 
    return self.y; 
};

Car.prototype.bottom = function() { 
    return self.y + (self.height); 
};

Car.prototype.crashWith = function(obstacle) {
    return !((player.bottom() < obstacle.top()) ||
    (player.top() > obstacle.bottom()) ||
    (player.right() < obstacle.left()) ||
    (player.left() > obstacle.right()));
};
