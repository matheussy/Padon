import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Teste from './pages/Teste';
import Pagina from './pages/Pagina';

export default function Main() {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/Teste' element={<Teste />}></Route>
      <Route exact path='/Pagina' element={<Pagina />}></Route>
    </Routes>
  );
}