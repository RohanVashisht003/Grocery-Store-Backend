const express = require('express');
const app = express();
const port = 8000;
// mongodb
const db = require('./config/mongoose');

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// using routes
app.use('/', require('./routes'));


// app listening
app.listen(port, (err) => {
    if (err) {
        console.log("Error", err);
        return;
    }
    console.log("App is running on port", port);
    return;
})