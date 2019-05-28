import {GameEntity} from "./GameEntity.js";
import {Vector} from "./Vector.js";

export class FactoryCar {
    constructor() {
        this.posicionInicial = new Vector(100, 100);
    }

    exe(image) {

        let c = new GameEntity(image);
        c.posicion.setVector(this.posicionInicial);

        return c;
    }
}