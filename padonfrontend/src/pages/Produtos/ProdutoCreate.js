import React from 'react';
import './Style.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';


export default function ProdutosCreate() {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    
    let data = {
      codigoDeBarras: inputs.codigodeBarras,
      nome: inputs.nome,
      fabricante: inputs.fabricante,
      precoPorUnidade: inputs.precoPorUnidade,
      precoPorQuilo: inputs.precoPorQuilo,
      bloqueado: inputs.Bloqueado,
      porQuilo: inputs.porQuilo,
      image: ""
    }

    alert(JSON.stringify(data));
    postApi('/produto/create', data);
    navigate("/Produtos");
  }
  return (
    <div>
      <div className="justify-content-center row">
        <div className='col-md-8'>
          <div className='card mt-2'>
            <div className='card-header text-center'>
                <span className='h4'>Adicionar Produto</span>
              </div>
              <div className="container mt-2">
              <form onSubmit={handleSubmit}>
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
                  <div className="col-3">
                    <div className="mb-3">
                      <label htmlFor="precoPorUnidade" className="form-label">Preço por unidade:</label>
                      <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorUnidade" name="precoPorUnidade" value={inputs.precoPorUnidade || ""} onChange={handleChange} required defaultValue="0.00" />
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="mb-3">
                      <label htmlFor="precoPorQuilo" className="form-label">Preço por quilo:</label>
                      <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorQuilo" name="precoPorQuilo" value={inputs.precoPorQuilo || ""} onChange={handleChange} required defaultValue="0.00" />
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input shadow-sm" type="checkbox" id="Bloqueado" name="Bloqueado" checked={inputs.Bloqueado || false} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="Bloqueado">
                      Bloqueado
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input shadow-sm" type="checkbox" id="porQuilo" name="porQuilo" checked={inputs.porQuilo || false} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="porQuilo">
                      Preço por quilo
                    </label>
                  </div>
                </div>
                <div className='row justify-content-md-left'>
                  <div className='col-md-auto'>
                    <button type="submit" className="btn btn-lg shadow btn-success mb-2">
                      <i className="bi bi-plus-circle"></i>
                      <span className='mx-1'>Adicionar Produto</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
