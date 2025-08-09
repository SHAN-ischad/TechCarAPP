const Pagamento = require('../models/pagamentoModel');

const criarPagamento = async (req, res) => {
  try {
    const pagamento = new Pagamento(req.body);
    await pagamento.save();
    res.status(201).json(pagamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarPagamentos = async (req, res) => {
  try {
    const pagamentos = await Pagamento.find().populate('cliente servico');
    res.json(pagamentos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const buscarPagamentoPorId = async (req, res) => {
  try {
    const pagamento = await Pagamento.findById(req.params.id).populate('cliente servico');
    if (!pagamento) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json(pagamento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pagamento) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json(pagamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarPagamento = async (req, res) => {
  try {
    const pagamento = await Pagamento.findByIdAndDelete(req.params.id);
    if (!pagamento) return res.status(404).json({ error: 'Pagamento não encontrado' });
    res.json({ message: 'Pagamento deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarPagamento,
  listarPagamentos,
  buscarPagamentoPorId,
  atualizarPagamento,
  deletarPagamento
};