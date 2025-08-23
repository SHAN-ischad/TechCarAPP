const Exemplo = require('../models/exemploModel');

// Criar um novo exemplo
const criarExemplo = async (req, res) => {
  try {
    const novoExemplo = new Exemplo(req.body);
    const salvo = await novoExemplo.save();
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Listar todos os exemplos
const listarExemplos = async (req, res) => {
  try {
    const exemplos = await Exemplo.find();
    res.status(200).json(exemplos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Atualizar um exemplo por ID
const atualizarExemplo = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Exemplo.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ error: 'Exemplo não encontrado' });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Deletar um exemplo por ID
const deletarExemplo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Exemplo.findByIdAndDelete(id);
    if (!deletado) return res.status(404).json({ error: 'Exemplo não encontrado' });
    res.status(200).json({ message: 'Exemplo deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarExemplo,
  listarExemplos,
  atualizarExemplo,
  deletarExemplo,
};