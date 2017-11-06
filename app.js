import express from 'express'
import jwt from 'jsonwebtoken'
import bodyParser from 'body-parser';

const app = express()

app.set("chaveCriptografia", "nodemelhorqjava");
app.use(bodyParser.json());

function verificaLogin(req, res, next) {
    if(req.path === '/login') { next(); return; }
    if(typeof(req.body) == undefined) {console.log("FAIL");res.redirect("/login");}
    var token = req.body.token || req.query.token || req.headers['token'];

    if (token) {
        jwt.verify(token, app.get('chaveCriptografia'), function(err, decod) {
            if (err) {
                return res.json({ success: false, msg: 'Token inválido ou expirado' });
            } else {
                req.decod = decod;
                next();
            }
        });
    } else {
        // return res.status(403).json({
        //     success: false,
        //     message: 'Nenhum token'
        // });
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
    // if(req.body.login == "bruno" && req.body.senha == crypto.createHash("md5").update("senha").digest("hex")){
    //     res.send({status:1,msg:"Logado",token:crypto.randomBytes(32).toString()});
    // } else {
    //     res.send({status:0,msg:"Login incorreto"});
    // }

    const conteudo = {
        id: 0
    };

    var token = jwt.sign(conteudo, app.get('chaveCriptografia'), {
        expiresIn : 60*60*24 //24 Horas
    });

    res.json({
      status: true,
      msg: 'Logado com sucesso',
      token: token
    });
})

app.listen(8080, function() {
    console.log("APP : INICIADO");
})
