require('dotenv').config();
const express = require('express')
const hbs = require('hbs');

const app = express()
const port = process.env.PORT;

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// servir contenido estático
app.use(express.static('./public'));

/*
app.get('/', (req, res) => {
    res.send('Home Page')
})
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Giordano')
})
app.get('*', (req, res) => {
    //res.send('404|Page Not Found')
    // pero con esto se envía la ruta y no el archivo, se tiene que enviar el archivo 404.html
    // con send enviamos solo texto para actualizar, para moestra en la pantalla
    //res.send('./public/404.html');
    // se genera error por que se necesita la ruta absoluta con __dirname
    res.sendFile(__dirname + '/public/404.html');
})
*/
// invoca los handlebars
app.get('/', (req, res) => {
    //res.send("Hola Giorda");
    res.render('home', {
        nombre: "Giordano Santos",
        titulo: "Curso NodeJS"
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: "Giordano Santos",
        titulo: "Curso NodeJS"
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: "Giordano Santos",
        titulo: "Curso NodeJS"
    });
})

/*
Invoca los html
app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html');
})
app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html');
})
*/

//app.listen(8080)
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})