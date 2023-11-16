import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pagina from './pages/Pagina';
import Login from './pages/Login';
import { ProdutoIndex, ProdutoCreate, ProdutoEdit, ProdutoDelete, Estoque, EstoqueAdiciona } from './pages/Produtos';
import { Categoria, CategoriaIndex, CategoriaCreate, CategoriaEdit, CategoriaDelete } from './pages/Categorias';
import { Fornecedor, FornecedorCreate, FornecedorIndex, FornecedorEdit, FornecedorDelete } from './pages/Fornecedores';
import { FuncionarioCreate, FuncionarioIndex, FuncionarioEdit, FuncionarioDelete } from './pages/Funcionarios';
import { Venda, VendaIndex, VendaCreate, VendaFinalizar } from './pages/Vendas';
import { LojaCreate, LojaIndex, LojaEdit } from './pages/Lojas';
import { RelatoriosIndex, RelatoriosProdutos } from './pages/Relatorios';

/*<Route exact path='/Teste' element={<Teste />}></Route>

<Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>*/

export default function Main() {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Index' element={<Home />}></Route>
      <Route exact path='/Home' element={<Home />}></Route>
      <Route exact path='/Pagina' element={<Pagina />}></Route>
      <Route exact path='/Login' element={<Login />}></Route>

      <Route exact path='/Produtos/' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Index' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>
      <Route exact path='/Produtos/Edit/:id' element={<ProdutoEdit />}></Route>
      <Route exact path='/Produtos/Delete/:id' element={<ProdutoDelete />}></Route>
      <Route exact path='/Produtos/Estoque' element={<Estoque/>}></Route>
      <Route exact path='/Produtos/Estoque/Adiciona/:id' element={<EstoqueAdiciona/>}></Route>

      <Route exact path='/Categorias/' element={<CategoriaIndex />}></Route>
      <Route exact path='/Categorias/Index' element={<CategoriaIndex />}></Route>
      <Route exact path='/Categorias/:id' element={<Categoria />}></Route>
      <Route exact path='/Categorias/Create' element={<CategoriaCreate />}></Route>
      <Route exact path='/Categorias/Edit/:id' element={<CategoriaEdit />}></Route>
      <Route exact path='/Categorias/Delete/:id' element={<CategoriaDelete />}></Route>

      <Route exact path='/Fornecedores/' element={<FornecedorIndex />}></Route>
      <Route exact path='/Fornecedores/Index' element={<FornecedorIndex />}></Route>
      <Route exact path='/Fornecedores/:id' element={<Fornecedor />}></Route>
      <Route exact path='/Fornecedores/Create' element={<FornecedorCreate />}></Route>
      <Route exact path='/Fornecedores/Edit/:id' element={<FornecedorEdit />}></Route>
      <Route exact path='/Fornecedores/Delete/:id' element={<FornecedorDelete />}></Route>

      <Route exact path='/Funcionarios/' element={<FuncionarioIndex />}></Route>
      <Route exact path='/Funcionarios/Index' element={<FuncionarioIndex />}></Route>
      <Route exact path='/Funcionarios/Create' element={<FuncionarioCreate />}></Route>
      <Route exact path='/Funcionarios/Edit/:id' element={<FuncionarioEdit />}></Route>
      <Route exact path='/Funcionarios/Delete/:id' element={<FuncionarioDelete />}></Route>

      <Route exact path='/Vendas/' element={<VendaIndex />}></Route>
      <Route exact path='/Vendas/Index' element={<VendaIndex />}></Route>
      <Route exact path='/Vendas/:id' element={<Venda />}></Route>
      <Route exact path='/Vendas/Finalizar/:id' element={<VendaFinalizar />}></Route>
      <Route exact path='/Vendas/Create' element={<VendaCreate />}></Route>

      <Route exact path='/Lojas/Index' element={<LojaIndex />}></Route> 
      <Route exact path='/Lojas/Create' element={<LojaCreate />}></Route>
      <Route exact path='/Lojas/Edit/:id' element={<LojaEdit />}></Route>

      <Route exact path='/Relatorios/' element={<RelatoriosIndex />}></Route>
      <Route exact path='/Relatorios/Produtos' element={<RelatoriosProdutos />}></Route>

    </Routes>
  );
}