const conexion = require('../database/db');

exports.guardar = (req, res) => {
    const nombre = req.body.nombre;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;
    const disponible = req.body.disponible;
    const precio = req.body.precio;
    conexion.query("INSERT INTO producto SET ?", {nombre:nombre, categoria:categoria, descripcion:descripcion, disponible:disponible, precio:precio}, (error, results) => {
        if(error){
            console.log("error en el registro, el error es: " + error);
        }else{
            res.redirect('/');
        }
    });
}

exports.update = (req, res) => {
    const id = req.body.id;
    const nombre = req.body.nombre;
    const categoria = req.body.categoria;
    const descripcion = req.body.descripcion;
    const disponible = req.body.disponible;
    const precio = req.body.precio;
    conexion.query('UPDATE producto SET ? WHERE id = ?', [{nombre:nombre, categoria:categoria, descripcion:descripcion, disponible:disponible, precio:precio}, id], (error, results) => {
        if(error){
            console.log("error en la consulta editar, el error es:" + error);
        }else{
            res.redirect('/');
        }
    });
}