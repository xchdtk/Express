const express  = require('express');
const nunjucks = require('nunjucks');
const logger   = require('morgan')

const admin    = require('./routes/admin') 

const app  = express();
const port = 3000;

nunjucks.configure('template', {
    autoescape : true,
    express    : app
});

// 미들웨어 세팅
app.use(logger('dev'));

app.get('/', (req, res) => {
    res.send('hello express')
});

function vipmiddleware(req, res, next){
    console.log('최우선 미들웨어')
    next();
}

app.use('/admin', vipmiddleware, admin);

app.listen( port, () => {
    console.log('Express listhening on port', port)
})