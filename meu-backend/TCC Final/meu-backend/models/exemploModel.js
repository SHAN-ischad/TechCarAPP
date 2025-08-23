const mongoose = require('mongoose');

const ExemploSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true, 
    minlength: 3, 
    maxlength: 100
  },
  idade: { 
    type: Number, 
    required: true, 
    min: 18, 
    max: 120 
  }
});

module.exports = mongoose.model('Exemplo', ExemploSchema);