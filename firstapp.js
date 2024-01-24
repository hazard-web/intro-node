const http = require('http');

const routes = require('./routes');

const server = http.createServer(routes);

const PORT = 3000;

server.listen(PORT, () => {
    console.log("Server is running at port 3000");
});

server.on('error', (error) => {
    if (error.code === 'EADDRINUSE') {
        console.log(`Port ${PORT} is already in use`);
    } else {
        console.log(`An error occurred: ${error.message}`);
    }
});
