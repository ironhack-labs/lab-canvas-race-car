import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";
import {ConfigGame} from "./ConfigGame.js";

export class FactoryCar {

    constructor(canvas) {

        this.canvasH = canvas.height;
        this.canvasW = canvas.width;
        this.carW=null;


    }

    getCarW(){
        return this.carW;
    }

    exe(context,image) {

        let c = new GameEntity(image);

        const relwh = image.width / image.height;
        let carH = ConfigGame.carH;
        let carW = carH * relwh;

        this.carW=carW;

        let xIni = (this.canvasW - carW) / 2;
        let yIni = (this.canvasH - carH *1.1);

        //son 5pox para los espejos de lcarro
        let limitePista1 = ConfigGame.limiteXIni(this.canvasW)+5;
        let limitePista2 = ConfigGame.limiteXFin(this.canvasW)-carW+5;

        let rangoMovX = [limitePista1, limitePista2];



        c.posicion.set(xIni, yIni);



        c.draw = function () {

            const img = this.getImage();


            context.drawImage(
                img,
                0, 0,
                img.width, img.height,

                this.posicion.x, this.posicion.y,
                carW, carH
            );

        };

        c.updateVelocidadX = function (deltaX) {
            this.velocidad.x = deltaX;
            this.posicion.x += this.velocidad.x;

            if(this.posicion.x< rangoMovX[0]){
                this.posicion.x=rangoMovX[0];
            }
            if(this.posicion.x> rangoMovX[1]){
                this.posicion.x=rangoMovX[1];
            }

        };


        c.moveR = function () {
          this.updateVelocidadX(10);
        };

        c.moveL = function () {
            this.updateVelocidadX(-10);
        };

        c.updateVelocidadY = function (deltaY) {
            this.velocidad.y = deltaY;
            this.posicion.y += this.velocidad.y;

        };

        c.moveU = function () {
            this.updateVelocidadY(-10);
        };

        c.moveD = function () {
            this.updateVelocidadY(10);
        };

        return c;
    }
}