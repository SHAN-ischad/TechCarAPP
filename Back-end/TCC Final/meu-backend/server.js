// uVCPSyTORN6L93sL senha mongoDB
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const exemploRoutes = require('./routes/exemploRoutes');
const oficinaRoutes = require('./routes/oficinaRoutes');
const clienteRoutes = require('./routes/clientesRoutes');
const carroRoutes = require('./routes/carroRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const pagamentoRoutes = require('./routes/pagamentoRoutes');
const agendamentoRoutes = require('./routes/agendamentoRoutes');
const chatRoutes = require('./routes/chatRoutes');
const notificacaoRoutes = require('./routes/notificacaoRoutes');
const usuariosRoutes = require('./routes/usuarioRoutes')
const authRoutes = require('./routes/authRoutes');
const app = express();

// Configura o CORS para aceitar requisições de qualquer origem
app.use(cors());

// Middleware para interpretar JSON e aumentar o limite do payload
app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

// Rotas
app.use('/api/exemplo', exemploRoutes);
app.use('/api/oficinas', oficinaRoutes);
app.use('/api/clientes', clienteRoutes);
app.use('/api/carros', carroRoutes);
app.use('/api/servicos', servicoRoutes);
app.use('/api/pagamentos', pagamentoRoutes);
app.use('/api/agendamentos', agendamentoRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/notificacoes', notificacaoRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/auth', authRoutes);

// Conexão com o MongoDB
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});