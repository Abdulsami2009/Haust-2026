const express = require('express');
const router = express.Router();

const gamesControlller = require('../controllers/games.controller');

router.get('/', gamesControlller.index);
router.get('/game/:id', gamesControlller.detail);
router.get('/about', gamesControlller.about);

module.exports = router;