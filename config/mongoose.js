const mongoose = require('mongoose');

// connect to local db
mongoose.connect('mongodb://localhost/groceryStore_db');

const db = mongoose.connection;

// if got error in connecting
db.on('error', console.error.bind(console, 'Error in connecting database'));

// if successful
db.once('open', () => {
    console.log('Successfully connected to db');
});

module.exports = db;