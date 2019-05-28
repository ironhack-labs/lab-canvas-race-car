import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";

export class FactoryCar {

    constructor(canvas) {

        this.canvasH = canvas.height;
        this.canvasW = canvas.width;


    }

    exe(image) {

        let c = new GameEntity(image);

        const relwh = image.width / image.height;
        let carH = 100;
        let carW = carH * relwh;

        let xIni= (this.canvasW - carW)/2;
        let yIni= (this.canvasH - carH);





        c.posicion.set(xIni,yIni);

        // console.log( `${carW}, ${carH}`);

        c.draw = function (context) {

            const img = this.getImage();

            console.log(`${img.width}, ${img.height}`);


            context.drawImage(
                img,
                0, 0,
                img.width, img.height,

                this.posicion.x, this.posicion.y,
                carW,carH
            );


            // context.drawImage(
            //     img,
            //     0, 0,
            //     img.width, img.height,
            //     this.posicion.x, this.posicion.y,
            //     img.width, img.height
            // );
        };

        return c;
    }
}