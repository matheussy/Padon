import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function CategoriaDelete({catid = null}) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }

  const [categoria, setCategoria] = useState([]);
  useEffect(() => {
    postApi('/categoria/byid', { id: catid })
      .then((data) => {
        console.log(JSON.stringify(data));
        setCategoria(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [catid]);


  const handleSubmit = (event) => {
    event.preventDefault();
    postApi('/categoria/delete', { id: catid }).then(data => {
      alert("Categoria deletada com Sucesso");
      navigate("/Categorias");
    });
    
  }
  return (
    <div className='justify-content-center row' >
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Deletar Categoria: { categoria.nome }</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>Id da Categoria: </span>{ categoria.categoriaId }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome da Categoria: </span>{ categoria.nome }
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Descrição: </span>{ categoria.descricao }
              </div>

              <button type="submit" className='btn btn-danger'>
                <i className="bi bi-trash"></i>
                <span className='mx-1'>Deletar Categoria</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}