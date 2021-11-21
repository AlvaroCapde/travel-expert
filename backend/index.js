const express = require('express')
//require('./database');
const app = express();
let port = process.env.PORT;
if (port == null || port == "") port = 8000;

async function main(){
    await app.listen(port)
    console.log('connected to port ' + port)
}

main();



