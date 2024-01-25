const http = require('http');
const express = require('express');

// const routes = require('./routes');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware');
    next();
})

app.use((req, res, next) => {
    console.log('In the another middleware');
});

const server = http.createServer(app);




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
