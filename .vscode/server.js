const http = require('http');
const fs = require('fs');
const port = process.env.port || 3000

const server = http.createServer((req, res) =>{

    //set header content type
    res.setHeader('Content-Type', 'text/html');

    fs.readFile('./views/index.html', (err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }
    })
});

server.listen(port, 'localhost', () =>{
    console.log('listening for requests on port 3000')
});
