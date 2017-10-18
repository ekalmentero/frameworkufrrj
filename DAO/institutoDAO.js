import BD from '../BD';

export default class InstitutoDAO{
    static incluir(inst){
       return new Promise(
           function(resolve,reject){
              BD.inserir(inst).then((retorno) => {
                  inst.setId(retorno);
                  resolve(inst);
              })
           }
       )
    }


}
