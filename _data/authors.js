
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config()

module.exports = async () =>{
    const req = await fetch(process.env.API + '/items/authors/?fields=*.*&deep[posts][_sort]=-date_created', {
        method:'GET',
        headers:{
            Authorization: `Bearer ${process.env.TOKEN}`
        }
    })

    const data = (await req.json()).data
    return  data
}