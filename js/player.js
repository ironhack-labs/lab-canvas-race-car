class Player {
    constructor(ctx){
        this.x = 225; // original x
        this.y = 550;
        this.ctx = ctx; // original y
        document.addEventListener('keydown', (e) =>{
            switch (e.code){
                
                case 'ArrowLeft':
                    this.moveLeft()
                    break;
        
                case 'ArrowRight':
                    this.moveRight()
                    break;    
        
            }
        });

    const img = new Image()
    img.addEventListener('load', () =>{
        this.img = img;
        this.draw();
    });

    img.src="./images/car.png"
    }

    moveLeft(){
        this.x -= 10;
    }

    moveRight(){
        this.x += 10;
    }

    draw(){
        if (!this.img) return
        this.ctx.drawImage(this.img, this.x, this.y, 50, 100);
    }

}



