const should = require ("should");
const Pacman = require ("../pacman.js");


describe("creando un pacman", function () {

    it("el pacman se mueve un casillero a la derecha", function() {

        const expectedPosition = {
            x: 1,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveRight();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero a la izquierda", function() {

        const expectedPosition = {
            x: -1,
            y: 0
        };

        const pacman = new Pacman();

        pacman.moveLeft();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero para arriba", function() {

        const expectedPosition = {
            x: 0,
            y: 1
        };

        const pacman = new Pacman();

        pacman.moveUp();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });

    it("el pacman se mueve un casillero para abajo", function() {

        const expectedPosition = {
            x: 0,
            y: -1
        };

        const pacman = new Pacman();

        pacman.moveDown();

        const actualPosition = pacman.getPosition();

        should(actualPosition).be.eql(expectedPosition);
    });
    
    
});