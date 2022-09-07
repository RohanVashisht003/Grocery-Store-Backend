const mongoose= require('mongoose');

mongoose.connect('mongodb://localhost/groceryStore_db');

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error in connecting database'));

db.once('open',()=>{
    console.log('Successfully connected to db');
});

module.exports= db;