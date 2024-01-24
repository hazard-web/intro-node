
const http = require('http');

function serverListener(req , res) {
    console.log(req);
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Shivam Bhardwaj\n');
}

const server = http.createServer(serverListener);

const PORT = 8000;   //PORT 4000 is already in use thats why i have taken 8000:

server.listen(PORT, () => {
    console.log("Server is running at port 8000");
});

server.on('error', (error) => {
    if(error.code === 'EADDRINUSE'){
        console.log(`Port ${PORT} is already in use`);
    }else{
        console.log(`An error occured: ${error.message}`);
    }
})