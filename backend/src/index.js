require("dotenv").config();

const app = require("./app");
require('./database');

async function main(){
    await app.listen(app.get("port"))
    console.log('connected to port', app.get("port"))
}

main();



