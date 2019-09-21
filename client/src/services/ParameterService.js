import axios from 'axios';

const url = 'http://localhost:5000/api/sim/';

class ParameterService {
    // Post parameters
    static getSimResponse(numberOfAnts) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.post(url, {
                    numberOfAnts
                });
                resolve(response.data);
            } catch(err) {
                reject(err);
            }
        });  
    }
}

export default ParameterService;