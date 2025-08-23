const Servico = require('../models/servicoModel');
const Oficina = require('../models/oficinaModel');

exports.criarServico = async (req, res) => {
  try {
    // Verifica se a oficina existe
    const oficina = await Oficina.findById(req.body.oficina);
    if (!oficina) {
      return res.status(400).json({ error: 'Oficina não encontrada.' });
    }

    const servico = new Servico(req.body);
    await servico.save();
    res.status(201).json(servico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.listarServicos = async (req, res) => {
  try {
    const servicos = await Servico.find().populate('oficina');
    res.json(servicos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.buscarServicoPorId = async (req, res) => {
  try {
    const servico = await Servico.findById(req.params.id).populate('oficina');
    if (!servico) return res.status(404).json({ error: 'Serviço não encontrado' });
    res.json(servico);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.atualizarServico = async (req, res) => {
  try {
    const servico = await Servico.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!servico) return res.status(404).json({ error: 'Serviço não encontrado' });
    res.json(servico);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarServico = async (req, res) => {
  try {
    const servico = await Servico.findByIdAndDelete(req.params.id);
    if (!servico) return res.status(404).json({ error: 'Serviço não encontrado' });
    res.json({ message: 'Serviço deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};