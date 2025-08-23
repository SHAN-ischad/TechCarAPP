const mongoose = require('mongoose');

const ChatSchema = new mongoose.Schema({
  remetente: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'tipoRemetente' },
  destinatario: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'tipoDestinatario' },
  tipoRemetente: { type: String, required: true, enum: ['Cliente', 'Oficina'] },
  tipoDestinatario: { type: String, required: true, enum: ['Cliente', 'Oficina'] },
  texto: { type: String, required: true },
  data: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chat', ChatSchema);