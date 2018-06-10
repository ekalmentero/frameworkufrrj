import Conteudo from '../model/conteudo';
import ConteudoDAO from '../DAO/conteudoDAO';

export default class ConteudoController {

    static async create(conteudo){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        return await ConteudoDAO.create(conteudoObj);
    }

    static async read(id){
        var conteudo = new Conteudo();
        conteudo.setId(id);
        return await ConteudoDAO.read(conteudo);
    }

    static async readAll(){
        return await ConteudoDAO.readAll();
    }

    static async update(conteudo){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        return await ConteudoDAO.update(conteudoObj);
    }

    static async delete(conteudo){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        return await ConteudoDAO.delete(conteudoObj);
    }
}
