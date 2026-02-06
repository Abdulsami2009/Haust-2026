const express = require('express');
const router = express.Router();

const gamesControlller = require('../controllers/games.controller');

router.get('/', gamesControlller.index);
router.get('/game/:id', gamesControlller.detail);

module.exports = router;