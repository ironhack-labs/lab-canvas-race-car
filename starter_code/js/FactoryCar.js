import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";
import {ConfigFondo} from "./geImagenCacheFondo.js";

export class FactoryCar {

    constructor(canvas) {

        this.canvasH = canvas.height;
        this.canvasW = canvas.width;


    }

    exe(context,image) {

        let c = new GameEntity(image);

        const relwh = image.width / image.height;
        let carH = 100;
        let carW = carH * relwh;

        let xIni = (this.canvasW - carW) / 2;
        let yIni = (this.canvasH - carH);

        let limitePista = ConfigFondo.deltaPista * 1.1;
        let rangoMovX = [limitePista, this.canvasW - limitePista];


        c.posicion.set(xIni, yIni);

        // console.log( `${carW}, ${carH}`);


        c.draw = function () {

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

        c.updateVelocidadX = function (deltaX) {
            this.velocidad.x = deltaX;
            this.posicion.x += this.velocidad.x;
            this.draw();
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
            this.draw();
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