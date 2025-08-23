// models/carroModel.js
const mongoose = require('mongoose');

const CarroSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  modelo: String,
  marca: String,
  anoFabricacao: String,
  cor: String,
  categoria: String,         // <-- deve ser String
  quilometragem: String,     // <-- deve ser String
  placa: { type: String, required: true }, // <-- obrigatório
  carImage: String,
  // outros campos...
});

module.exports = mongoose.model('Carro', CarroSchema);