
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const contactroute = require('./routes/contact');
const successroute = require('./routes/success');
const routeDir = require('./util/path')

app.use(bodyParser.urlencoded({extented : false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(shopRoute);
app.use('/admin',adminRoute);
app.use(contactroute);
app.use(successroute);


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
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