const mongoose = require('mongoose');

const uri = 'mongodb://localhost/travel-expert';

mongoose.connect(uri, {useNewUrlParser: true});

const connection = mongoose.connection

connection.once('open',()=> {
    console.log('connnected');
})