const express = require('express');

//set up express app
const app = express();

//initialize routes
app.use('/api', require('./routes/api'));

//listen for request
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('App listening for requests!')
});