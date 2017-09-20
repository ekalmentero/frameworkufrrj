var express = require('express'), app = express();

app.use(express.static(__dirname + '/recursos'))

// IMPORTA CONTROLADORES
app.use(require('./rotas'))

app.listen(8080, function() {
    console.log("INICIADO");
})
