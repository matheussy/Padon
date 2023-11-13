import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function FornecedorDelete({fornid = null}) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (fornid === undefined ||fornid === null) {
    fornid = id;
  }

  const [fornecedor, setFornecedor] = useState([]);
  useEffect(() => {
    postApi('/fornecedor/byid', { id: fornid })
      .then((data) => {
        console.log(JSON.stringify(data));
        setFornecedor(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [fornid]);


  const handleSubmit = (event) => {
    event.preventDefault();
    postApi('/fornecedor/delete', { id: fornid }).then(data => {
      alert("Fornecedor deletada com Sucesso");
      navigate("/Fornecedores");
    });
    
  }
  return (
    <div className='justify-content-center row' >
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Deletar Fornecedor: { fornecedor.nome }</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>Id do Fornecedor: </span>{ fornecedor.fornecedorId }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome do Fornecedor: </span>{ fornecedor.nome }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Contato: </span>{ fornecedor.contato }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Endereço: </span>{ fornecedor.endereco }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Telefone: </span>{ fornecedor.telefone }
              </div>

              <button type="submit" className='btn btn-danger'>
                <i className="bi bi-trash"></i>
                <span className='mx-1'>Deletar Fornecedor</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}