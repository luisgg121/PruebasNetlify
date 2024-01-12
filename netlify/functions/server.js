
require('dotenv').config();


const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser");
// const serverless = require('serverless-http');

const mysql = require('mysql');
const http = require('http');
const url = require('url');


connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
})

connection.connect((err) => {
    if (err) throw err;
    console.log('Base de datos con Connexión');
});

const tabla = 'autores';
const query = {};
var q = {};

app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//serving public file
app.use(express.static(__dirname));
app.use(cookieParser());
const port = process.env.PORT;
app.listen(port);
console.log(`Express server running en el puerto ${port}`);

app.get('/libros', function (req, res) {
    {
        res.send(`<html><body><h1>Libros: </h1></body></html>`);
    }
})
