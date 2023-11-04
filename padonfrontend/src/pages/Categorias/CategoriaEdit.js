import React from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function CategoriaEdit({ catid = null }) {
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
    nome: "Teste2" + catid,
    descricao: "TEste de descriçao2"
  }

  const [inputs, setInputs] = useState({ nome: response.nome });
  const [textarea, setTextarea] = useState(response.descricao);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleChangeTextArea = (event) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(JSON.stringify(inputs) + " -> " + textarea);
    let data = {
      id: catid,
      nome: inputs.nome,
      descricao: textarea
    }
    postApi('/categoria/save', data);
  }

  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Editar Categoria</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome da Categoria:</label>
                <input type="text" name="nome" id="nome" className='form-control' value={inputs.nome || ""} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="desc" className="form-label">Descrição da Categoria</label>
                <textarea className="form-control" id="desc" rows="3" value={textarea} onChange={handleChangeTextArea}></textarea>
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