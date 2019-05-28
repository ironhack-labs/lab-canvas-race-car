import {GameEntity} from "./GameEntity.js";

export class FactoryFondo {

    constructor() {
    };

    exe(context,image) {
        let f = new GameEntity(image);
        f.posicion.set(0, 0);

        f.draw = function () {

            context.drawImage(this.getImage(),
                0, 0,
                this.cacheImage.width, this.cacheImage.height)

        };

        return f;
    }
}