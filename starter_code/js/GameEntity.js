import {Vector} from "./Vector.js";

export class GameEntity {

    constructor(image) {

        this.posicion = new Vector(0, 0);
        this.velocidad = new Vector(0, 0);
        this.cacheImage = image;
        this.estado = null;
    }

    getEstado() {
        return this.estado;
    }

    getImage() {
        return this.cacheImage;
    }


}