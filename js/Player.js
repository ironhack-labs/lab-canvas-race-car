class Player extends Component {
    constructor(classGame, x, y, width, height, imageSrc) {
        super(classGame, x, y , width, height, imageSrc);

        this.immunity = false;
    }

    move() {
        document.addEventListener("keydown", (event) => {

            switch (event.code) {
                case "ArrowRight":
                case "KeyD":
                    if(this.x < 400) this.x += 10;
                    break;

                case "ArrowLeft":
                case "KeyA":
                    if(this.x > 60) this.x -= 10;
                    break;
                default:
                    console.log("Did you forget how to drive?!?")
            }
        })
    }
}