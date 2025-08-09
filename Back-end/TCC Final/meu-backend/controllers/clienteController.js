const Cliente = require('../models/clienteModel');
const Carro = require('../models/carroModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const criarCliente = async (req, res) => {
  try {
    const { senha, ...resto } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);

    // Verifica se já existe um cliente com o mesmo CPF
    const cpfExistente = await Cliente.findOne({ cpf: resto.cpf });
    if (cpfExistente) {
      return res.status(400).json({ error: 'CPF já cadastrado.' });
    }

    // Verifica se já existe um cliente com o mesmo e-mail (opcional)
    const emailExistente = await Cliente.findOne({ email: resto.email });
    if (emailExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const cliente = new Cliente({ ...resto, senha: senhaHash });
    const salvo = await cliente.save(); // <-- corrigido aqui
    res.status(201).json(salvo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find().populate('oficina');
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizado = await Cliente.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizado) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json(atualizado);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarCliente = async (req, res) => {
  try {
    const { id } = req.params;
    const deletado = await Cliente.findByIdAndDelete(id);
    if (!deletado) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json({ message: 'Cliente deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.criarCliente = async (req, res) => {
  try {
    const { senha, ...resto } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);
    const cliente = new Cliente({ ...resto, senha: senhaHash });
    await cliente.save();
    res.status(201).json(cliente);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const loginCliente = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const cliente = await Cliente.findOne({ email });
    if (!cliente) return res.status(401).json({ error: 'Cliente não encontrado' });

    const senhaValida = await bcrypt.compare(senha, cliente.senha);
    if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: cliente._id }, 'seuSegredoJWT', { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const buscarClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getVeiculosCliente = async (req, res) => {
  try {
    // Supondo que req.userId está disponível via autenticação
    const cliente = await Cliente.findOne({ usuario: req.userId }).populate('carro');
    if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });

    res.json({
      carro: cliente.carro, // objeto do carro principal
      outrosVeiculos: cliente.outrosCarros || [], // se houver outros veículos
    });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar veículos.' });
  }
};

module.exports = {
  criarCliente,
  listarClientes,
  atualizarCliente,
  deletarCliente,
  loginCliente,
  buscarClientePorId,
  getVeiculosCliente,
};