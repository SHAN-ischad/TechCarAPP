const Chat = require('../models/chatModel');

const enviarChat = async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const listarChats = async (req, res) => {
  try {
    const { usuario1, usuario2 } = req.query;
    const chats = await Chat.find({
      $or: [
        { remetente: usuario1, destinatario: usuario2 },
        { remetente: usuario2, destinatario: usuario1 }
      ]
    }).sort('data');
    res.json(chats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
module.exports = {
  enviarChat,
  listarChats
};