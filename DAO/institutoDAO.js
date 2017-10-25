import BD from '../BD';

export default class InstitutoDAO{
    static async incluir(inst){
        var retorno = await BD.inserir(inst);
        inst.setId(retorno);
        return inst;
    }

    static async buscar(inst){
        var retorno = await BD.buscar(inst);
        return retorno;
    }

    static async selecionarTudo(){
         return await BD.query("SELECT * FROM instituto");
    }

}
