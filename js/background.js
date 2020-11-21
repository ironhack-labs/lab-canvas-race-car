class Background {
    constructor() {
        this.canvas=document.getElementById('canvas');
        this.context = this.canvas.getContext('2d')
        this.startLineX = 0;
        this.startLineY = 0;
        this.img = '/images/road.png';
        this.y = 0;
        this.speed=1;
    }

    createSelf() {
        let back = new Image();
        back.src = this.img;
        back.addEventListener('load', ()=>{
            this.context.drawImage(back, 0,this.y,500,700);
            if(this.speed>0){
                this.context.drawImage(back, 0, this.y+700)
            } else{
                this.context.drawImage(back, 0, this.y-700)
            }
        });
    }

    move(){
        this.y += this.speed;
        this.y %= 700;
    }


}