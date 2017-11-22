import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

const app = express()

app.use(cookieSession({
  name: 'session',
  keys: ["tantofaz"],
    token : null
}));

app.set("chaveCriptografia", "nodemelhorqjava");
app.use(bodyParser.json());

function verificaLogin(req, res, next) {
    if(req.path === "/login") next();
    var token = req.body.token || req.query.token || req.session.token;

    if (token) {
        jwt.verify(token, app.get('chaveCriptografia'), function(err, decod) {
            if (err) {
                return res.json({ success: false, msg: 'Token inválido ou expirado' });
            } else {
                next();
            }
        });
    } else {
        res.redirect("/login");
    }
}
app.use(verificaLogin);

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

rotas.all("/login",function(req,res){
    if(req.session.token) res.redirect("/");

    const conteudo = {
        id: 0
    };

    var token = jwt.sign(conteudo, app.get('chaveCriptografia'), {
        expiresIn : 60*60*24 //24 Horas
    });

    req.session.token = token;

    res.status(200).json({
      status: true,
      msg: 'Logado com sucesso',
      token: token
    });
})

rotas.all("/deslogar",function(req,res){
    req.session.token = null;
    res.redirect("/login");
});

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
