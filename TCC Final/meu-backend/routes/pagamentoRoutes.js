const express = require('express');
const router = express.Router();
const pagamentoController = require('../controllers/pagamentoController');

router.post('/', pagamentoController.criarPagamento);
router.get('/', pagamentoController.listarPagamentos);
router.get('/:id', pagamentoController.buscarPagamentoPorId);
router.put('/:id', pagamentoController.atualizarPagamento);
router.delete('/:id', pagamentoController.deletarPagamento);

module.exports = router;