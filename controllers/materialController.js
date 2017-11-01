import Material from '../modelos/material';
import MaterialDAO from '../DAO/materialDAO';

export default class MaterialController {
    static async create(material){
        var materialObj = new Material();
        materialObj.parseEntidade(material);
        return await MaterialDAO.create(materialObj);
    }

    static async read(id){
        var material = new Material();
        material.setId(id);
        return await MaterialDAO.read(material);
    }

    static async readAll(){
        return await MaterialDAO.readAll();
    }

    static async update(material){
        var materialObj = new Material();
        materialObj.parseEntidade(material);
        return await MaterialDAO.update(materialObj);
    }

    static async delete(material){
        var materialObj = new Material();
        materialObj.parseEntidade(material);
        return await MaterialDAO.delete(materialObj);
    }
}
