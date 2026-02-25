const gameService = require('../lib/gameService');

async function index(req, res) {
    const games = await gameService.getGames();
    res.render('index', { title: 'Games', games});
}


async function game(req, res) {
    const id = req.params.id;
    const game = await gameService.getGameById(id);

    console.log('Beðið um ID:', id);
    console.log('Fannst mynd:', game);
    if (!game) {
        return res.status(404).render('404', {title: 'Síða fannst ekki' });
    }

    res.render('game-details', {title: game.title, game });
}


const about = (req, res) => {
    res.render('about', { title: 'About' });
};

module.exports = {
    index,
    game,
    about,
};