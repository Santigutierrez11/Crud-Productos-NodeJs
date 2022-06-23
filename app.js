const express = require('express');
const { json } = require('express/lib/response');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.set('view engine', 'ejs');
app.use('/', require('./router'));

app.listen(5000, () => {
    console.log('Servidor ejecutandose en https://localhost:5000')
});