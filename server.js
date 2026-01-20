const express = require('express');
const path = require('path');
const fs = require('fs')

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.static(path.join(__dirname, 'public')));

const getMovies = () => {
  const data = fs.readFileSync
  (path.join(__dirname, 'src/data/movies.json'));
  return JSON.parse(data);
};

// 3. Slóðir (Routes)
// Forsíða
app.get('/', (req, res) => {
    const movies = getMovies()
    res.render('index', { title: 'Bíóvefurinn', movies});
});


app.get('/movie/:id', (req, res) => {
    const movies = getMovies()
     const movie = movies.find(m => m.id === req.params.id);

  if (!movie) {
    return res.status(404).render('404', { title: 'Síða fannst ekki' });
}
  res.render('movie-details', { title: movie.title, movie });
});


app.use((req, res) => {
    res.status(404).send('sida fannst ekki (404)');
});

// 5. Ræsa þjóninn
app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
});