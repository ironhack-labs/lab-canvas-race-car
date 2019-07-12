class Car {
        constructor(ctx, url) {
            this._ctx = ctx
    
            this._img = new Image()
            this._img.src = url
    
            this._ballWidth = 50
            this._vel = 15
    
  //          this._posX = window.innerWidth / 2 - this._ballWidth / 2
   //         this._posY = window.innerHeight / 2 - this._ballWidth / 2
           this._posX = 220
           this._posY = 200
           this._keys= {            //Definimos las keys que controlaran el movimiento del player.
             ARROW_RIGHT: 39,
             ARROW_LEFT: 37
           }
        }
    
        draw() {
            this._ctx.drawImage(this._img, this._posX, this._posY, this._ballWidth, this._ballWidth)
        }
        moveCar() {
            document.onkeydown = e => {
                console.log('moveCar was called e.keycode is:',e.keyCode)
                console.log('keyCode: ', e.keyCode)
                console.log('keyCode: ', e.keyCode)
                switch(e.keyCode) {
                    case 39:                   //Gestion del movimiento.  
           //         case this.keys.ARROW_RIGHT:
                    if (this._posX < 410)
                    this._posX += 10
                    break;  
        
        //            case this.keys.ARROW_LEFT:
                    case 37:
                    if (this._posX > 5)
                    this._posX -= 10
                    break; 
                }
            }
          }
       
    }