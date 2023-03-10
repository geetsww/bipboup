
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config()

module.exports = async () =>{
    const req = await fetch(process.env.API + '/items/tags/', {
        method:'GET',
        headers:{
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    })
    return  (await req.json()).data
}