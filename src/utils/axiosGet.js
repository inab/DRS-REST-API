import axios from 'axios';

export default async function (destURL, header) {
    try { 
        const request = await axios({  
            method: 'get',
            url: destURL,
            headers: {
                Authorization: header
            }
        });
        return request.data;
    } catch(error) {
        return error;
    }
}