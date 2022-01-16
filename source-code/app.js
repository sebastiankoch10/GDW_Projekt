const express = require('express');

//set up express app
const app = express();
const port = process.env.PORT || 3000;

//listen for request
app.get('/', (req, res) =>{
    console.log('GET request');
    res.send('Hello World!');
    res.end();
});

app.listen(port, () =>{
    console.log('app listening for requests')
});