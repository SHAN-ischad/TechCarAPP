const express = require('express');
const router = express.Router();
const agendamentoController = require('../controllers/agendamentoController');

router.post('/', agendamentoController.criarAgendamento);
router.get('/', agendamentoController.listarAgendamentos);
router.get('/:id', agendamentoController.buscarAgendamentoPorId);
router.put('/:id', agendamentoController.atualizarAgendamento);
router.delete('/:id', agendamentoController.deletarAgendamento);

module.exports = router;