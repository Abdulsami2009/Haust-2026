const { Pool } = require('pg');

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error('DATABASE_URL environment variable is not set.');
    process.exit(1);
}

const pool = new Pool({
    connectionString,
});

pool.on('error', (err) => {
    console.error('Unexpected error on idle client', err);
    process.exit(-1);
});

async function query (q, values = []) {
    const client = await pool.connect();
    try {
        const result = await client.query(q, values);
        return result;
    } catch (e) {
        console.error('Database query error:', e);
        throw e;
    }   finally {
        client.release();
    }
}

module.exports = {
    query,
};