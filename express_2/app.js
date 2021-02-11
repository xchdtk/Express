const express = require('express');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('hello express')
});

app.get('/fastcampus', (req, res) => {
    res.send('fastcampus express')
});


app.listen( port, () => {
    console.log('Express listhening on port', port)
})
