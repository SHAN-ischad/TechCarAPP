const express = require('express');
const router = express.Router();
const notificacaoController = require('../controllers/notificacaoController');

router.post('/', notificacaoController.criarNotificacao);
router.get('/:usuarioId', notificacaoController.listarNotificacoes);
router.patch('/:id/lida', notificacaoController.marcarComoLida);

module.exports = router;