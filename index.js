const express = require(`express`);
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('home');
});

app.post('/css', (req, res) => {
    res.render('css')
})

app.get('/css', (req, res) => {
    res.render('css')
})

app.post('/wafs', (req, res) => {
    res.render('wafs')
})

app.get('/wafs', (req, res) => {
    res.render('wafs')
})

app.post('/bt', (req, res) => {
    res.render('bt')
})

app.get('/bt', (req, res) => {
    res.render('bt')
})

app.post('/pwa', (req, res) => {
    res.render('pwa')
})

app.get('/pwa', (req, res) => {
    res.render('pwa')
})

app.post('/hcd', (req, res) => {
    res.render('hcd')
})

app.get('/hcd', (req, res) => {
    res.render('hcd')
})

app.post('/rtw', (req, res) => {
    res.render('rtw')
})

app.get('/rtw', (req, res) => {
    res.render('rtw')
})

app.post('/end', (req, res) => {
    res.render('end')
})

app.get('/end', (req, res) => {
    res.render('end')
})

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});