const mongoose = require('mongoose');

const ServicoSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true, 
    minlength: 3, 
    maxlength: 100
  },
  descricao: { 
    type: String, 
    maxlength: 400 
  },
  preco: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  oficina: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Oficina', 
    required: true 
  },
  status: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'status', 
    required: true 
  }
});

module.exports = mongoose.model('Servico', ServicoSchema);