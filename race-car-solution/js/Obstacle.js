class Obstacle {
    constructor(x, y, width, height){
        this.x = x; //initial position will always be different, tahts why we set them. in the car the position will always be the same
        this.y = y;
        this.width = width;
        this.height = height;
    }
    draw(){
        context.fillStyle = 'orange';
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}



//Having the code separated is called separation of concerns





