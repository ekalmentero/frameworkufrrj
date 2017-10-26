export default class Entidade {
    populatingObjectFromJson(json){
        for (let property of Object.getOwnPropertyNames(json)){
            eval("this.set" + property.charAt(0).toUpperCase() + property.slice(1) + "(json." + property + ")");
        }
    }


    toString(){
        return JSON.stringify(this);
    }
}
