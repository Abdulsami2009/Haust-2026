const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// 1. Stillingar fyrir Views (EJS)
// Við segjum Express að leita að views í 'src/views' möppunni
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// 2. Statískar skrár (CSS, myndir)
// Allt sem er í 'public' möppunni verður aðgengilegt á vefnum (t.d. /css/styles.css)
app.use(express.static(path.join(__dirname, 'public')));

// 3. Slóðir (Routes)
// Forsíða
app.get('/', (req, res) => {
    res.render('index', { title: 'Home'});
});

// Um okkur síða
app.get('/about', (req, res) => {
    res.render('about', { title: 'About me'});
});

// 4. Villumeðhöndlun (404)
// Ef engin ofangreind slóð passfar, grípum við það hér
app.use((req, res) => {
    res.status(404).send('sida fannst ekki (404)');
});

// 5. Ræsa þjóninn
app.listen(PORT, () => {
    console.log(`Server keyrir a http://localhost:${PORT}`);
});