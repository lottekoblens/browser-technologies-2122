const express = require(`express`);
const env = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000;
const fs = require('fs');
let stringData;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('view engine', 'ejs');

const renderPages = (res, route) => {
    if (route !== 'manifest.json') {
        fs.readFile(`json/${route}.json`, 'utf8', (err, data) => {
            if (err) throw err;
            let infoFromEnquete
            if (data) {
                infoFromEnquete = JSON.parse(data);
            }

            if (route === 'student') {
                res.render('home', {
                    student: infoFromEnquete
                });
            }
            if (route === 'css') {
                res.render('css', {
                    css: infoFromEnquete
                });
            }
            if (route === 'wafs') {
                res.render('wafs', {
                    wafs: infoFromEnquete
                });
            }
            if (route === 'bt') {
                res.render('bt', {
                    bt: infoFromEnquete
                });
            }
            if (route === 'pwa') {
                res.render('pwa', {
                    pwa: infoFromEnquete
                });
            }
            if (route === 'hcd') {
                res.render('hcd', {
                    hcd: infoFromEnquete
                });
            }
            if (route === 'rtw') {
                res.render('rtw', {
                    rtw: infoFromEnquete
                });
            }
        });
    }
}

const dataEnquete = (req) => {
    return {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling-${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof-${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg-${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht-${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
}

app.get('/', (req, res) => {
    renderPages(res, 'student')
});

app.get('/:id', (req, res) => {
    const route = req.params.id;
    renderPages(res, route)
});

app.post('/css', (req, res) => {
    const student = {
        "naam": req.body.naam,
        "studentnummer": req.body.studentnummer
    }
    stringData = JSON.stringify(student);

    fs.writeFile('json/student.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'css')
});

app.post('/wafs', (req, res) => {
    const css = dataEnquete(req);
    stringData = JSON.stringify(css);

    fs.writeFile('json/css.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    })
    renderPages(res, 'wafs')
});

app.post('/bt', (req, res) => {
    const wafs = dataEnquete(req);
    stringData = JSON.stringify(wafs);

    fs.writeFile('json/wafs.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'bt')
});

app.post('/pwa', (req, res) => {
    const bt = dataEnquete(req);
    stringData = JSON.stringify(bt);

    fs.writeFile('json/bt.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'pwa')
});

app.post('/hcd', (req, res) => {
    const pwa = dataEnquete(req);
    stringData = JSON.stringify(pwa);

    fs.writeFile('json/pwa.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'hcd')
});

app.post('/rtw', (req, res) => {
    const hcd = dataEnquete(req);
    stringData = JSON.stringify(hcd);

    fs.writeFile('json/hcd.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    renderPages(res, 'rtw')
});

app.post('/end', (req, res) => {
    const rtw = dataEnquete(req);
    stringData = JSON.stringify(rtw);

    fs.writeFile('json/rtw.json', stringData, (err) => {
        if (err) {
            console.log(err)
        }
    });
    res.render('end');
});

app.use((req, res) => {
    res.status(404).send('Sorry, deze pagina kon ik niet vinden.');
});

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});