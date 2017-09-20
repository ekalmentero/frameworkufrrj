import express from 'express';
var router = express.Router();

router.all('/', function(req, res) {
    res.send('Teste');
})

export router;
