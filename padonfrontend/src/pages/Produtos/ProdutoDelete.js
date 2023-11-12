import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { Link } from 'react-router-dom';

export default function ProdutoDelete({ catid = null }) {
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
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    postApi('/produto/delete', { id: catid }).then(data => {
      navigate("/Produtos");
    });
  }
  return (
    <div className='justify-content-center row' >
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Deletar Produto: {produto.nome}</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>Id do produto: </span>{catid}
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome do produto: </span>{produto.nome}
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                  <button type="submit" className='btn btn-danger'>
                    <i className="bi bi-trash"></i>
                    <span className='mx-1'>Deletar Produto</span>
                  </button>
                </div>
                  <div className='col-md-auto'>
                    <Link to={'/Produtos'}>
                      <button className="btn shadow btn-success mb-2">
                        <i class="bi bi-arrow-left"></i>
                        <span className='mx-1'>Voltar</span>
                      </button>
                    </Link>
                  </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

}