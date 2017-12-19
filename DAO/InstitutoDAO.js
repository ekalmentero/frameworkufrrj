import BD from '../BD';
import Instituto from '../modelos/Instituto.js';
import PredioDAO from './PredioDAO.js';
import Departamento from '../modelos/Departamento.js';
import DepartamentoDAO from './DepartamentoDAO.js';
import Predio from '../modelos/Predio.js';

export default class InstitutoDAO{
    

    static async create(inst){
        let query =  "INSERT INTO instituto (sigla, nome, deleted) "+
                     "VALUES ".concat("('", inst.getSigla(), "','", inst.getNome(), "',", 0 ,")");

        /*
            Ainda não consigo dar o catch nos erros,
            e não aguento mais pedir ao responsável, 
            infelizmente não será possivel retornar ao usuário quando acontecer algum erro. 
            E também não irei alterar o componente responsável, pois não é minha responsabilidade.
        */
        let retorno = await BD.query(query)
                            .then( (retorno) => {
                                return retorno.insertId;
                            });

        inst.setId(retorno);
        
        return inst;
    }


    static async read(inst){
        let inst_query = "SELECT * from instituto WHERE ";
        let inst_wheres_array = [];

        if(inst.getId() !== null)
            inst_wheres_array.push("id = ".concat(inst.getId()));

        if(inst.getNome() !== "")
            inst_wheres_array.push("nome = '".concat(inst.getNome(), "'"));

        if(inst.getSigla() !== "")
            inst_wheres_array.push("sigla = '".concat(inst.getSigla(), "'"));

        let retorno_instituto = await BD.query( inst_query.concat(inst_wheres_array.join(' AND ')) );
        let instituto = new Instituto();

        instituto.fillFromObject(retorno_instituto[0]);
       
        let predios_objs = (await PredioDAO.readByInstituto(instituto)).map( (raw_predio) => {
            
            let predio = new Predio();
            
            //predio.setInstitutos();
            predio.setId(raw_predio.id);
            predio.setSigla(raw_predio.sigla);
            predio.setNome(raw_predio.nome);
            predio.setLat(raw_predio.lat);
            predio.setLong(raw_predio.long);
            predio.setDeleted(raw_predio.deleted);

            return predio;
        });
        
        instituto.setPredios( predios_objs );

        let departamentos_objs = (await DepartamentoDAO.readByInstituto(instituto)).map( (dep_raw) => {
            let departamento = new Departamento();
        
            departamento.setId(dep_raw.id);  
            departamento.setNome(dep_raw.nome);
            //departamento.setInstituto(dep_raw.instituto);
            departamento.setDeleted(dep_raw.deleted);
            departamento.setSigla(dep_raw.sigla);

            return departamento;
        });


        instituto.setDepartamentos(departamentos_objs);

        return instituto;
    }


    static async search(instituto){
        let query = "SELECT * from instituto WHERE deleted=0 ",
            wheres_array = [];

        if(instituto.getNome() !== "")
            wheres_array.push("nome like '%"+instituto.getNome()+"%'");

        if(instituto.getSigla() !== "")
            wheres_array.push("sigla like '%"+instituto.getSigla()+"%'");

        if(instituto.getId() !== null)
            wheres_array.push("id = "+instituto.getId());

        if(wheres_array.length > 0)
            query = query.concat(" AND ", wheres_array.join(" OR "));


        let institutos = await BD.query( query )
                                .then( (retorno) => {
                                    return retorno.map( (raw_inst) => {
                                                let inst = new Instituto();
                                                inst.fillFromObject(raw_inst);
                                                return inst;
                                            });
                                });

        return institutos;
    }


    static async linkDepartamentosByDepsId(instituto, dep_ids){
        return DepartamentoDAO.linkToInstitutoByDepsIds(dep_ids, instituto);
    }


    static async linkPrediosByPrediosId(instituto, pred_ids){
        let query = "INSERT INTO instituto_predio (instituto, predio)"+
                    "VALUES ";

        let values = pred_ids.map( (pred_id) => { 
                                    return "("+instituto.getId()+","+pred_id+")"  
                                });

        return await BD.query( query.concat( values.join(',') ) );

    }

    static async update(instituto){
        let query = "UPDATE instituto SET ";
        let sets_array = [];
        let where = "WHERE id = "+instituto.getId()+" AND deleted=0 ";

        if(instituto.getNome() !== "")
            sets_array.push("nome='"+instituto.getNome()+"'");

        if(instituto.getSigla() !== "")
            sets_array.push("sigla='"+instituto.getSigla()+"'");

        if(sets_array.length == 0)
            return instituto;

        return await BD.query( query.concat( sets_array.join(","), where ) );
    }


    static async delete(instituto){
        let query = "UPDATE instituto SET deleted=1 "+
                    "WHERE id = "+instituto.getId();
        
        return await BD.query( query );
    }


    static async readAllByPredioId(pre_id){
        let query = "SELECT instituto.sigla, instituto.nome, instituto.id "+
                    "FROM instituto_predio "+
                    "LEFT JOIN instituto ON instituto.id = instituto_predio.instituto "+
                    "WHERE instituto_predio.predio = "+pre_id;

        return await BD.query(query);

    }
}
