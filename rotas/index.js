var express = require('express')
    ,router = express.Router();

router.all('/', function(req, res) {
    res.send('Teste');
})

module.exports = router
