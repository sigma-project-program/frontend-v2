import {fetchUrl} from './fetchConfig'
const axios = require('axios').default;



export default async function(name) {
    try {

        let res = await axios.post(`https://localhost:7231/Book`, {
            name: name
        })
        
        // let resObj = await res.json()
        // console.log("resObj is: \n\n", res)
        
        console.log("error! created!")
        console.log("created:", res);
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


