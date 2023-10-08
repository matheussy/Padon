import React from 'react';
import './style.css';



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
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="IdProduto" className="form-label">ID do Produto: </label>
                    <input type="number" className="form-control" id="IdProduto" name="IdProduto" requiredplaceholder="ID do produto...." />
                  </div>
                  <div className="col-2">
                    <label htmlFor="UnidadeVenda" className="form-label">Unidade de venda: </label>
                    <select defaultValue="" className="form-select form-select" aria-label=".form-select-sm example">
                      <option value="" />
                      <option value={1}>UN</option>
                      <option value={2}>KG</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="CodBarra" className="form-label">Código de Barras: </label>
                    <input type="number" className="form-control" id="CodBarra" name="IdProduto" requiredplaceholder="ID do produto...." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeProduto" className="form-label">Nome do Produto:</label>
                    <input type="text" className="form-control" id="nomeProduto" name="nomeProduto" required placeholder="Digite o nome do produto..." />
                  </div>
                  <div className="col-3">
                    <label htmlFor="Categoria" className="form-label">Categoria:</label>
                    <select defaultValue="" className="form-select form-select" aria-label=".form-select-sm example">
                      <option value="" />
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="nomeFabricante" className="form-label">Fabricante:</label>
                    <input type="text" className="form-control" id="nomeFabricante" name="nomeProduto" required placeholder="Digite a marca do produto..." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="descricao" className="form-label">Descrição:</label>
                    <textarea className="form-control" id="descricao" name="descricao" rows={3} required placeholder="Descrição do Produto...." defaultValue={""} />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoUN" className="form-label">Preço por unidade:</label>
                    <input type="text" className="form-control col-sm-6" id="precoUN" name="precoUN" required defaultValue="0,00" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoKG" className="form-label">Preço por quilo:</label>
                    <input type="text" className="form-control col-sm-6" id="precoKG" name="precoKG" required defaultValue="0,00" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefaultEstoque" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Estoque
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" defaultValue id="flexCheckDefaultInativo" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    Inativo
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary">Cadastrar Produto</button>
            </div>
            <div className="tab-pane" id="estoque" role="tabpanel" aria-labelledby="estoque-tab">
              <div className="mb-3">
                <p />
                <label htmlFor="nomeProduto" className="form-label">Nome do Produto</label>
                <input type="text" className="form-control" id="nomeProduto" name="nomeProduto" required />
              </div>
              <div className="mb-3">
                <label htmlFor="descricao" className="form-label">Descrição</label>
                <textarea className="form-control" id="descricao" name="descricao" rows={3} required defaultValue={""} />
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