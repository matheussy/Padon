import React from 'react';
import './Style.css';
import Search from "./src/search.png";


export default function ProdutosCreate() {
  return (
    <div>
      <div className="container Cadastro_Produtos">
        <form>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="produto-tab" data-bs-toggle="tab" data-bs-target="#produto" type="button" role="tab" aria-controls="produto" aria-selected="true">Produtos</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="estoque-tab" data-bs-toggle="tab" data-bs-target="#estoque" type="button" role="tab" aria-controls="estoque" aria-selected="false">Estoque</button>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="produto" role="tabpanel" aria-labelledby="produto-tab">
              <div className="mb-3">
                <div className="row column1">
                  <div className="col-2">
                    <label htmlFor="IdProduto" className="form-label">ID do Produto: </label>
                    <input type="number" className="form-control shadow-sm" id="IdProduto" name="IdProduto" required placeholder="ID do produto...." />
                  </div>
                  <div className="col-1">
                    <a className='SearchImageHref' href=''><img className='SearchImage' src={Search} alt='Search'/></a>
                  </div>
                  <div className="col-2">
                    <label htmlFor="UnidadeVenda" className="form-label">Unidade de venda: </label>
                    <select defaultValue="" className="form-select shadow-sm" id="UnidadeVenda" name="UnidadeVenda" aria-label=".form-select-sm example">
                      <option value="">Selecione</option>
                      <option value="1">UN</option>
                      <option value="2">KG</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="CodBarra" className="form-label">Código de Barras: </label>
                    <input type="number" className="form-control shadow-sm" id="CodBarra" name="CodBarra" required placeholder="Código de barras do produto..." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeProduto" className="form-label">Nome do Produto:</label>
                    <input type="text" className="form-control shadow-sm" id="nomeProduto" name="nomeProduto" required placeholder="Digite o nome do produto..." />
                  </div>
                  <div className="col-2">
                    <label htmlFor="IdCategoria" className="form-label">Categoria </label>
                    <select defaultValue="" className="form-select shadow-sm" id="IdCategoria" name="IdCategoria" aria-label=".form-select-sm example">
                      <option value="">Selecione</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeFabricante" className="form-label">Fabricante:</label>
                    <input type="text" className="form-control shadow-sm" id="nomeFabricante" name="nomeFabricante" required placeholder="Digite a marca do produto..." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="descricao" className="form-label">Descrição:</label>
                    <textarea className="form-control shadow-sm" id="descricao" name="descricao" rows={3} required placeholder="Descrição do Produto...." defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoUN" className="form-label">Preço por unidade:</label>
                    <input type="number" className="form-control col-sm-6 shadow-sm" id="precoUN" name="precoUN" required defaultValue="0.00" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoKG" className="form-label">Preço por quilo:</label>
                    <input type="number" className="form-control col-sm-6 shadow-sm" id="precoKG" name="precoKG" required defaultValue="0.00" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultEstoqueP" />
                  <label className="form-check-label" htmlFor="flexCheckDefaultEstoqueP">
                    Estoque
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultInativo" />
                  <label className="form-check-label" htmlFor="flexCheckDefaultInativo">
                    Inativo
                  </label>
                </div>
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                    <button type="submit" className="btn btn-outline-secondary btn-lg shadow">Cadastrar Produto</button>
                </div>
                <div className='col-md-auto'>
                    <button type="submit" className="btn btn-outline-secondary btn-lg shadow">Excluir Produto</button>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="estoque" role="tabpanel" aria-labelledby="estoque-tab">
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultEstoque" />
                  <label className="form-check-label" htmlFor="flexCheckDefaultEstoque">
                    Estoque
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="QntDisp" className="form-label">Quantidade disponível: </label>
                    <input type="number" className="form-control shadow-sm" id="QntDisp" name="QntDisp" defaultValue="0.00" disabled />
                  </div>
                  <div className="col-2">
                    <label htmlFor="QntMin" className="form-label">Quantidade mínima: </label>
                    <input type="number" className="form-control shadow-sm" id="QntMin" name="QntMin" defaultValue="" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="QntEntrada" className="form-label">Quantidade de Entrada: </label>
                    <input type="number" className="form-control shadow-sm" id="QntEntrada" name="QntEntrada" defaultValue="0.00" placeholder='Digite a quantidade que deseja dar entrada no estoque...' />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultQntNeg" />
                  <label className="form-check-label" htmlFor="flexCheckDefaultQntNeg">
                    Quantidade Negativa
                  </label>
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
