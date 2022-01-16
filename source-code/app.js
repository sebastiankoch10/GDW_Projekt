const express = require('express');
const bodyParser = require('body-parser')

//set up express app
const app = express();

app.use(bodyParser.json());

//initialize routes
app.use('/api', require('./routes/api'));

//listen for request
const port = process.env.PORT || 3000;
app.listen(port, () =>{
    console.log('App listening for requests!')
});