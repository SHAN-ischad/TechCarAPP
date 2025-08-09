const Compra = require('../models/compraModel');

const criarCompra = async (req, res) => {
  try {
    const compra = new Compra(req.body);
    await compra.save();
    res.status(201).json(compra);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarCompras = async (req, res) => {
  try {
    const compras = await Compra.find().populate('cliente servico');
    res.json(compras);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const buscarCompraPorId = async (req, res) => {
  try {
    const compra = await Compra.findById(req.params.id).populate('cliente servico');
    if (!compra) return res.status(404).json({ error: 'Compra não encontrada' });
    res.json(compra);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarCompra = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!compra) return res.status(404).json({ error: 'Compra não encontrada' });
    res.json(compra);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarCompra = async (req, res) => {
  try {
    const compra = await Compra.findByIdAndDelete(req.params.id);
    if (!compra) return res.status(404).json({ error: 'Compra não encontrada' });
    res.json({ message: 'Compra deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarCompra,
  listarCompras,
  buscarCompraPorId,
  atualizarCompra,
  deletarCompra
};