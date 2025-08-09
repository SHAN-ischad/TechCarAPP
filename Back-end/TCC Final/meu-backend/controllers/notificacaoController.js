const Notificacao = require('../models/notificacaoModel');

exports.criarNotificacao = async (req, res) => {
    try {
        const notificacao = new Notificacao(req.body);
        await notificacao.save();
        res.status(201).json(notificacao);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.listarNotificacoes = async (req, res) => {
    try {
        const notificacoes = await Notificacao.find({ usuarioId: req.params.usuarioId });
        res.json(notificacoes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.marcarComoLida = async (req, res) => {
    try {
        const notificacao = await Notificacao.findByIdAndUpdate(
            req.params.id,
            { lida: true },
            { new: true }
        );
        res.json(notificacao);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};