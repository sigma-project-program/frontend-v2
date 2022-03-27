import {fetchUrl} from './fetchConfig'
const axios = require('axios').default;

export default async function(id) {
    try {
        // let res = await axios.get(`${fetchUrl}/Book/api/service/${id}`)
        let res = await axios.get(`https://localhost:7231/Book/api/service/${id}` )
        
        // let resObj = await res.json()
        console.log("resObj is: \n\n", res)
        
        console.log("found the book with id")
        return {
            found: true,
            ...res.data
         }
    }
    catch(err) {
        if(err.response.status === 500) {
            return {found: false}
        }
        console.error(err);
    }
    
}