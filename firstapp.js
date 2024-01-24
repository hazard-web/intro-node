
const http = require('http');

function serverListener(req , res) {
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    // res.end('Shivam Bhardwaj\n');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hello from my Node.js server!</h1></body>');

    if (req.url === '/home'){
        res.write('<body><h1>Welcome home</h1></body>');
    }else if (req.url === '/about'){
        res.write('<body><h1>Welcome to About Us page</h1></body>'); 
    }else if (req.url === '/node'){
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    }else{
        res.write('<body><h1>Page not found</h1></body>');
    }
    res.write('</html>');
    res.end();
    
}

const server = http.createServer(serverListener);

const PORT = 3000;   //PORT 4000 is already in use thats why i have taken 8000:

server.listen(PORT, () => {
    console.log("Server is running at port 3000");
});

server.on('error', (error) => {
    if(error.code === 'EADDRINUSE'){
        console.log(`Port ${PORT} is already in use`);
    }else{
        console.log(`An error occured: ${error.message}`);
    }
})