import { fetchUrl } from './fetchConfig'
const axios = require('axios').default;

// console.log(`got fetchURL: ${fetchUrl}`)


export default async function(name) {
    try {
        console.log("createBook called")
        let res = await axios.post(`${fetchUrl}/Book`, {
            name: name
        })
        
        // let resObj = await res.json()
        // console.log("resObj is: \n\n", res)
        
        // console.log("error! created!")
        console.log("created the book:", res);
        return {
            created: true,
            id: res.data

         }
    }
    catch(err) {
        console.error(err);
        return {
            created: false,
         }
        // if(err.response.status === 500) {
        //     return {created: false}
        // }
        
    }
    
}


