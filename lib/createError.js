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
            decision: "To Be Declared"
        };
        let res = await axios.post(`https://localhost:7231/Error`, reqObj)
        
        
        console.log("\n\nerror! created!\n\n")
        console.log(res);

        return {
            created: true,
            id: res.data
         }
    }
    catch(err) {
        console.error(err);
        console.log("\n\n error^")

        return {
            created: false,
         }
        
    }
    
}


