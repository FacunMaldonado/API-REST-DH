const express = require ('express');
const router = express.Router();

const controller = require('../controllers/generosApiController');

router.get('/', controller.listar);


module.exports = router;