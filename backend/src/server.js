const express = require('express')
require('./database');
const app = express()

async function main(){
    await app.listen(3000)
    console.log('connected to port 3000')
}

main()



