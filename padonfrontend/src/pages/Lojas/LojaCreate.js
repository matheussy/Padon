import React from 'react';
import { postApi } from '../../Services/RequestHandler';
import { useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function LojaCreate({ }) {
  let navigate = useNavigate();


  const [inputs, setInputs] = useState({});
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const handleClosePermissionModal = () => {
    setShowPermissionModal(false);
    navigate("/Lojas/Index");
  };

  useEffect(() => {
    const gerente = sessionStorage.getItem('gerente');
    if (gerente === 'false') {
      setShowPermissionModal(true);
    }
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      endereco: inputs.endereco != null ? inputs.endereco : "",
      nome: inputs.nome != null ? inputs.nome : "",
    }

    postApi('/loja/create', data).then(data => {
      navigate("/Lojas/Index");
      window.location.reload();
    });
  }

  return (
    <div>
      <Modal show={showPermissionModal} onHide={handleClosePermissionModal} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Permissão Negada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você não tem permissão para acessar esta tela.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClosePermissionModal}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="justify-content-center row">
        <div className='col-md-8'>
          <div className='card mt-2'>
            <div className='card-header text-center'>
              <span className='h4'>Adicionar Loja</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container mt-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">Nome da Loja:</label>
                      <input type="text" className="form-control shadow-sm" id="nome" name="nome" value={inputs.nome} onChange={handleChange} required placeholder="Digite o nome da loja..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="endereco" className="form-label">Endereço da Loja:</label>
                      <input type="text" className="form-control shadow-sm" id="endereco" name="endereco" value={inputs.endereco} onChange={handleChange} placeholder="Digite o endereço da loja..." />
                    </div>
                    <div className='row justify-content-md-left'>
                      <div className='col-md-auto'>
                        <button type="submit" className="btn btn-lg shadow btn-success mb-2" onClick={handleSubmit}>
                          <i class="bi bi-plus-circle"></i>
                          <span className='mx-2'>Adicionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}