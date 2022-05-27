import {fetchUrl} from './fetchConfig'
const axios = require('axios').default;

export default async function(id) {
    try {
        // let res = await axios.get(`${fetchUrl}/Book/api/service/${id}`)
        let res = await axios.get(`${fetchUrl}/Error/api/service/error/get/${id}` )
        
        // let resObj = await res.json()
        console.log("resObj is: \n\n", res)
        // console.log(resObj)
        // let resObj = res.JSO
        return res.data
    }
    catch(err) {
        console.error(err);
    }
    
}