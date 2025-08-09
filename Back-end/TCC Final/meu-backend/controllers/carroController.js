const Carro = require('../models/carroModel');

const checkPlaca = async (req, res) => {
    const { placa } = req.query;
    const carro = await Carro.findOne({ placa });
    res.json({ exists: !!carro });
};

exports.checkPlaca = checkPlaca;

exports.criarCarro = async (req, res) => {
 try {
    // Verifica se já existe um carro com a mesma placa
    const placaExistente = await Carro.findOne({ placa: req.body.placa });
    if (placaExistente) {
      return res.status(400).json({ error: 'Placa já cadastrada.' });
    }

    // Verifica se o cliente existe
    const Cliente = require('../models/clienteModel');
    const cliente = await Cliente.findById(req.body.cliente);
    if (!cliente) {
      return res.status(400).json({ error: 'Cliente não encontrado.' });
    }

    const carro = new Carro(req.body);
    await carro.save();
    cliente.carros.push(carro._id);
    await cliente.save();
    res.status(201).json(carro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
exports.listarCarros = async (req, res) => {
  try {
    const carros = await Carro.find();
    res.json(carros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.buscarCarroPorId = async (req, res) => {
  try {
    const carro = await Carro.findById(req.params.id);
    if (!carro) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json(carro);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.atualizarCarro = async (req, res) => {
  try {
    const carro = await Carro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!carro) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json(carro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deletarCarro = async (req, res) => {
  try {
    const carro = await Carro.findByIdAndDelete(req.params.id);
    if (!carro) return res.status(404).json({ error: 'Carro não encontrado' });
    res.json({ message: 'Carro deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};