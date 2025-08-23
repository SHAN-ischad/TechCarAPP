const mongoose = require('mongoose');

const AgendamentoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  oficina: { type: mongoose.Schema.Types.ObjectId, ref: 'Oficina', required: true },
  servico: { type: mongoose.Schema.Types.ObjectId, ref: 'Servico', required: true },
  data: { type: Date, required: true },
  status: { type: String, enum: ['pendente', 'concluido', 'cancelado'], default: 'pendente' },
  observacoes: { type: String, maxlength: 300 }
});

module.exports = mongoose.model('Agendamento', AgendamentoSchema);