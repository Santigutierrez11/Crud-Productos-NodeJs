const express = require('express');
const { append } = require('express/lib/response'); // Trae lo qque escribimos en el input
const router = express.Router();
const conexion = require('./database/db');

router.get('/', (req, res) => {
    conexion.query('SELECT * FROM producto', (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('index', {results:results});
        }
    });
});

router.get('/add', (req, res) => {
    res.render('add')
})

router.get('/edit/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('SELECT * FROM producto WHERE id = ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.render('edit', {productos:results[0]});
        }
    });
});

router.get('/eliminar/:id', (req, res) => {
    const id = req.params.id;
    conexion.query('DELETE FROM producto WHERE id = ?', [id], (error, results) => {
        if(error){
            throw error;
        }else{
            res.redirect('/');
        }
    });
});

const crud = require('./controllers/crud');
router.post('/guardar', crud.guardar);
router.post('/update', crud.update);

module.exports = router;