const mysql = require('mysql');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud_productos'
});

conexion.connect((error) => {
    if(error){
        console.log('Error en la conexión, el error es: ' + error);
        return
    }

    console.log('Conectado exitosamente a la base de datos');
});

module.exports = conexion;