const Oficina = require('../models/oficinaModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const criarOficina = async (req, res) => {
   try {
    const { senha, ...resto } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10);

    // Verifica se já existe uma oficina com o mesmo CNPJ
    const cnpjExistente = await Oficina.findOne({ cnpj: resto.cnpj });
    if (cnpjExistente) {
      return res.status(400).json({ error: 'CNPJ já cadastrado.' });
    }

    // Verifica se já existe uma oficina com o mesmo e-mail
    const emailExistente = await Oficina.findOne({ email: resto.email });
    if (emailExistente) {
      return res.status(400).json({ error: 'E-mail já cadastrado.' });
    }

    const oficina = new Oficina({ ...resto, senha: senhaHash });
    await oficina.save();
    res.status(201).json(oficina);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarOficinas = async (req, res) => {
  try {
    const oficinas = await Oficina.find();
    res.status(200).json(oficinas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarOficina = async (req, res) => {
  try {
    const { id } = req.params;
    const atualizada = await Oficina.findByIdAndUpdate(id, req.body, { new: true });
    if (!atualizada) return res.status(404).json({ error: 'Oficina não encontrada' });
    res.status(200).json(atualizada);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarOficina = async (req, res) => {
  try {
    const { id } = req.params;
    const deletada = await Oficina.findByIdAndDelete(id);
    if (!deletada) return res.status(404).json({ error: 'Oficina não encontrada' });
    res.status(200).json({ message: 'Oficina deletada com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginOficina = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const oficina = await Oficina.findOne({ email });
    if (!oficina) return res.status(401).json({ error: 'Oficina não encontrada' });

    const senhaValida = await bcrypt.compare(senha, oficina.senha);
    if (!senhaValida) return res.status(401).json({ error: 'Senha inválida' });

    const token = jwt.sign({ id: oficina._id }, 'seuSegredoJWT', { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const checkCnpj = async (req, res) => {
    const { cnpj } = req.query;
    const oficina = await Oficina.findOne({ cnpj });
    res.json({ exists: !!oficina });
};

module.exports = {
  criarOficina,
  listarOficinas,
  atualizarOficina,
  deletarOficina,
  loginOficina,
  checkCnpj
};