const fs = require('fs');
const path = require('path');

const loadData = () => {
    const filePath = path.join(__dirname, '../data/games.json');
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
};

const getGames = () => {
    const games = loadData();
    return games;
};

const getGameId = (id) => {
    const games = loadData();
    return games.find((g) => g.id === id);
};

module.exports = {
    getGames,
    getGameId
};