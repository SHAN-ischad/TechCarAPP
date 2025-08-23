const express = require('express');
const router = express.Router();
const oficinaController = require('../controllers/oficinaController');

router.post('/', oficinaController.criarOficina);
router.get('/', oficinaController.listarOficinas);
router.put('/:id', oficinaController.atualizarOficina);
router.delete('/:id', oficinaController.deletarOficina);
router.post('/login', oficinaController.loginOficina);

router.get('/check-cnpj', oficinaController.checkCnpj)
module.exports = router;