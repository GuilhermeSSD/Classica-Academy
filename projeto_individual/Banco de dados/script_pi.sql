CREATE DATABASE classica_academy;
USE classica_academy;

CREATE TABLE usuario(
    idusuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(50) UNIQUE,
    senha VARCHAR(50) 
);

CREATE TABLE instrumento(
    idinstrumento INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50)
);


CREATE TABLE usuario_instrumento(
    fk_idusuario INT,
    fk_instrumento INT,
    data_inicio DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY(fk_idusuario,fk_instrumento),
    FOREIGN KEY(fk_idusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY(fk_instrumento) REFERENCES instrumento(idinstrumento)
);


CREATE TABLE quiz (
    idquiz INT PRIMARY KEY AUTO_INCREMENT,
    fk_instrumento INT,
    tipoCurso VARCHAR(45), 
    FOREIGN KEY (fk_instrumento) REFERENCES instrumento(idinstrumento)
);

CREATE TABLE respostas (
    idResposta INT PRIMARY KEY AUTO_INCREMENT,
    fk_idusuario INT,
    fk_idquiz INT,
    acertos INT,
    percentual DECIMAL(5,2),
    dataResposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_idusuario) REFERENCES usuario(idusuario),
    FOREIGN KEY (fk_idquiz) REFERENCES quiz(idquiz)
);


INSERT INTO instrumento (nome) VALUES
("violino"),
("viola"),
("violoncelo");

INSERT INTO quiz (fk_instrumento, tipoCurso) VALUES
(1, 'Teoria'),
(2, 'Teoria'),
(3, 'Teoria'),
(1,'pratica'),
(2,'pratica'),
(3,'pratica');


