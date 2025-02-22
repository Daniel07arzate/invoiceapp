//dependencies
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
//const { error } = require('console');

//database connection
mongoose.connect('mongodb+srv://al222210699:qHXeVEoC1WpQ0KfK@apiinvoices.eivrgtd.mongodb.net/invoicesContainer?retryWrites=true&w=majority&appName=apiInvoices'//, {
    //useNewUrlParser: true,
   // useUnifiedTopology: true  //opciones de configuracion han quedado obsoletas, ya no tienen efecto
);

mongoose.connection.on('error', (error)=>{
    console.log('ERROR: ' + error);
})

mongoose.connection.once('open', () => {
    console.log("the database connection is working! congrutulations")
});

//configurar body-parser
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json()); //procesar los objetos con informacion y la va a transformar en objetos que se puede usar en la aplicacion 

app.use(express.static(path.join(__dirname, 'dist')));// la constante ___dirname contiene la rurta hacia el subdirectorio de la web

//static web server

//route
app.use('/api/createinvoice', require('./routes/create.js'));//route va a permitir dividir la aplicacion en varias partes

app.use('/api/readinvoice', require('./routes/read.js'));

app.use('/api/updateinvoice', require('./routes/update.js'));

app.use('/api/deleteinvoice', require('./routes/delete.js'));


//app.get('/hello',(request, response) => {

  //  response.send('<h1>Hello word</h1>');
//});

//port
app.listen(3000, () => {
    console.log('listening al location:3000');
});