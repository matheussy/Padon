import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { useNavigate } from "react-router-dom";

export default function FornecedorEdit({ fornid = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (fornid === undefined || fornid === null) {
    fornid = id;
  }

  const [fornecedor, setFornecedor] = useState([]);
  useEffect(() => {
    postApi('/fornecedor/byid', { id: fornid })
      .then((data) => {
        console.log(JSON.stringify(data));
        setFornecedor(data);

        setInputs({ nome: data.nome, contato: data.contato, endereco: data.endereco, telefone: data.telefone });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fornid]);

  const [inputs, setInputs] = useState({ nome: fornecedor.nome, contato: fornecedor.contato, endereco: fornecedor.endereco, telefone: fornecedor.telefone });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      id: fornid,
      nome: inputs.nome,
      contato: inputs.contato, 
      endereco: inputs.endereco, 
      telefone: inputs.telefone,
    }
    postApi('/fornecedor/save', data).then(data => {
      navigate("/fornecedores/" + data.fornecedorId);
    });

  }

  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Editar Fornecedor</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome da Fornecedor:</label>
                <input type="text" name="nome" id="nome" className='form-control' value={inputs.nome || ""} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Contato:</label>
                <input type="text" name="nome" id="nome" className='form-control' value={inputs.contato || ""} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Endereço:</label>
                <input type="text" name="nome" id="nome" className='form-control' value={inputs.endereco || ""} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Telefone:</label>
                <input type="text" name="nome" id="nome" className='form-control' value={inputs.telefone || ""} onChange={handleChange} />
              </div>

              <button type="submit" className='btn btn-success'>
                <i className="bi bi-box-arrow-down"></i>
                <span className='mx-1'>Salvar Alterações</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}