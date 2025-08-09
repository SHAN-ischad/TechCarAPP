// models/proprietarioModel.js
const mongoose = require('mongoose');

const ProprietarioSchema = new mongoose.Schema({
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
    nomeOficina: String,
    oficinas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Oficina' }],
    ownerImage: String

    // outros campos exclusivos de proprietário
});

module.exports = mongoose.model('Proprietario', ProprietarioSchema);