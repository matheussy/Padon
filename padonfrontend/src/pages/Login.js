import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postApiNoToken } from '../Services/RequestHandler';
import { useState } from 'react';

export default function Login() {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      usuario: inputs.usuario,
      senha: inputs.senha
    }

    postApiNoToken('/login', data).then(data => {
      sessionStorage.setItem("token", data.token);
      navigate('/home');
    });

  }
  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Logar no Sistema</span>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='card-body'>
              <div className="mb-3">
                <label htmlFor="usuario" className="form-label">Usuario:</label>
                <input type="text" name="usuario" id="usuario" className='form-control' value={inputs.usuario || ""} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="senha" className="form-label">Senha:</label>
                <input type="password" name="senha" id="senha" className='form-control' value={inputs.senha || ""} onChange={handleChange} />
              </div>

              <button type="submit" className='btn btn-success'>
                <i className="bi bi-box-arrow-in-right"></i>
                <span className='mx-1'>Logar</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}