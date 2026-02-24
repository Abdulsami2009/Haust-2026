const db = require('./db');

async function getGames() {
    const q = 'SELECT * FROM games ORDER BY created_at DESC';
    try {
        const result = await db.query(q);
        return result.rows;
    } catch (e) {
        console.error('Error fetching games:', e);
        return [];
    }
}

async function getGameById(id) {
    const q = 'SELECT * FROM games WHERE id = $1';
    try {
        const result = await db.query(q, [id]);

        if (result.rows.length === 0) {
            return null;
        }

        return result.rows[0];
    }   catch (e) {
        console.error('Error fetching game by ID:', e);
        return null;
    }
}

module.exports = {
    getGames,
    getGameById,
};