var express = require('express');
var router = express.Router();
var Empresa = require('../models').Empresa;
var Endereco = require('../models').Endereco;


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

/* ROTA PARA CADASTRAR ENDERECO DE EMPRESA */
router.post('/endereco/:idEmpresa', function (req, res, next) {
	console.log('iniciou o cadastro da empresa...');

	let idEmpresa = req.params.idEmpresa;

	Endereco.create({
		ruaEndereco: req.body.ruaEndereco,
		numeroEndereco: req.body.numeroEndereco,
		cepEndereco: req.body.cepEndereco,
		complementoEndereco: req.body.complementoEndereco,
		nomeFantasiaEmpresa: req.body.nomeFantasiaEmpresa,
		fkEmpresa: idEmpresa
	}).then(resultado => {
		console.log("Endereço de Empresa cadastrado com sucesso!");
		res.send(resultado);
	}).catch(erro => {
		console.log('DEU UM ERRINHO')
		console.error(erro);
		res.status(500).send(erro.message);
	})
})

module.exports = router;