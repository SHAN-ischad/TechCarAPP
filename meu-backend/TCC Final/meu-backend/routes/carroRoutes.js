const express = require('express');
const router = express.Router();
const carroController = require('../controllers/carroController');

router.get('/check-placa', carroController.checkPlaca)

router.post('/', carroController.criarCarro);
router.get('/', carroController.listarCarros);
router.get('/:id', carroController.buscarCarroPorId);
router.put('/:id', carroController.atualizarCarro);
router.delete('/:id', carroController.deletarCarro);

module.exports = router;