// Express 6강부터 ~

const express  = require('express');
const app      = express();
const port     = 3000;

const nunjucks   = require('nunjucks');
const logger     = require('morgan')

app.use(express.json());
app.use(express.urlencoded({ extended : false }))
app.use(logger('dev'));
app.use('/uploads', express.static('uploads'));

const admin    = require('./routes/admin') 
app.use('/admin', vipmiddleware, admin);

nunjucks.configure('template', {
    autoescape : true,
    express    : app
});

app.get('/', (req, res) => {
    res.send('hello express')
});

function vipmiddleware(req, res, next){
    console.log('최우선 미들웨어')
    next();
}

app.listen(port, () => {
    console.log('Express listhening on port', port)
})