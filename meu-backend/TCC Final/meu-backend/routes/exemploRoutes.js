const express = require('express');
const router = express.Router();

// POST: Criar um novo recurso
router.post('/Post', (req, res) => {
  res.send('Criar um novo recurso');
});

// GET: Obter recursos
router.get('/Get', (req, res) => {
  res.send('Obter todos os recursos');
});

// PUT: Atualizar um recurso
router.put('/Put/:id', (req, res) => {
  res.send(`Atualizar o recurso com ID ${req.params.id}`);
});

// DELETE: Deletar um recurso
router.delete('/Delete', (req, res) => {
  res.send(`Deletar o recurso com ID ${req.params.id}`);
});

module.exports = router;