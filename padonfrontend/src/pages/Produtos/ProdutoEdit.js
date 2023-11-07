import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function ProdutoEdit({ catid = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }

  const [produto, setProduto] = useState([]);
  useEffect(() => {
    postApi('/produto/byid', { id: catid })
      .then((data) => {
        console.log(JSON.stringify(data));
        setProduto(data);

        setInputs({ 
          nome: data.nome,
          codigoDeBarras: data.codigoDeBarras,
          fabricante: data.fabricante,
          precoPorUnidade: data.precoPorUnidade,
          precoPorQuilo: data.precoPorQuilo,
          bloqueado: data.bloqueado,
          porQuilo: data.porQuilo,
          image: ""
         });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [inputs, setInputs] = useState({ 
    nome: produto.nome,
    codigoDeBarras: produto.codigodeBarras,
    fabricante: produto.fabricante,
    precoPorUnidade: produto.precoPorUnidade,
    precoPorQuilo: produto.precoPorQuilo,
    bloqueado: produto.bloqueado === true,
    porQuilo: produto.porQuilo === true,
    image: ""
   });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: catid,
      codigoDeBarras: inputs.codigoDeBarras,
      nome: inputs.nome,
      fabricante: inputs.fabricante,
      precoPorUnidade: inputs.precoPorUnidade,
      precoPorQuilo: inputs.precoPorQuilo,
      bloqueado: inputs.bloqueado === true,
      porQuilo: inputs.porQuilo === true,
      image: ""
    }
    postApi('/produto/save', data).then(data => {
      navigate("/Produtos/");
    });
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
                      <label htmlFor="codigoDeBarras" className="form-label">Código de Barras: </label>
                      <input type="text" className="form-control shadow-sm" id="codigoDeBarras" name="codigoDeBarras" value={inputs.codigoDeBarras || ""} onChange={handleChange} required placeholder="Código de barras do produto..." />
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
                    <input className="form-check-input shadow-sm" type="checkbox" id="bloqueado" name="bloqueado" checked={inputs.bloqueado || false} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="bloqueado">
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
                      <i class="bi bi-floppy-fill"></i>
                      <span className='mx-2'>Salvar</span>
                    </button>
                  </div>
                  <div className='col-md-auto'>
                    <Link to={'/Produtos'}>
                      <button className="btn btn-lg shadow btn-success mb-2">
                        <i class="bi bi-arrow-left"></i>
                        <span className='mx-1'>Voltar</span>
                      </button>
                    </Link>
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