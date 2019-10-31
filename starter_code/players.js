class Player {
    constructor(col, row) {
        this.col = col;
        this.row = row;
    }
    moveRight() {
        this.col += 10;
    }

    moveLeft() {
        this.col -= 10;
    }
}