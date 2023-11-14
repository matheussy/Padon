import React from 'react';
import { useState } from 'react';
import './Style.css';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function Estoque() {
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
      cpf: inputs.cpf != null ? inputs.cpf : "",
      usuario: inputs.usuario != null ? inputs.usuario : "",
      nome: inputs.nome != null ? inputs.nome : "",
      senha: inputs.senha != null ? inputs.senha : "",
      email: inputs.email != null ? inputs.email : "",
      telefone: inputs.telefone != null ? inputs.telefone : "",
      gerente: inputs.gerente === true,
    }

    postApi('/funcionario/create', data).then(data => {
      navigate("/Funcionarios/");
    });


  }
  return (
    <div>
      <div className="justify-content-center row">
        <div className='col-11 col-md-8'>
          <div className='card mt-1'>
            <div className='card-header text-center'>
              <span className='h4'>Adicionar Funcionários</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='card-body'>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="cpf" className="form-label">CPF:</label>
                    <input type="text" name="cpf" id="cpf" className='form-control shadow-sm' value={inputs.cpf} onChange={handleChange} required placeholder='CPF...' />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="usuario" className="form-label">Usuário de LOGIN: </label>
                    <input type="text" className="form-control shadow-sm" id="usuario" name="usuario" value={inputs.usuario} onChange={handleChange} required placeholder="Usuário de login..." />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="nome" className="form-label">Nome do Funcionário: </label>
                    <input type="text" className="form-control shadow-sm" id="nome" name="nome" value={inputs.nome} onChange={handleChange} required placeholder="Nome do funcionário..." />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="senha" className="form-label">Senha: </label>
                    <input type="text" className="form-control shadow-sm" id="senha" name="senha" value={inputs.senha} onChange={handleChange} required placeholder="Senha..." />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="email" className="form-label">E-mail: </label>
                    <input type="text" className="form-control shadow-sm" id="email" name="email" value={inputs.email} onChange={handleChange}  placeholder="E-mail..." />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="telefone" className="form-label">Telefone: </label>
                    <input type="text" className="form-control shadow-sm" id="telefone" name="telefone" value={inputs.telefone} onChange={handleChange} placeholder="(11) 99999-9999..." />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultgerente" name="gerente" checked={inputs.gerente} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="flexCheckDefaultgerente">
                      Gerente
                    </label>
                  </div>
                </div>
                <button type="submit" className='btn btn-success'>
                  <i className="bi bi-plus-circle"></i>
                  <span className='mx-1'>Adicionar Funcionário</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
