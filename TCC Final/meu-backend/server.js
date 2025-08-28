// uVCPSyTORN6L93sL senha mongoDB
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: ['https://techcarapp-1.onrender.com', 'http://localhost:8081'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));

// Rotas
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
const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

// Inicializa o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`😎 Servidor rodando na porta ${PORT}`);
});