const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/desserts', { useMongoClient: true});

mongoose.connection.on('connected', () =>{
    console.log('mongod is connected')
});

mongoose.connection.on('disconnected', () =>{
    console.log('mongod is disconnected')
});

mongoose.connection.on('error', (error) => {
    console.log('There was an error in connecting')
});