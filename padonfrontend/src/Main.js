import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Pagina from './pages/Pagina';
import { ProdutoIndex, ProdutoCreate, ProdutoDelete } from './pages/Produtos';

/*<Route exact path='/Teste' element={<Teste />}></Route>

<Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>*/

export default function Main() {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Pagina' element={<Pagina />}></Route>

      <Route exact path='/Produtos/' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Index' element={<ProdutoIndex />}></Route>
      <Route exact path='/Produtos/Create' element={<ProdutoCreate />}></Route>
      <Route exact path='/Produtos/Delete' element={<ProdutoDelete />}></Route>
    </Routes>
  );
}