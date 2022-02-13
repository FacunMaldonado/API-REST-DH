const DB = require('./../models');
const Op = DB.sequelize.Op;

module.exports = {
    listar: async(req, res) => {
        const getCancionesPorGenero = (id, canciones) =>canciones.filter(cancion => cancion.dataValues.genero_id === id); // Con esta funcion, filtramos las canciones por genero, devolvemos solo las canciones que sean del genero
        
        try{
        // Traemos los generos y canciones, usamos async/await para escribir menos codigo y que sea mas legible
        const generos = await DB.generos.findAll();
        const canciones = await DB.canciones.findAll();

        let cancionesPorGenero;

        // Recorremos todos los generos, y por cada uno, filtramos las canciones que sean de ese genero
        generos.forEach(genero => {
            // Y los guardamos en el objeto que sera la respuesta
            cancionesPorGenero = {
                // Usamos el spread para no perder las propiedades que entran en el objeto con cada iteracion
                ...cancionesPorGenero,
                [genero.name]: getCancionesPorGenero(genero.id, canciones)
            }
        })

        // Respondemos nuestro objeto poblado con las canciones por genero
        res.status(200).json(cancionesPorGenero);
        } catch(e){
            console.log(e);
            res.send(500).json({message: 'Server error'})
        }
    }
}

//FALTA CORREGIR ESTO SOLO