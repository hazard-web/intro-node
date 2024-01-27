
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extented : false}));


app.use('/add-product', (req, res, next) => {
    res.send(`<form action="/product" method="POST">
        <div>
        <input type="text" name="Title"/>
        <input type="number" name='Quantity'/>
        </div>
        <button type="submit">Add Product</button>
    </form>`);
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    res.send(`<h1>Hello From Express!</h1>`);
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