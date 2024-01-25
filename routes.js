const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === '/') {
        fs.readFile('message.txt', (err, data) => {
            if (err) {
                console.log(err);
            }
    
            res.writeHead(200, { 'Content-Type': 'text/html' });
            console.log(`data from file` + data);
            res.write('<html>');
            res.write(`<head><title>Enter Message</title></head>`);
            res.write(`<body><h1>${data}</h1></body>`);
            res.write(`<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`);
            res.write('</html>');
            return res.end();
        });
    } else if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, (err) => {
                if (err) {
                    console.log('Error writing a file:', err);
                    res.statusCode = 500;
                    return res.end();
                }
                console.log(`inside fs.writeFile`);
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write(`<head><title>My first page</title></head>`);
        res.write(`<body>Hello from node.js</body>`);
        res.write('</html>');
        res.end();
    }
};

module.exports = requestHandler;


