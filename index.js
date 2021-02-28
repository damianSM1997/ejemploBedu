const express = require('express');
const conectarDB = require('./config/db');

// creamos el servidor
// algunos ocupan app o server
const app = express();


//conectar a la db
conectarDB();


//puerto de la app
const PORT = process.env.PORT || 4000;


// Definir la pagina principal

// app.get('/', (req, res) => {
//     res.send('Hola Mundo')
// });


//arancando app

app.listen(PORT,() => {
    console.log(`El servidor esta funcionando por el puerto ${PORT}`);
});

