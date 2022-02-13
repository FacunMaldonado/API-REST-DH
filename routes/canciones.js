const express = require ('express');
const router = express.Router();

const controller = require('../controllers/cancionesApiController');

router.get('/', controller.list);
router.get('/:id', controller.show);
router.post('/', controller.save);
router.delete('/:id', controller.delete);
router.put('/:id', controller.update);

module.exports = router;