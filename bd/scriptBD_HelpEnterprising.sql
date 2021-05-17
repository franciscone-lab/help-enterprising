CREATE DATABASE help_enterprising;
USE help_enterprising;

CREATE TABLE login (
idLogin INT PRIMARY KEY AUTO_INCREMENT,
usuarioLogin VARCHAR(20),
senhaLogin VARCHAR(8)
);

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nomeUsuario VARCHAR(45),
cpfUsuario CHAR(11),
emailUsuario VARCHAR(45),
cargoUsuario VARCHAR(45),
sexoUsuario CHAR(1) CHECK (sexoUsuario = 'M' OR sexoUsuario = 'F' OR sexoUsuario = 'N'),
fkLogin INT,
FOREIGN KEY(fkLogin) REFERENCES login(idLogin)
);

CREATE TABLE telefone (
idTelefone INT PRIMARY KEY AUTO_INCREMENT,
dddTelefone VARCHAR(3),
numeroTelefone CHAR(9),
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE faleConosco (
idFaleConosco INT PRIMARY KEY AUTO_INCREMENT,
tituloFaleConosco VARCHAR(45),
duvidaFaleConosco VARCHAR(100),
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE post (
idPost INT PRIMARY KEY AUTO_INCREMENT,
tituloPost VARCHAR(45),
textoPost VARCHAR(200),
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE empresa (
idEmpresa INT PRIMARY KEY AUTO_INCREMENT,
cnpjEmpresa CHAR(15),
nomeFantasiaEmpresa VARCHAR(45),
fkUsuario INT,
FOREIGN KEY(fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
ruaEndereco VARCHAR(45),
numeroEndereco INT,
cepEndereco CHAR(8),
complementoEndereco VARCHAR(45),
fkEmpresa INT,
FOREIGN KEY(fkEmpresa) REFERENCES empresa(idEmpresa)
);