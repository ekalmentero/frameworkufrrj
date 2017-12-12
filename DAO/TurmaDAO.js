import Turma from "../modelos/Turma";
import Professor from "../modelos/Professor";
import Periodo from '../modelos/Periodo';
import Disciplina from '../modelos/disciplina';
import ProfessorDAO from '../DAO/ProfessorDAO';
import DisciplinaDAO from '../DAO/disciplinaDAO';
import PeriodoDAO from '../DAO/PeriodoDAO';
import BD from "../BD";


export default class TurmaDAO{
  constructor(){

  }

  static async create(turma,id_disciplina,id_periodo){
    try{
      //var foreignKeys=[];
      //foreignKeys.push(['disciplina',id_disciplina]);
      //foreignKeys.push(['periodo',id_periodo]);
      //var id= await BD.inserir(turma,foreignKeys);
      //turma.setId(id);
      console.log("oi");
      if(typeof(turma.professor)!= 'undefined'){
          var result= await BD.query("INSERT INTO turma SET codigo='"+turma.getCodigo+"',turno='"+turma.getTurno+"',vagas='"+turma.vagas+"',periodo='"+id_periodo+"',disciplina='"+id_disciplina+"', professor='"+turma.professor+"'");
      }
      else{
          var result= await BD.query("INSERT INTO turma SET codigo='"+turma.getCodigo+"',turno='"+turma.getTurno+"',vagas='"+turma.vagas+"',periodo='"+id_periodo+"',disciplina='"+id_disciplina+"'");
      }
      //return turma;
      turma.setId(result.insertId);
      return turma;

    }
    catch(error){
      error.message;
    }

  }

  static async read(turma){
    try{
      var turmaObj= new Turma();
      var disciplinaObj= new Disciplina();
      var periodoObj= new Periodo();


      var result= await BD.query("SELECT * FROM turma WHERE id='"+turma.getId+"'");
      var resultDisciplina= await BD.query("SELECT * FROM disciplina WHERE id='"+result[0].disciplina+"'");
      var resultPeriodo= await BD.query("SELECT * FROM periodo WHERE id='"+result[0].periodo+"'");

      //populando o obj disciplinaObj
      disciplinaObj.setNome(resultDisciplina[0].nome);
      disciplinaObj.setCodigo(resultDisciplina[0].codigo);
      disciplinaObj.setCreditos(resultDisciplina[0].creditos);
      disciplinaObj.setLivre_escolha(resultDisciplina[0].livre_escolha);
      disciplinaObj.setId(resultDisciplina[0].id);
      //populando o obj disciplinaObj

      //populando o obj periodoObj
      periodoObj.setDataFim(resultPeriodo[0].data_fim);
      periodoObj.setDataInicio(resultPeriodo[0].data_inicio);
      periodoObj.setNome(resultPeriodo[0].nome);
      periodoObj.setId(resultPeriodo[0].id);
      //populando o obj periodoObj

      //populando professor se existir professor setado para turma
      if(result[0].professor != null ){
        var resultProfessor= await BD.query("SELECT * FROM professor WHERE id='"+result[0].professor+"'");
        var professorObj= new Professor();
        professorObj.setNome(resultProfessor[0].nome);
        professorObj.setMatricula(resultProfessor[0].matricula);
        turmaObj.setProfessor(professorObj);
        console.log(professorObj);
      }
      //populando professor se existir professor setado para turma

      //populando obj de turma
      turmaObj.setId(result[0].id);
      turmaObj.setTurno(result[0].turno);
      turmaObj.setCodigo(result[0].codigo);
      turmaObj.setVagas(result[0].vagas);
      turmaObj.setPeriodo(periodoObj);
      turmaObj.setDisciplina(disciplinaObj);
      //populando obj de turma
      console.log(turmaObj.getPeriodo);
      return turmaObj;


      //turmaTemp.parseEntidade(result[0]);
      console.log(turmaTemp.getCodigo);


    return turmaTemp;
  }
    catch(error){
      error.message;
    }
  }

