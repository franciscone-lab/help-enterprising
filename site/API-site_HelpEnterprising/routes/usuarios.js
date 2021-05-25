var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var Empresa = require('../models').Empresa;

let sessoes = [];

/* Recuperar usuário por login e senha */
router.post('/autenticar', function (req, res, next) {
	console.log('Recuperando usuário por login e senha');

	var login = req.body.loginUsuario; // depois de .body, use o nome (name) do campo em seu formulário de login
	var senha = req.body.senhaUsuario; // depois de .body, use o nome (name) do campo em seu formulário de login	

	let instrucaoSql = `select * from usuario where loginUsuario='${login}' and senhaUsuario='${senha}'`;
	console.log(instrucaoSql);

	sequelize.query(instrucaoSql, {
		model: Usuario
	}).then(resultado => {
		console.log(`Encontrados: ${resultado.length}`);

		if (resultado.length == 1) {
			sessoes.push(resultado[0].dataValues.login);
			console.log('sessoes: ', sessoes);
			res.json(resultado[0]);
		} else if (resultado.length == 0) {
			res.status(403).send('Login e/ou senha inválido(s)');
		} else {
			res.status(403).send('Mais de um usuário com o mesmo login e senha!');
		}

	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/* Cadastrar Usuário */
router.post('/usuario', function (req, res, next) {
	console.log('Criando um usuário');

	Usuario.create({
		loginUsuario: req.body.loginUsuario,
		senhaUsuario: req.body.senhaUsuario,
		nomeUsuario: req.body.nomeUsuario,
		cpfUsuario: req.body.cpfUsuario,
		emailUsuario: req.body.emailUsuario,
		sexoUsuario: req.body.sexoUsuario,

	}).then(resultado => {
		console.log(`Registro de usuário criado: ${resultado}`)
		res.send(resultado);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

/*Cadastra uma empresa */
router.post('/empresa/:idUsuario', function (req, res, next) {
	console.log('iniciou o cadastro da empresa');

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

/* Verificação de usuário */
router.get('/sessao/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Verificando se o usuário ${login} tem sessão`);

	let tem_sessao = false;
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] == login) {
			tem_sessao = true;
			break;
		}
	}

	if (tem_sessao) {
		let mensagem = `Usuário ${login} possui sessão ativa!`;
		console.log(mensagem);
		res.send(mensagem);
	} else {
		res.sendStatus(403);
	}

});


/* Logoff de usuário */
router.get('/sair/:login', function (req, res, next) {
	let login = req.params.login;
	console.log(`Finalizando a sessão do usuário ${login}`);
	let nova_sessoes = []
	for (let u = 0; u < sessoes.length; u++) {
		if (sessoes[u] != login) {
			nova_sessoes.push(sessoes[u]);
		}
	}
	sessoes = nova_sessoes;
	res.send(`Sessão do usuário ${login} finalizada com sucesso!`);
});


/* Recuperar todos os usuários */
router.get('/', function (req, res, next) {
	console.log('Recuperando todos os usuários');
	Usuario.findAndCountAll().then(resultado => {
		console.log(`${resultado.count} registros`);

		res.json(resultado.rows);
	}).catch(erro => {
		console.error(erro);
		res.status(500).send(erro.message);
	});
});

module.exports = router;
