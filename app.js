//const path = require ('path');
const express = require ('express')
const app = express();

//app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const cancionesRoutes = require('./routes/canciones');
const generosRoutes = require('./routes/generos');

app.use('/canciones', cancionesRoutes);
app.use('/generos', generosRoutes);


app.listen(3000, () => {console.log('Servidor andando en el puerto 3000')});