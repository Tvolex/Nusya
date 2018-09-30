const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, './public')));



app.get(['/work', '/work/1'], (req, res, next) => {
    res.render('homeWork1');
});

app.get('/work/2', (req, res, next) => {
    res.render('homeWork2');
});

app.get('/work/3', (req, res, next) => {
    res.render('homeWork3');
});

app.use('/', (req, res, next) => {
    res.render('index');
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Started")
});