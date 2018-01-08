import Conteudo from '../modelos/conteudo';
import ConteudoDAO from '../DAO/conteudoDAO';
import Conteudo from '../modelos/aula';
import ConteudoDAO from '../DAO/aulaDAO';

export default class ConteudoController {

    static async create(conteudo, id_aula){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        return await ConteudoDAO.create(conteudoObj, id_aula);
    }

    static async read(id){
        var conteudo = new Conteudo();
        conteudo.id = id;
        return await ConteudoDAO.read(conteudo);
    }

    static async readAll(){
        return await ConteudoDAO.readAll();
    }

    static async update(conteudo, id_aula){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        if (typeof(id_aula) == "undefined")
            return await ConteudoDAO.update(conteudoObj);
        else
            return await ConteudoDAO.update(conteudoObj, id_aula);
    }

    static async delete(conteudo){
        var conteudoObj = new Conteudo();
        conteudoObj.parseEntidade(conteudo);
        return await ConteudoDAO.delete(conteudoObj);
    }
}
