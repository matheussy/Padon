CREATE DATABASE Padon;
USE Padon;
CREATE TABLE Produto 
( 
 produtoId INT PRIMARY KEY auto_increment,
 nome VARCHAR(255) NOT NULL,  
 fabricante VARCHAR(255),  
 image LONGTEXT,  
 codigoDeBarras FLOAT,  
 bloqueado INT,  
 precoPorQuilo FLOAT,  
 precoUnidade FLOAT,  
 porQuilo INT
);

CREATE TABLE Loja
( 
 lojaId INT PRIMARY KEY auto_increment,  
 nome VARCHAR(255),  
 endereco VARCHAR(255)
);

CREATE TABLE Categoria 
( 
 categoriaId INT PRIMARY KEY auto_increment,
 nome VARCHAR(255),  
 descricao VARCHAR(255)
);

CREATE TABLE Fornecedor 
( 
 fornecedorId INT PRIMARY KEY auto_increment,
 endereco VARCHAR(255),  
 contato VARCHAR(255),  
 telefone VARCHAR(255),  
 nome VARCHAR(255)  
); 

CREATE TABLE Venda 
( 
 vendaId INT PRIMARY KEY auto_increment,
 dataVenda DATETIME,  
 valorTotal FLOAT,  
 statusVenda INT,  
 comanda INT  
);

CREATE TABLE Funcionario 
( 
 cpf VARCHAR(255) PRIMARY KEY,
 usuario VARCHAR(255),  
 nome VARCHAR(255),  
 senha VARCHAR(255),  
 email VARCHAR(255),  
 telefone VARCHAR(255),  
 gerente INT  
);

CREATE TABLE Conter 
(
 conterId INT PRIMARY KEY auto_increment,
 produtoId INT,  
 lojaId INT,  
 estoque INT,  
 quantidadeMinima INT  
);

 CREATE TABLE Participa 
(
 participaId INT PRIMARY KEY auto_increment,
 categoriaId INT,  
 produtoId INT  
);

CREATE TABLE Fornece 
(
 forneceId INT PRIMARY KEY auto_increment, 
 preco FLOAT,  
 fornecedorId INT,  
 produtoId INT  
);

CREATE TABLE Pertence 
( 
 pertenceId INT PRIMARY KEY auto_increment,
 precoTotal FLOAT,  
 quantidade INT,  
 precoAtual FLOAT,  
 produtoId INT,  
 vendaId INT  
);

CREATE TABLE Trabalha 
(
 trabalhaId INT PRIMARY KEY auto_increment, 
 lojaId INT,  
 cpf VARCHAR(255)  
); 

ALTER TABLE Conter ADD FOREIGN KEY(produtoId) REFERENCES Produto (produtoId);
ALTER TABLE Conter ADD FOREIGN KEY (lojaId) REFERENCES Loja (lojaId);
ALTER TABLE Participa ADD FOREIGN KEY(categoriaId) REFERENCES Categoria (categoriaId);
ALTER TABLE Participa ADD FOREIGN KEY(produtoId) REFERENCES Produto (produtoId);
ALTER TABLE Fornece ADD FOREIGN KEY(fornecedorId) REFERENCES Fornecedor (fornecedorId);
ALTER TABLE Fornece ADD FOREIGN KEY(produtoId) REFERENCES Produto (produtoId);
ALTER TABLE Pertence ADD FOREIGN KEY(produtoId) REFERENCES Produto (produtoId);
ALTER TABLE Pertence ADD FOREIGN KEY(vendaId) REFERENCES Venda (vendaId);
ALTER TABLE Trabalha ADD FOREIGN KEY(lojaId) REFERENCES Loja (lojaId);
ALTER TABLE Trabalha ADD FOREIGN KEY(cpf) REFERENCES Funcionario (cpf);