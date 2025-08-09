const Usuario = require('../models/usuarioModel');
const Cliente = require('../models/clienteModel');
const Proprietario = require('../models/proprietarioModel');
const Oficina = require('../models/oficinaModel');
const Carro = require('../models/carroModel'); // Importe o modelo do carro, se existir
const bcrypt = require('bcrypt');

exports.login = async (req, res) => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
    }

    const usuario = await Usuario.findOne({ email });
    if (!usuario) return res.status(401).json({ error: 'Usuário não encontrado' });

    const senhaOk = await bcrypt.compare(senha, usuario.senha);
    if (!senhaOk) return res.status(401).json({ error: 'Senha inválida' });

    let usuarioCompleto = usuario.toObject();

    if (usuario.tipoConta === 'cliente') {
        const cliente = await Cliente.findOne({ usuario: usuario._id });
        if (cliente) {
            usuarioCompleto = { ...usuarioCompleto, ...cliente.toObject() };
            // Buscar carro do cliente, se existir
            if (cliente.carro) {
                const carro = await Carro.findById(cliente.carro);
                if (carro) {
                    usuarioCompleto.carro = carro.toObject();
                }
            }
        }
    } else if (usuario.tipoConta === 'proprietario') {
        const proprietario = await Proprietario.findOne({ usuario: usuario._id });
        if (proprietario) {
            usuarioCompleto = { ...usuarioCompleto, ...proprietario.toObject() };
            // Buscar oficinas do proprietário
            if (proprietario.oficinas && proprietario.oficinas.length > 0) {
                const oficinas = await Oficina.find({ _id: { $in: proprietario.oficinas } });
                usuarioCompleto.oficinas = oficinas.map(oficina => oficina.toObject());
            }
        }
    }

    res.json({ usuario: usuarioCompleto });
};

// Exemplo para cadastro de cliente
// filepath: c:\Temp\TCC Final\meu-backend\controllers\authController.js
exports.cadastrarCliente = async (req, res) => {
    try {
        // Crie o usuário
        const usuario = await Usuario.create({ ...req.body.usuario, tipoConta: 'cliente' });

        // Crie o cliente, associando ao usuário
        const cliente = await Cliente.create({ ...req.body.cliente, usuario: usuario._id });

        // Busque o cliente completo (com a imagem)
        const clienteCompleto = await Cliente.findOne({ usuario: usuario._id });

        res.json({
            usuario: {
                ...usuario.toObject(),
                ...clienteCompleto.toObject(), // inclui clientImage
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao cadastrar cliente.' });
    }
};

// Exemplo para cadastro de proprietário
exports.cadastrarProprietario = async (req, res) => {
    try {
        // Crie o usuário
        const usuario = await Usuario.create({ ...req.body.usuario, tipoConta: 'proprietario' });

        // Crie o proprietário, associando ao usuário
        const proprietario = await Proprietario.create({ ...req.body.proprietario, usuario: usuario._id });

        // Busque o proprietário completo
        const proprietarioCompleto = await Proprietario.findOne({ usuario: usuario._id });

        // Buscar oficinas do proprietário
        let oficinas = [];
        if (proprietarioCompleto.oficinas && proprietarioCompleto.oficinas.length > 0) {
            oficinas = await Oficina.find({ _id: { $in: proprietarioCompleto.oficinas } });
        }

        res.json({
            usuario: {
                ...usuario.toObject(),
                ...proprietarioCompleto.toObject(),
                oficinas: oficinas.map(oficina => oficina.toObject()),
            }
        });
    } catch (err) {
        res.status(500).json({ error: 'Erro ao cadastrar proprietário.' });
    }
};