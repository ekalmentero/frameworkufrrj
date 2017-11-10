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

  static async create(turma){
    try{
      var id= await BD.inserir(turma);
      turma.setId(id);
      return turma;
    }catch(error){
      error.message;
    }

  }

  static async read(turma){
    try{
      var result= await BD.buscar(turma);
      var turmaTemp= new Turma();
      turmaTemp.setCodigo(result[0].codigo);
      turmaTemp.setId(result[0].id);
      turmaTemp.setVagas(result[0].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(result[0].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(result[0].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(result[0].disciplina));

      return turmaTemp;
    }
    catch(error){
      error.message;
    }
  }

  static async readAll(){
      return await BD.query("SELECT * FROM turma where deleted=0");
  }

  static async delete(turma){
    return await BD.deletar(turma);
  }

  static async update(turma){
    return await BD.update(turma);
  }

  static async listarTurmasProfessor(id, id_professor){
    var id=id_professor;
    var sql='SELECT * FROM turma WHERE professor=';
    var query=sql+id;
    console.log(query);
    return await BD.query(query);
    /*var array= new Array();
    var i=0;

    while(i<result.lenght){
      var turmaTemp= new Turma();
      turmaTemp.setCodigo(result[i].codigo);
      turmaTemp.setVagas(result[i].vagas);
      turmaTemp.setProfessor(ProfessorDAO.read(result[i].professor));
      turmaTemp.setPeriodo(PeridoDAO.read(result[i].periodo));
      turmaTemp.setDisciplina(DisciplinaDAO.read(result[i].disciplina));
      array.push(turmaTemp);
      i++;

    }
    return array;*/
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

    return array;


  }
}
