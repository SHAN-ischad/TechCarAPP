// models/clienteModel.js
const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Usuario', required: true },
  carros: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Carro' }],
  historicoCarros: [{ type: String }],
  historicoServicos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Servico' }],
  clientImage: String
  // outros campos exclusivos de cliente
});

module.exports = mongoose.model('Cliente', ClienteSchema);