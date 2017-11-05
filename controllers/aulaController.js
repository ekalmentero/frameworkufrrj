import Aula from '../modelos/Aula';
import AulaDAO from '../DAO/AulaDAO';

export default class AulaController {
    static async create(aula){
        var aulaObj = new Aula();
        aulaObj.parseAula(aula);
        return await AulaDAO.create(aulaObj);
    }

	/**	read
	 * 	
	 * se id == null > busca todos. 
	 * se não, busca específico
	 *		 
	 */
    static async read(id){
        var aula = new Aula();
        aula.setId(id);
        return await AulaDAO.read(aula);
    }

    static async update(aula){
        var aulaObj = new Aula();
        aulaObj.parseAula(aula); 
        return Aula.update(aulaObj);
    }

    static async delete(aula){
        var aulaObj = new Aula();
        aulaObj.parseAula(aula);
        return Aula.delete(aulaObj);
    }
}
