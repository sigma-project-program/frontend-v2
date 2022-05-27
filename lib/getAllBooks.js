import { fetchUrl } from './fetchConfig';

const axios = require('axios').default;

// eslint-disable-next-line import/no-anonymous-default-export
export default async function(id) {
    try {
        // let res = await axios.get(`${fetchUrl}/Book/api/service/${id}`)
        let res = await axios.get(`${fetchUrl}/Book` )
        
        // let resObj = await res.json()
        console.log("resObj is: \n\n", res)
        
        console.log("found the book with id")
        return {
            found: true,
            bookList: res.data
         }
    }
    catch(err) {
        console.error(err);
        if(err.response.status === 500) {
            return {found: false}
        }
        
    }
    
}