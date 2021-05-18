class Circle {
    constructor(difficulty, width, height) {
        this.width = width;
        this.height = height;
        this.r = 16 * (4 - difficulty);
        this.x = random(50, this.width - 50);
        this.y = random(50, this.height - 50);
    }

    /**
     * Is the mouse click coordinate inside the circle?
     * 
     * @param {*} mouseX - mouse x-coordinate
     * @param {*} mouseY - mouse y-coordinate
     * @returns true if the mouse click is inside the circle, else false
     */
    isClick(mouseX, mouseY) {
        let insideX = mouseX > this.x - this.r && mouseX < this.x + this.r;
        let insideY = mouseY > this.y - this.r && mouseY < this.y + this.r;
        return insideX && insideY;
    }

    /**
     * Display circle on the canvas
     */
    show() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.r, this.r);
    }

    /**
     * Pick a new location for the circle
     */
    pickNewLocation(){
        this.x = random(50, this.width - 50);
        this.y = random(50, this.height - 50);
    }
}
