const express = require('express');
const path = require('path');

const gamesRouter = require('./src/routes/games.routes');

const app = express();
const PORT = 3000;

app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', gamesRouter);

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Page not found' });
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal Server Error');
})


app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
    console.log('Stop with ctrl + C');
});