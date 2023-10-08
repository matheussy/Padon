CREATE DATABASE Padon;
USE Padon;
CREATE TABLE Produto 
( 
 ProdutoId INT PRIMARY KEY,  
 Nome VARCHAR(255) NOT NULL,  
 Fabricante VARCHAR(255),  
 Imagem VARCHAR(255),  
 CodigoDeBarras FLOAT,  
 Bloqueado INT,  
 PrecoPorQuilo FLOAT,  
 PrecoUnidade FLOAT,  
 PorQuilo INT
);

CREATE TABLE Loja 
( 
 LojaId INT PRIMARY KEY,  
 Nome VARCHAR(255),  
 Endereço VARCHAR(255)
);

CREATE TABLE Categoria 
( 
 Nome VARCHAR(255),  
 Descricao VARCHAR(255),  
 CategoriaId INT PRIMARY KEY  
);

CREATE TABLE Fornecedor 
( 
 Endereço VARCHAR(255),  
 FornecedorId INT PRIMARY KEY,  
 Contato VARCHAR(255),  
 Telefone VARCHAR(255),  
 Nome VARCHAR(255)  
); 

CREATE TABLE Venda 
( 
 VendaId INT PRIMARY KEY,  
 Data INT,  
 ValorTotal FLOAT,  
 Status INT,  
 Comanda INT  
);

CREATE TABLE Funcionario 
( 
 FuncionarioId INT PRIMARY KEY,  
 Usuario VARCHAR(255),  
 Nome VARCHAR(255),  
 Senha VARCHAR(255),  
 Email VARCHAR(255),  
 Telefone VARCHAR(255),  
 Gerente INT  
); 