const mongoose = require('mongoose')

const NotificacaoSchema = new mongoose.Schema({
    usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
    mensagem: { type: String, required: true },
    lida: { type: Boolean, default: false },
    data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notificacao', NotificacaoSchema)
