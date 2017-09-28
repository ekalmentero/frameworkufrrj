import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

app.listen(8080, function() {
    console.log("INICIADO");
})
