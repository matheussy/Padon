import React from 'react';
import './Style.css';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function ProdutoEdit({ catid = null }) {
  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }
  let data = {
    id: catid
  }
  console.log(JSON.stringify(data));
  //var response = postApi('/categoria/byid', data);
  let response = {
    nome: "teste" + catid,
    codigodeBarras: "1111111111",
    fabricante: "Tua mãe",
    precoPorUnidade: "1",
    precoPorQuilo: "2",
    Bloqueado: true,
    porQuilo: false,
  };

  const [inputs, setInputs] = useState({
    nome: response.nome,
    codigodeBarras: response.codigodeBarras,
    fabricante: response.fabricante,
    precoPorUnidade: response.precoPorUnidade,
    precoPorQuilo: response.precoPorQuilo,
    Bloqueado: response.Bloqueado,
    porQuilo: response.porQuilo,
    });

  
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(JSON.stringify(inputs));
    let data = {
      nome: inputs.nome,
      codigodeBarras: inputs.codigodeBarras,
      fabricante: inputs.fabricante,
      precoPorUnidade: inputs.precoPorUnidade,
      precoPorQuilo: inputs.precoPorQuilo,
      Bloqueado: inputs.Bloqueado,
      porQuilo: inputs.porQuilo,
    }
    postApi('/Produtos/save', data);
  }
  return (
    <div>
      <div className="justify-content-center row">
        <div className='col-md-8'>
          <div className='card mt-2'>
            <div className='card-header text-center'>
                <span className='h4'>Editar Produto</span>
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
                    <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="Bloqueado" name="Bloqueado" checked={inputs.Bloqueado} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="Bloqueado">
                      Bloqueado
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="porQuilo" name="porQuilo" checked={inputs.porQuilo} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="porQuilo">
                      Preço por quilo
                    </label>
                  </div>
                </div>
                <div className='row justify-content-md-left'>
                  <div className='col-md-auto'>
                    <button type="submit" className="btn btn-lg shadow btn-success mb-2">
                      <i class="bi bi-floppy-fill"></i>
                      <span className='mx-2'>Salvar</span>
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