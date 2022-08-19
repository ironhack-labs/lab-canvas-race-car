class Road {
    constructor(context) {
        this.x = 0;
        this.y = 0;
        this.context = context;
        const img = new Image();
        // img.addEventListener('load', () => {
        this.img = img;
        // this.draw(context);
        // })
        img.src = 'images/road.png';
    }
    draw() {
        this.context.drawImage(this.img, this.x, this.y, 500, 700);
        // requestAnimationFrame(this.draw);
    }
}