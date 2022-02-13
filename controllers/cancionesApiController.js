const DB = require('./../models');
const Op = DB.sequelize.Op;

module.exports = {
    list: (req, res) =>{
        DB.canciones
            .findAll()
            .then (canciones => {
                return res.status(200).json({
                    total: canciones.length,
                    data: canciones,
                    status: 200
                })
            })
    },

    show: (req, res) =>{
        DB.canciones
            .findByPk(req.params.id)
            .then (cancion => {
                return res.status(200).json({
                    data: cancion,
                    status: 200
                })
            })
    },

    save: (req, res) =>{
        DB.canciones
            .create(req.body)
            .then (cancion => {
                return res.status(200).json({
                    data: cancion,
                    status: 200,
                    created: 'ok'
                })
            })
    },

    delete: (req, res) => {
        DB.canciones
            .destroy({
                where: {
                    id:req.params.id
                }
            })
            .then(response => {
                return res.json(response)
            })
    },

    update: (req, res )=> {
        DB.canciones
            .update({
                titulo: req.body.titulo,
                duracion: req.body.duracion,
                genero_id: req.body.genero_id,
                album_id: req.body.album_id,
                artista_id: req.body.artista_id
            },
            {where:{
                id: req.params.id
            }
            })
            .then (response => {
                return res.status(200).json({
                    status: 200,
                    updated: 'ok'
                })
        })
    }
}