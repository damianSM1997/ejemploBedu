const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env'});

const conectarDB = async () => {
    try {
        //configuracion general
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        });
        console.log('DB conectada')
    } catch (error) {
        console.log(error);
        process.exit(1); // si hay error entonces detiene la app
    }
}

module.exports = conectarDB;