const http = require('http');
const fs = require('fs');

const hostname='127.0.0.1';
const port = 3000;

const home=fs.readFileSync('./index.html');
const about =fs.readFileSync('./about.html');
const contactus =fs.readFileSync('./contactus.html');
const services =fs.readFileSync('./services.html');

const server = http.createServer( (req, res)=>{
    res.statuscode=200;
    res.setHeader('content-type','text/html');
    res.end(home);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });