import express from 'express'
const app = express()

app.use(express.static(__dirname + '/recursos'))

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

import rotas from './rotas'
app.use(rotas)

import testes from './test'
rotas.use('/teste',testes)

import disciplinas from './rotas/disciplinaRouter'
rotas.use('/disciplinas',disciplinas)

import curso from './rotas/cursoRouter'
rotas.use('/curso', curso)

import departamento from './rotas/departamentoRouter'
rotas.use('/departamento', departamento)

import professor from './rotas/professorRouter'
rotas.use('/professor',professor)

import periodo from './rotas/periodoRouter'
rotas.use('/periodo',periodo)

import turma from './rotas/turmaRouter'
rotas.use('/turma',turma)

import alunos from './rotas/alunoRouter'
rotas.use('/alunos',alunos)

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
