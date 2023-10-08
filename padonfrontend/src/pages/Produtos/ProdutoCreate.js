import React from 'react';
import './Style.css';

export default function ProdutosCreate() {
  return (
    <div className=''>
      <div className="container Cadastro_Produtos">
        <form>
          <a>asdasdsa</a>
          <ul className="nav nav-tabs" id="myTabs" role="tablist">
            <li className="nav-item">
              <a className="nav-link active" id="tab1-tab" data-toggle="tab" href="#tab1" role="tab" aria-controls="tab1"
                aria-selected="true">Produto</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" id="tab2-tab" data-toggle="tab" href="#tab2" role="tab" aria-controls="tab2"
                aria-selected="false">Estoque</a>
            </li>
          </ul>
          <div className="tab-content" id="myTabsContent">
            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="tab1-tab">
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="IdProduto" className="form-label">ID do Produto: </label>
                    <input type="number" className="form-control" id="IdProduto" name="IdProduto"
                      requiredplaceholder="ID do produto...." />
                  </div>
                  <div className="col-2">
                    <label htmlFor="UnidadeVenda" className="form-label">Unidade de venda: </label>
                    <select className="form-select form-select" aria-label=".form-select-sm example" defaultValue="" id='UnidadeVenda'>
                      <option value=""></option>
                      <option value="1">UN</option>
                      <option value="2">KG</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="IdProduto" className="form-label">Código de Barras: </label>
                    <input type="number" className="form-control" id="IdProduto" name="IdProduto"
                      requiredplaceholder="ID do produto...." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeProduto" className="form-label">Nome do Produto:</label>
                    <input type="text" className="form-control" id="nomeProduto" name="nomeProduto" required
                      placeholder="Digite o nome do produto..." />
                  </div>
                  <div className="col-3">
                    <label htmlFor="nomeProduto" className="form-label">Categoria:</label>
                    <select className="form-select form-select" aria-label=".form-select-sm example" defaultValue="">
                      <option value=""></option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="descricao" className="form-label">Descrição:</label>
                    <textarea className="form-control" id="descricao" name="descricao" rows="3" required
                      placeholder="Descrição do Produto...."></textarea>
                  </div>
                </div>
              </div>
              <div className="row-cols-1">
                <div className="col-1">
                  <div className="mb-3">
                    <label htmlFor="preco" className="form-label">Preço:</label>
                    <input type="text" className="form-control col-sm-6" id="preco" name="preco" required defaultValue="0,00" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Estoque
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </div>
            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="tab2-tab">
              <div className="mb-3">
                <label htmlFor="nomeProduto" className="form-label">Nome do Produto</label>
                <input type="text" className="form-control" id="nomeProduto" name="nomeProduto" required />
              </div>
              <div className="mb-3">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="form-control" id="descricao" name="descricao" rows="3" required></textarea>
              </div>
              <div className="mb-3">
                <label htmlFor="preco" className="form-label">Preço</label>
                <input type="text" className="form-control" id="preco" name="preco" required />
              </div>
              <div className="mb-3">
                <label htmlFor="estoque" className="form-label">Estoque</label>
                <input type="number" className="form-control" id="estoque" name="estoque" required />
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}