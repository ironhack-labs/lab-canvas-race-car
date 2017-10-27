// Board constructor function
function Board() {
    this.canvas = document.getElementById('board');
    this.ctx;
}

Board.prototype.createBoard = function() {
    this.ctx = this.canvas.getContext('2d');
    // Grey background
    this.ctx.fillStyle ='grey';
    this.ctx.fillRect(0, 0 , 600, 600);
    // Green rectangles
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 40, 600);
    this.ctx.fillRect(560, 0, 40, 600);
    // White boundaries
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(60, 0, 20, 600);
    this.ctx.fillRect(520, 0, 20, 600);
    // Dashed line
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.setLineDash([50, 60]);
    this.ctx.moveTo(300, 0);
    this.ctx.lineTo(300, 600);
    this.ctx.stroke();
};

Board.prototype.start = function() {
    this.createBoard();
};

Board.prototype.update = function() {
    this.ctx.clearRect(0, 0 , 600, 600);
    this.start();
};
