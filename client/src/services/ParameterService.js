import axios from 'axios';

const url = 'api/sim/';

class ParameterService {
    // Post parameters
    static getSimResponse(numberOfAnts, mapX, mapY) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(url, {
                    numberOfAnts,
                    mapX,
                    mapY
                });
                resolve(response.data);
            } catch(err) {
                reject(err);
            }
        });  
    }
}

export default ParameterService;