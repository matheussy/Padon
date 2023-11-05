import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function ProdutoDelete({catid = null}) {
  let navigate = useNavigate();
  const { id } = useParams();

  if (catid === undefined || catid === null) {
    catid = id;
  }

  let data = {
    id: catid
  }
  console.log(JSON.stringify(data));
  //var produto = postApi('/produto/byid', data);
  const produto = {
    id: catid,
    nome: "Carne",
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    /*let data = {
      nome: inputs.nome,
      descricao: textarea
    }*/
    //postApi('/produto/create', data);
    navigate("/Produtos");
  }
  return (
    <div className='justify-content-center row' >
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Deletar Produto: { produto.nome }</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>Id do produto: </span>{ produto.id }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome do produto: </span>{ produto.nome }
              </div>
              <button type="submit" className='btn btn-danger'>
                <i className="bi bi-trash"></i>
                <span className='mx-1'>Deletar Produto</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}