export default class Entidade {
    parseEntidade(json){ 
        var properties = Object.getOwnPropertyNames(this);
        for (let property of Object.getOwnPropertyNames(json)){
            if (property == "deleted") continue;
            if (!properties.includes(property)) continue;
            eval("this.set" + property.charAt(0).toUpperCase() + property.slice(1) + "(json." + property + ")");
        }
    }

    toString(){
        return JSON.stringify(this);
    }
}
