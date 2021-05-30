var express = require('express');
var router = express.Router();
var sequelize = require('../models').sequelize;
var Usuario = require('../models').Usuario;
var faleConosco = require('../models').faleConosco;
var Telefone = require('../models').Telefone;

let sessoes = [];

/* ROTA PARA RECUPERAR DADOS DE LOGIN E SENHA (CRIA SESSÃO) */
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
			sessoes.push(resultado[0].dataValues.loginUsuario);
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

/* ROTA PARA CADASTRO DE USUÁRIO */
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

/* ROTA PARA CADASTRO DE TELEFONE */
router.post('/telefone/:idUsuario', function (req, res, next) {
	console.log('iniciou o cadastro do telefone');

	let idUsuario = req.params.idUsuario;

	Telefone.create({
		dddTelefone: req.body.dddTelefone,
		numeroTelefone: req.body.numeroTelefone,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log("TELEFONE cadastrado com sucesso!");
		res.send(resultado);
	}).catch(erro => {
		console.log('DEU UM ERRINHO')
		console.error(erro);
		res.status(500).send(erro.message);
	})
})

/* ROTA CADASTRO DE HELP DESK */
router.post('/ajuda/:idUsuario', function (req, res, next) {
	console.log('iniciou o cadastro do ajuda!');

	let idUsuario = req.params.idUsuario;

	faleConosco.create({
		tituloFaleConosco: req.body.tituloFaleConosco,
		duvidaFaleConosco: req.body.duvidaFaleConosco,
		fkUsuario: idUsuario
	}).then(resultado => {
		console.log("Dúvida cadastrada com sucesso!");
		res.send(resultado);
	}).catch(erro => {
		console.log('DEU UM ERRINHO')
		console.error(erro);
		res.status(500).send(erro.message);
	})
})

/* ROTA QUE VERIFICAÇÃO DE USUÁRIO (CRIAR SESSÃO) */
router.get('/sessao/:loginUsuario', function (req, res, next) {
	let login = req.params.loginUsuario;
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

/* ROTA DE LOGOFF DE USUÁRIO */
router.get('/sair/:loginUsuario', function (req, res, next) {
	let login = req.params.loginUsuario;
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

/* ROTA QUE RECUPERAR TODOS OS USUÁRIOS */
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
