import BD from '../BD';

export default class InstitutoDAO{
    static async incluir(inst){
        var retorno = await BD.inserir(inst);
        inst.setId(retorno);
        return inst;
    }

    static async selecionarTudo(){
         return await BD.query("SELECT * FROM instituto");
    }

}
