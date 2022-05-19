class Collision {
    constructor (rect1, rect2) {
        this.aLeft = rect1.position.x;
        this.aTop = rect1.position.y;
        this.aRight = rect1.position.r + rectl.size.x;
        this.aBottom = rect1.position.y + rectl.size.y;

        this.bLeft = rect2.position.x;
        this.bTop = rect2.position.y;
        this.bRight = rect2.position.r + rect2.size.r;
        this.bBottom = rect2.position.y + rectz.size.y;
        this.overlapped();
    }

    overlapped(){
        if (this. aleft > this.bRight || this.bLeft > this.aRight) return false;
        if (this.aTop > this.bBottom || this.bTop > this.aBottom) return false;
        return true;
    }
}