const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');
const auth = require('../middleware/auth'); // middleware de autenticação

router.post('/', clienteController.criarCliente);
router.get('/', clienteController.listarClientes);
router.put('/:id', clienteController.atualizarCliente);
router.delete('/:id', clienteController.deletarCliente);
router.post('/login', clienteController.loginCliente);
router.get('/veiculos', auth, clienteController.getVeiculosCliente);
router.get('/:id', clienteController.buscarClientePorId);

module.exports = router;