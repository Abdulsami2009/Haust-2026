const gameService = require('../lib/gameService');

const index = (req, res) => {
    const games = gameService.getGames();
    res.render('index', { title: 'Games', games });
};

const detail = (req, res) => {
    const { id } = req.params;
    const game = gameService.getGameById(id);


    if (!game) {
        return res.status(404).render('404', { title: 'Game Not Found' });
    }

    res.render('game-details', { title: game.title, game });
};

module.exports = {
    index,
    detail
};