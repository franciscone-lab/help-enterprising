var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Empresa = require('../models').Empresa;

/* ROTA PARA CADASTRAR EMPRESA */
router.post('/empresa/:idUsuario', function (req, res, next) {
	console.log('iniciou o cadastro da empresa...');

	let idUsuario = req.params.idUsuario;

	Empresa.create({
		cnpjEmpresa: req.body.cnpjEmpresa,
		nomeFantasiaEmpresa: req.body.nomeFantasiaEmpresa,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log("Empresa cadastrada com sucesso!");
		res.send(resultado);
	}).catch(erro => {
		console.log('DEU UM ERRINHO')
		console.error(erro);
		res.status(500).send(erro.message);
	})
})

module.exports = router;