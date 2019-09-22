class Ant {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.radius = size;
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    // Computes random position of ants s.t. they may overlap and returns a list of them
    static randomOverlapStart(numberOfAnts, mapX, mapY) {
        console.log(numberOfAnts);
        let ants = [];
        for (let i = 0; i < numberOfAnts; i++) {
            ants[i] = new Ant(Math.floor(Math.random() * (mapX - 10) + 10), Math.floor(Math.random() * (mapY - 10) + 10), 10);
            console.log(`${ants[i].x},${ants[i].y}`);
        }
        return ants;
    }

    

    // Computes random position of ants s.t. they do not overlap and returns a list of them
    randomNoOverlapStart(numberOfAnts) {

    }    
}

module.exports = Ant;