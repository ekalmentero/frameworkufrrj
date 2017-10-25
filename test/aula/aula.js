"use strict";

import AulaDAO from "../../DAO/AulaDAO.js";
import Aula from "../../modelos/Aula.js";

exports.test = (req, res) => {
	let aulaDAO = new aulaDAO;
	let aula = new Aula();
    aula.setTurma('T08');
    aula.setData('10-10-2000');

    aulaDAO.insert(aula);
    res.send("inserção");
}