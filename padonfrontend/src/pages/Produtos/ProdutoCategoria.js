import React from 'react';
import './Style.css';



export default function ProdutoCategoria() {
  return (
    <div>
      <div className="container Cadastro_Produtos">
        <form>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="categoria-tab" data-bs-toggle="tab" data-bs-target="#categoria" type="button" role="tab" aria-controls="categoria" aria-selected="true">Categoria</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="categoria" role="tabpanel" aria-labelledby="categoria-tab">
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="IdCategoria" className="form-label">ID da Categoria: </label>
                    <input type="number" className="form-control shadow-sm" id="IdCategoria" name="IdCategoria" required placeholder="ID da categoria...." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeCategoria" className="form-label">Nome da Categoria:</label>
                    <input type="text" className="form-control shadow-sm" id="nomeCategoria" name="nomeCategoria" required placeholder="Digite o nome da categoria..." />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn btn-outline-secondary btn-lg shadow">Salvar</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}