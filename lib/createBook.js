import {fetchUrl} from './fetchConfig'
const axios = require('axios').default;


/*
{
  "errorName": "fake error name 1",
  "errorType": "fake err type 1",
  "location": "one page 1",
  "description": "dude you wrote the index(.js) wrong",
  "bookId": 4,
  "decision": "tbd"
}
 */
export default async function({errorName, errorType, location, description, bookId}) {
    try {
        let reqObj = {
            errorName, errorType, location, description, bookId, 
            decision: "To Be Declared"};
        let res = await axios.post(`https://localhost:7231/Error`, reqObj)
        
        // let resObj = await res.json()
        // console.log("resObj is: \n\n", res)
        
        console.log("error! created!")
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

