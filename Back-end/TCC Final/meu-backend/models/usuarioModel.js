// models/usuarioModel.js
const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: { type: String, required: true, minlength: 3 },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true, minlength: 6 },
    tipoConta: { type: String, enum: ['cliente', 'proprietário'], required: true },
    telefone: String,
    cpf: { type: String, unique: true, match: /^\d{11}$/ },
    dataNascimento: Date,
    idade: Number,
    cidade: String,
    estado: String,
});

module.exports = mongoose.model('Usuario', UsuarioSchema);