class Background {
    constructor (){
        this.x = 0;
        this.y = 0;
        this.width = canvas.width;
        this.height = canvas.height;
        this.image =  new Image();
        this.image.src = 'https://orig15.deviantart.net/8bed/f/2015/058/a/8/smb1_background_by_steamerthesteamtrain-d8jq7ea.png'
    }

    draw(){
        this.x --;
        if (this.x < -canvas.width){
            this.x = 0;
        }
        ctx.drawImage(this.image,this.x,this.y,this.width,this.height);

        ctx.drawImage(
            this.image,
            this.x + this.width,
            this.y,
            this.width,
            this.height
        )

    }

    gameOver(){
        ctx.font = "80px Arial"
        ctx.fillText("Te Moriste",150,150)
    }
}