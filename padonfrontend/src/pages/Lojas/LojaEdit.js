import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default function LojaEdit({ lojId = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (lojId === undefined || lojId === null) {
    lojId = id;
  }

  const [loja, setLoja] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
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
    else {
      postApi('/loja/byid', { id: lojId })
        .then((data) => {
          console.log(JSON.stringify(data));

          setLoja(data);
          setInputs({
            nome: data.nome,
            endereco: data.endereco,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }

  }, [lojId]);


  const [inputs, setInputs] = useState({
    nome: loja.nome,
    endereco: loja.endereco,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleDelete = (event) => {
    event.preventDefault();

    let data = {
      id: lojId,
      nome: inputs.nome != null ? inputs.nome : "",
      endereco: inputs.endereco != null ? inputs.endereco : "",
    }
    postApi('/loja/save', data).then(data => {
      navigate("/Lojas/Index");
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
              <span className='h4'>Editar Produto</span>
            </div>
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
                      <button type="submit" className="btn btn-lg shadow btn-success mb-2" onClick={handleShowModal}>
                        <i class="bi bi-floppy-fill"></i>
                        <span className='mx-2'>Salvar</span>
                      </button>
                    </div>
                    <div className='col-md-auto'>
                      <Link to={'/Lojas/Index'}>
                        <button className="btn btn-lg shadow btn-success mb-2">
                          <i class="bi bi-arrow-left"></i>
                          <span className='mx-1'>Voltar</span>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tem certeza que deseja salvar a Loja {lojId}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancelar
          </Button>
          <Button variant="success" onClick={handleDelete}>
            Salvar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}