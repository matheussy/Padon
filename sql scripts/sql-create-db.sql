CREATE DATABASE Padon;
USE Padon;
CREATE TABLE Produto 
( 
 produtoId INT PRIMARY KEY,  
 nome VARCHAR(255) NOT NULL,  
 fabricante VARCHAR(255),  
 imagem VARCHAR(255),  
 codigoDeBarras FLOAT,  
 bloqueado INT,  
 precoPorQuilo FLOAT,  
 precoUnidade FLOAT,  
 porQuilo INT
);

CREATE TABLE Loja
( 
 lojaId INT PRIMARY KEY,  
 nome VARCHAR(255),  
 endereco VARCHAR(255)
);

CREATE TABLE Categoria 
( 
 categoriaId INT PRIMARY KEY,
 nome VARCHAR(255),  
 descricao VARCHAR(255)
);

CREATE TABLE Fornecedor 
( 
 fornecedorId INT PRIMARY KEY,
 endereço VARCHAR(255),  
 contato VARCHAR(255),  
 telefone VARCHAR(255),  
 nome VARCHAR(255)  
); 

CREATE TABLE Venda 
( 
 vendaId INT PRIMARY KEY,  
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