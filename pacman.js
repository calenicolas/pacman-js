class Pacman {

    constructor() {
        this.x = 0;
        this.y = 0;
    }

    moveRight() {
        this.x = this.x + 1;
    }

    moveLeft() {
        this.x = this.x - 1;
    }

    moveUp() {
        this.y = this.y + 1;
    }

    moveDown() {
        this.y = this.y - 1;
    }

    getPosition() {
        return {
            x: this.x,
            y: this.y
        };
    }
}

module.exports = Pacman;