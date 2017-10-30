import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste',testes)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

var crypto = require('crypto')

rotas.all("/login",function(req,res){
    if(req.body.login == "bruno" && req.body.senha == crypto.createHash("md5").update("senha").digest("hex")){
        res.send({status:1,msg:"Logado",token:crypto.randomBytes(32).toString()});
    } else {
        res.send({status:0,msg:"Login incorreto"});
    }
})

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
