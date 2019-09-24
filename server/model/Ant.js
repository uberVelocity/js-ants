class Ant {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.radius = size;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }

    getRadius(){
        return this.radius;
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
    randomNoOverlapStart(numberOfAnts, mapX, mapY) {
        console.log(numberOfAnts);
        let ants = [];
        for (let i = 0; i < numberOfAnts; i++) {
            let isAllowed;
            do{
                let x = Math.floor(Math.random() * (mapX - 10) + 10);
                let y = Math.floor(Math.random() * (mapY - 10) + 10);
                let radius = 10;

                isAllowed = true;
                for(let j = 0; j < i; j++){
                    let diffX = x - ants[j].getX();
                    let diffY = y - ants[j].getY();
                    let minDis = radius + ant[j].getRadus();

                    let sqrDis = Math.pow(diffX, 2) + Math.pow(diffY, 2);
                    let dis = Math.sqrt(sqrDis);

                    if(dis < minDis){
                        isAllowed = false;
                        break;
                    }
                }
            } while(!isAllowed);
            ants[i] = new Ant(Math.floor(Math.random() * (mapX - 10) + 10), Math.floor(Math.random() * (mapY - 10) + 10), 10);
            console.log(`${ants[i].x},${ants[i].y}`);
        }
        return ants;
    }    
}

module.exports = Ant;