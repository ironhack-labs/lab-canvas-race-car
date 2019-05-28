import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";


export class FactoryObstaculo {

    constructor(canvas) {

        this.canvasH = canvas.height;
        this.canvasW = canvas.width;


    }

    exe(context, y) {


        let obstaculo = new GameEntity(null);

      //  obstaculo.w=Math.random(this.canvasW-)

        //son 5pox para los espejos de lcarro
        let limitePista1 = ConfigGame.limiteXIni(this.canvasW);
        let limitePista2 = ConfigGame.limiteXFin(this.canvasW);


        obstaculo.posicion.set(xIni, yIni);


        obstaculo.draw = function () {

            const img = this.getImage();

            console.log(`${img.width}, ${img.height}`);

            context.drawImage(
                img,
                0, 0,
                img.width, img.height,

                this.posicion.x, this.posicion.y,
                carW, carH
            );

        };

        obstaculo.updateVelocidadX = function (deltaX) {
            this.velocidad.x = deltaX;
            this.posicion.x += this.velocidad.x;

            if(this.posicion.x< rangoMovX[0]){
                this.posicion.x=rangoMovX[0];
            }
            if(this.posicion.x> rangoMovX[1]){
                this.posicion.x=rangoMovX[1];
            }
            this.draw();
        };


        obstaculo.moveR = function () {
          this.updateVelocidadX(10);
        };

        obstaculo.moveL = function () {
            this.updateVelocidadX(-10);
        };

        obstaculo.updateVelocidadY = function (deltaY) {
            this.velocidad.y = deltaY;
            this.posicion.y += this.velocidad.y;
            this.draw();
        };

        obstaculo.moveU = function () {
            this.updateVelocidadY(-10);
        };

        obstaculo.moveD = function () {
            this.updateVelocidadY(10);
        };

        return obstaculo;
    }
}