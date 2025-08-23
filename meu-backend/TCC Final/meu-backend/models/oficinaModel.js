const mongoose = require('mongoose');

const OficinaSchema = new mongoose.Schema({
  proprietario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proprietario',
    required: true
  },
  nomeOficina: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },
  cnpj: {
    type: String,
    required: true,
    unique: true,
    match: /^\d{14}$/
  },
  endereco: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 100
  },
  cidadeOficina: String,
  horarioFuncionamento: String,
  descricaoOficina: String,
  proprietyImage: String,
  dataCadastro: { type: Date, default: Date.now },
  servicosOferecidos: [{ type: String }],
  avaliacao: { type: Number, default: 0, min: 0, max: 5 }
});

module.exports = mongoose.model('Oficina', OficinaSchema);