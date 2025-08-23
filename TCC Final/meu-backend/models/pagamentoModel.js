const mongoose = require('mongoose');

const PagamentoSchema = new mongoose.Schema({
  valor: { type: Number, required: true, min: 0 },
  data: { type: Date, default: Date.now },
  status: { type: String, enum: ['pendente', 'pago', 'cancelado'], default: 'pendente' },
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  servico: { type: mongoose.Schema.Types.ObjectId, ref: 'Servico', required: true }
});

module.exports = mongoose.model('Pagamento', PagamentoSchema);