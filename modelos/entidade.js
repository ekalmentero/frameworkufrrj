export default class Entidade {
    parseEntidade(json){ 
        var properties = Object.getOwnPropertyNames(this);
        for (let property of Object.getOwnPropertyNames(json)){
            if (property == "deleted") continue;
            if (!properties.includes(property)) continue;
            this.property = json.property;
        }
    }

    toString(){
        return JSON.stringify(this);
    }
}
