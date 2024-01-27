
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extented : false}));


app.use(shopRoute);
app.use(adminRoute);


app.use((req, res, next) => {
    res.status(404).send(`<h1>Page not found</h1>`)
});


const PORT = 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});

app.on('error', (error) =>{
    if(error.code === 'EADDRINUSE'){
        console.log(`A port ${PORT} is already in use`);
    }else{
        console.log(`Error: ${error.message}`);
    }
});