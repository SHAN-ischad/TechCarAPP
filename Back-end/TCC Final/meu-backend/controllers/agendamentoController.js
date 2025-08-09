const Agendamento = require('../models/agendamentoModel');
const Cliente = require('../models/clienteModel');
const Oficina = require('../models/oficinaModel');
const Servico = require('../models/servicoModel');

const criarAgendamento = async (req, res) => {
  try {
    const { cliente, oficina, servico, data } = req.body;

    // Verifica se a data foi informada
    if (!data) {
      return res.status(400).json({ error: 'A data do agendamento é obrigatória.' });
    }

    // Verifica se a data é futura
    const dataAgendamento = new Date(data);
    const agora = new Date();
    if (dataAgendamento <= agora) {
      return res.status(400).json({ error: 'A data do agendamento deve ser futura.' });
    }

    // Regra 6: Não permitir agendamento fora do horário de funcionamento (08:00 às 18:00)
    const hora = dataAgendamento.getHours();
    if (hora < 8 || hora >= 18) {
      return res.status(400).json({ error: 'Agendamento permitido apenas entre 08:00 e 18:00.' });
    }

    // Verifica se o cliente existe
    const clienteExiste = await Cliente.findById(cliente);
    if (!clienteExiste) {
      return res.status(400).json({ error: 'Cliente não encontrado.' });
    }

    // Verifica se a oficina existe
    const oficinaExiste = await Oficina.findById(oficina);
    if (!oficinaExiste) {
      return res.status(400).json({ error: 'Oficina não encontrada.' });
    }

    // Verifica se o serviço existe
    const servicoExiste = await Servico.findById(servico);
    if (!servicoExiste) {
      return res.status(400).json({ error: 'Serviço não encontrado.' });
    }

    // Verifica se já existe um agendamento igual para o mesmo cliente, oficina, serviço e data
    const agendamentoDuplicado = await Agendamento.findOne({
      cliente,
      oficina,
      servico,
      data: dataAgendamento
    });

    if (agendamentoDuplicado) {
      return res.status(400).json({ error: 'Já existe um agendamento para este cliente, oficina, serviço e data.' });
    }

    const agendamento = new Agendamento(req.body);
    await agendamento.save();
    res.status(201).json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarAgendamentos = async (req, res) => {
  try {
    const agendamentos = await Agendamento.find().populate('cliente oficina servico');
    res.json(agendamentos);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const buscarAgendamentoPorId = async (req, res) => {
  try {
    const agendamento = await Agendamento.findById(req.params.id).populate('cliente oficina servico');
    if (!agendamento) return res.status(404).json({ error: 'Agendamento não encontrado' });
    res.json(agendamento);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const atualizarAgendamento = async (req, res) => {
  try {
    const { status } = req.body;

    // Se for atualizar o status, verifique se é válido
    if (status && !['pendente', 'concluido', 'cancelado'].includes(status)) {
      return res.status(400).json({ error: 'Status inválido.' });
    }

    // Busca o agendamento atual
    const agendamentoAtual = await Agendamento.findById(req.params.id);
    if (!agendamentoAtual) return res.status(404).json({ error: 'Agendamento não encontrado' });

    // Não permitir voltar de concluido para pendente
    if (
      agendamentoAtual.status === 'concluido' &&
      status === 'pendente'
    ) {
      return res.status(400).json({ error: 'Não é permitido alterar de concluído para pendente.' });
    }

    const agendamento = await Agendamento.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(agendamento);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deletarAgendamento = async (req, res) => {
  try {
    const agendamento = await Agendamento.findByIdAndDelete(req.params.id);
    if (!agendamento) return res.status(404).json({ error: 'Agendamento não encontrado' });
    res.json({ message: 'Agendamento deletado com sucesso' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  criarAgendamento,
  listarAgendamentos,
  buscarAgendamentoPorId,
  atualizarAgendamento,
  deletarAgendamento
};