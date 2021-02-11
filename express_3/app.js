const express = require('express');
const admin   = require('./routes/admin') 

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express')
});

app.use('/admin', admin);


app.listen( port, () => {
    console.log('Express listhening on port', port)
})