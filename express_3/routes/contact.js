const express  = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('contact 이후 url')
})

router.get('/list', (req, res) => {
    res.send('contact list 이후 url')
})

module.exports = router;