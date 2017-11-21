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
      var foreignKeys=[];
      //foreignKeys.push(['disciplina',id_disciplina]);
      //foreignKeys.push(['periodo',id_periodo]);
      //var id= await BD.inserir(turma,foreignKeys);
      //turma.setId(id);
      return await BD.query("INSERT INTO turma SET codigo='"+turma.getCodigo+"',turno='"+turma.getTurno+"',vagas='"+turma.vagas+"',periodo='"+id_periodo+"',disciplina='"+id_disciplina+"'");
      //return turma;
    }catch(error){
      error.message;
    }

  }

  static async read(turma){
    try{
      var result= await BD.buscar(turma);
      var turmaTemp= new Turma();
      //console.log(result[0]);
      //turmaTemp.setCodigo(result[0].codigo);
      //turmaTemp.setId(result[0].id);
      //turmaTemp.setVagas(result[0].vagas);
      //turmaTemp.setProfessor(ProfessorDAO.read(result[0].professor));
      //turmaTemp.setPeriodo(PeridoDAO.read(result[0].periodo));
      //turmaTemp.setDisciplina(DisciplinaDAO.read(result[0].disciplina));
      turmaTemp.parseEntidade(result[0]);
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
        var turma= new Turma();
        turma.parseEntidade(object);
        array.push(turma);
      }
      return turmas;
  }

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    return await BD.update(turma);
  }

  static async listarTurmasProfessor( id_professor){
    var id=id_professor;
    var sql='SELECT * FROM turma WHERE professor=';
    var query=sql+id;
    var result=await BD.query(query);
    console.log(result);
    var array= new Array();
    /*var i=0;
    while(i<result.lenght){
      var turmaTemp= new Turma();
      turmaTemp.setCodigo(result[i].codigo);
      turmaTemp.setVagas(result[i].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(result[i].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(result[i].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(result[i].disciplina));
      array.push(turmaTemp);
      i++;

    }*/

    for (let object of result){
      var turma= new Turma();
      turma.parseEntidade(object);
      array.push(turma);
    }
    return array;
  }

  static async listarTurmasAluno(id_aluno){
    var id=id_aluno; //pega o id do aluno que vem do controller
    var result= await BD.query('SELECT turma FROM aluno_turma WHERE aluno='+id); //retorna um array de ids das turmas de um aluno
    var i=0;
    var array= new Array();

    while(i<result.lenght){
      var turmaTemp= new Turma(); //variável temp de turma
      turmaTemp.setId(result[i].turma); //faz a busca da turma usando os ids da busca da linha 83, usando o i para navegar pelas posições
      var resultTurma=BD.buscar(turmaTemp); //faz a busca
      turmaTemp.setCodigo(resultTurma[0].codigo); //instancia o objeot
      turmaTemp.setVagas(resultTurma[0].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(resultTurma[0].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(resultTurma[0].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(resultTurma[0].disciplina));
      array.push(turmaTemp); //joga no array
      i++;
    }


  }

  static async insertProfessorTurma(turma,id_professor){
      var id= turma.getId;

      return await BD.query("UPDATE TURMA SET professor='"+id_professor+"'WHERE id='"+id+"'");
  }
}
