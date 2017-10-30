import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste',testes)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

import presencas from './rotas/presencaRouter'
rotas.use('/presencas',presencas)

var crypto = require('crypto')

rotas.all("/login",function(req,res){
    res.send(crypto.createHash("md5").update("teste").digest("hex"));
})

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
