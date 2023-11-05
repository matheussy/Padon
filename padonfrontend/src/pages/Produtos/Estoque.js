import React from 'react';
import './Style.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';


export default function ProdutosEstoque() {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(inputs));
    let data = {
      codigodeBarras: inputs.codigodeBarras,
      nome: inputs.nome,
      fabricante: inputs.fabricante,
      precoPorUnidade: inputs.precoPorUnidade,
      precoPorQuilo: inputs.precoPorQuilo,
      Bloqueado: inputs.Bloqueado,
      porQuilo:inputs.porQuilo,
    }
    
    postApi('/produto/create', data);
    navigate("/Produtos");
  }
  return (
    <div>
      <div className="container Cadastro_Produtos">
        <form onSubmit={handleSubmit}>
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
                  <div className="col-4">
                    <label htmlFor="nome" className="form-label">Nome do Produto:</label>
                    <input type="text" className="form-control shadow-sm" id="nome" name="nome" value={inputs.nome || ""} onChange={handleChange} required placeholder="Digite o nome do produto..." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row align-items-start">
                  <div className="col-6">
                    <label htmlFor="codigodeBarras" className="form-label">Código de Barras: </label>
                    <input type="number" className="form-control shadow-sm" id="codigodeBarras" name="codigodeBarras" value={inputs.codigodeBarras || ""} onChange={handleChange} required placeholder="Código de barras do produto..." />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="fabricante" className="form-label">Fabricante:</label>
                    <input type="text" className="form-control shadow-sm" id="fabricante" name="fabricante" value={inputs.fabricante || ""} onChange={handleChange} required placeholder="Digite a marca do produto..." />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoPorUnidade" className="form-label">Preço por unidade:</label>
                    <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorUnidade" name="precoPorUnidade" value={inputs.precoPorUnidade || ""} onChange={handleChange} required defaultValue="0.00" />
                  </div>
                </div>
                <div className="col-2">
                  <div className="mb-3">
                    <label htmlFor="precoPorQuilo" className="form-label">Preço por quilo:</label>
                    <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorQuilo" name="precoPorQuilo" value={inputs.precoPorQuilo || ""} onChange={handleChange} required defaultValue="0.00" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="Bloqueado" name="Bloqueado" value={inputs.Bloqueado || false} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="Bloqueado">
                    Bloqueado
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="porQuilo" name="porQuilo" value={inputs.porQuilo ||  false} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="porQuilo">
                    Preço por quilo
                  </label>
                </div>
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                  <button type="submit" className="btn btn-lg shadow btn-success">
                    <i className="bi bi-plus-circle"></i>
                    <span className='mx-1'>Adicionar Produto</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="tab-pane" id="estoque" role="tabpanel" aria-labelledby="estoque-tab">
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultEstoque" name="Estoque" value={inputs.Estoque || ""} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefaultEstoque">
                    Estoque
                  </label>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-2">
                    <label htmlFor="QntDisp" className="form-label">Quantidade disponível: </label>
                    <input type="number" className="form-control shadow-sm" id="QntDisp" name="QntDisp" value={inputs.QntDisp || ""} onChange={handleChange} defaultValue="0.00" disabled />
                  </div>
                  <div className="col-2">
                    <label htmlFor="QntMin" className="form-label">Quantidade mínima: </label>
                    <input type="number" className="form-control shadow-sm" id="QntMin" name="QntMin" value={inputs.Qntmin || ""} onChange={handleChange} defaultValue="" />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="row">
                  <div className="col-3">
                    <label htmlFor="QntEntrada" className="form-label">Quantidade de Entrada: </label>
                    <input type="number" className="form-control shadow-sm" id="QntEntrada" name="QntEntrada" value={inputs.QntEntrada || ""} onChange={handleChange} defaultValue="0.00" placeholder='Digite a quantidade que deseja dar entrada no estoque...' />
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <div className="form-check">
                  <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultQntNeg" name="QntNeg" value={inputs.QntNeg || ""} onChange={handleChange} />
                  <label className="form-check-label" htmlFor="flexCheckDefaultQntNeg">
                    Quantidade Negativa
                  </label>
                </div>
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                  <button type="submit" className="btn btn-lg shadow btn-success">
                    <i class="bi bi-floppy-fill"></i>
                    <span className='mx-2'>Salvar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
