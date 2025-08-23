// routes/usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.criarUsuario);

router.get('/check-email', usuarioController.checkEmail)
router.get('/check-cpf', usuarioController.checkCpf)

module.exports = router;