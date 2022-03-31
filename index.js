const express = require(`express`);
const app = express();
const bodyParser = require('body-parser')
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.set('view engine', 'ejs');

let student;
let css;
let wafs;
let bt;
let pwa;
let hcd;
let rtw;

app.get('/', (req, res) => {
    res.render('home', {
        student
    });
});

app.post('/css', (req, res) => {
    student = {
        "naam": req.body.naam,
        "studentnummer": req.body.studentnummer
    }
    console.log(student)
    res.render('css', {
        css
    });
})

app.get('/css', (req, res) => {
    res.render('css', {
        css
    })
})

app.post('/wafs', (req, res) => {
    css = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('wafs', {
        wafs
    });
})

app.get('/wafs', (req, res) => {
    res.render('wafs')
})

app.post('/bt', (req, res) => {
    wafs = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('bt', {
        bt
    });
})

app.get('/bt', (req, res) => {
    res.render('bt')
})

app.post('/pwa', (req, res) => {
    bt = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('pwa', {
        pwa
    });
})

app.get('/pwa', (req, res) => {
    res.render('pwa')
})

app.post('/hcd', (req, res) => {
    pwa = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('hcd', {
        hcd
    });
})

app.get('/hcd', (req, res) => {
    res.render('hcd')
})

app.post('/rtw', (req, res) => {
    hcd = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('rtw', {
        rtw
    });
})

app.get('/rtw', (req, res) => {
    res.render('rtw')
})

app.post('/end', (req, res) => {
    rtw = {
        "docent": req.body.docent,
        "startPeriode": req.body.startPeriode,
        "eindePeriode": req.body.eindePeriode,
        "beoordeling": `beoordeling${req.body.beoordeling}`,
        "beoordelingToelichting": req.body.beoordelingToelichting,
        "lesstof": `lesstof${req.body.lesstof}`,
        "lesstofToelichting": req.body.uitlegToelichting,
        "uitleg": `uitleg${req.body.uitleg}`,
        "uitlegToelichting": req.body.uitlegToelichting,
        "inzicht": `inzicht${req.body.inzicht}`,
        "inzichtToelichting": req.body.inzichtToelichting
    }
    res.render('end');
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