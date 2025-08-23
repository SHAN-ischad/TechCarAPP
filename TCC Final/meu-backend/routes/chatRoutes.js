const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.enviarChat);
router.get('/', chatController.listarChats);

module.exports = router;