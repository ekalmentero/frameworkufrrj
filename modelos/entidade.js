export default class Entidade {
    parseEntidade(json){
        for (let property of Object.getOwnPropertyNames(json)){
            if (property == "deleted") continue;
            eval("this.set" + property.charAt(0).toUpperCase() + property.slice(1) + "(json." + property + ")");
        }
    }


    toString(){
        return JSON.stringify(this);
    }
}