  static async readAll(){
      var result=await BD.query("SELECT * FROM turma where deleted=0");
      var turmas= [];
      for (let object of result){
        var turmaObj= new Turma();
        var disciplinaObj= new Disciplina();
        var periodoObj= new Periodo();

        var resultDisciplina= await BD.query("SELECT * FROM disciplina WHERE id='"+object.disciplina+"'");
        var resultPeriodo= await BD.query("SELECT * FROM periodo WHERE id='"+object.periodo+"'");

        //populando o obj disciplinaObj
        disciplinaObj.setNome(resultDisciplina[0].nome);
        disciplinaObj.setCodigo(resultDisciplina[0].codigo);
        disciplinaObj.setCreditos(resultDisciplina[0].creditos);
        disciplinaObj.setLivre_escolha(resultDisciplina[0].livre_escolha);
        disciplinaObj.setId(resultDisciplina[0].id);
        //populando o obj disciplinaObj

        //populando o obj periodoObj
        periodoObj.setDataFim(resultPeriodo[0].data_fim);
        periodoObj.setDataInicio(resultPeriodo[0].data_inicio);
        periodoObj.setNome(resultPeriodo[0].nome);
        periodoObj.setId(resultPeriodo[0].id);
        //populando o obj periodoObj

        //populando professor se existir professor setado para turma
        if(result[0].professor != null ){
          var resultProfessor= await BD.query("SELECT * FROM professor WHERE id='"+result[0].professor+"'");
          var professorObj= new Professor();
          professorObj.setNome(resultProfessor[0].nome);
          professorObj.setMatricula(resultProfessor[0].matricula);
          turmaObj.setProfessor(professorObj);
        }
        //populando professor se existir professor setado para turma

        //populando obj de turma
        turmaObj.setId(object.id);
        turmaObj.setCodigo(object.codigo);
        turmaObj.setTurno(object.turno);
        turmaObj.setVagas(object.vagas);
        turmaObj.setPeriodo(periodoObj);
        turmaObj.setDisciplina(disciplinaObj);
        turmas.push(turmaObj);

      }
      return turmas;
  }

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    console.log(turma);
    return await BD.update(turma);
      //return await BD.query("UPDATE TURMA SET turno='"+turma.getTurno+"', codigo='"+turma.getCodigo+"', vagas='"+turma.getVagas+"', disciplina='"+turma.getDisciplina+"', periodo='"+turma.getPeriodo+"'");
  }

  static async listarTurmasProfessor(id_professor){
    var id=id_professor;
    var result=await BD.query("SELECT * FROM turma WHERE professor='"+id+"'");
    console.log(result);
    var turmas=[];

    for (let object of result){
      var turma= new Turma();
      var disciplinaObj= new Disciplina();
      var resultDisciplina= await BD.query("SELECT * disciplina WHERE id='"+object.disciplina+"'");

      //popular disciplinaObj
      disciplinaObj.setId(resultDisciplina[0].id);
      disciplinaObj.setNome(resultDisciplina[0].nome);
      disciplinaObj.setCodigo(resultDisciplina[0].codigo);
      disciplinaObj.setCreditos(resultDisciplina[0].creditos);
      disciplinaObj.setLivre_escolha(resultDisciplina[0].livre_escolha);
      //popular disciplinaObj

      turmaTemp.setCodigo(object.codigo);
      turmaTemp.setId(object.id);
      turmaTemp.setVagas(object.vagas);
      turmaTemp.setDisciplina(disciplinaObj);

      turmas.push(turmas);
    }
    return turmas;
  }

  static async listarTurmasAluno(id_aluno){
    var id=id_aluno; //pega o id do aluno que vem do controller
    var result= await BD.query('SELECT turma FROM aluno_turma WHERE aluno='+id); //retorna um array de ids das turmas de um aluno
    var i=0;
    var array= new Array();

    while(i<result.lenght){
      var turmaTemp= new Turma(); //variável temp de turma
      turmaTemp.id=result[i].turma; //faz a busca da turma usando os ids da busca da linha 83, usando o i para navegar pelas posições
      var resultTurma=BD.buscar(turmaTemp); //faz a busca
      turmaTemp.codigo=resultTurma[0].codigo; //instancia o objeot
      turmaTemp.vagas=resultTurma[0].vagas;
      turmaTemp.professor=ProfessorDAO.read(resultTurma[0].professor);
      turmaTemp.periodo=PeridoDAO.read(resultTurma[0].periodo);
      turmaTemp.disciplina=DisciplinaDAO.read(resultTurma[0].disciplina);
      array.push(turmaTemp); //joga no array
      i++;
    }


  }

  static async insertProfessorTurma(turma,id_professor){
      var id= turma.getId;

      return await BD.query("UPDATE TURMA SET professor='"+id_professor+"'WHERE id='"+id+"'");
  }
}
