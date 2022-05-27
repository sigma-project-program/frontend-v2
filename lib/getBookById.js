import {fetchUrl} from './fetchConfig'
const axios = require('axios').default;

export default async function(id) {
    try {
        // let res = await axios.get(`${fetchUrl}/Book/api/service/${id}`)
        let res = await axios.get(`${fetchUrl}/Book/api/service/${id}` )
        
        // let resObj = await res.json()
        console.log("resObj is: \n\n", res)
        
        console.log("found the book with id")
        const obj = {
            found: true,
            ...res.data
        }
        console.log(obj)
        return (obj)
    }
    catch(err) {
        console.log("logging the error:")
        console.log(err)
        // if(err.response.status === 500) {
            return {found: false}
        // }
        console.error(err);
    }
    
}