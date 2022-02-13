const DB = require('./../models');
const Op = DB.sequelize.Op;

module.exports = {
    listar: async(req, res) => {
        const getCancionesPorGenero = (id, canciones) =>canciones.filter(cancion => cancion.dataValues.genero_id === id);   
        try{
        const generos = await DB.generos.findAll();
        const canciones = await DB.canciones.findAll();

        let cancionesPorGenero;

        generos.forEach(genero => {
            cancionesPorGenero = {
                ...cancionesPorGenero,
                [genero.name]: getCancionesPorGenero(genero.id, canciones)
            }
        })

        res.status(200).json(cancionesPorGenero);
        } catch(e){
            console.log(e);
            res.send(500).json({message: 'Server error'})
        }
    }
}

//FALTA CORREGIR ESTO SOLO