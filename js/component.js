class Component {
    constructor(x, y, w, h, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.ctx = ctx;
    

        const img = new Image;
        img.addEventListener('load', () => {
            this.img = img;
            this.drawCar();
        });

        img.src = '/images/car.png'

        
        
        
    }

drawCar() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}
}