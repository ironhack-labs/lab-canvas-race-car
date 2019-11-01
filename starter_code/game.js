class Game {
    constructor($canvas){
        this.$canvas = $canvas;
        this.context = $canvas.getContext('2d');
        this.width = $canvas.width;
        this.height = $canvas.height;
        this.background = new Background(this);
        this.player = new Player(this);
        this.controls = new Controls(this);
        this.position = this.width / 2 - 40;
    }
}