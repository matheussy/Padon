import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { postApi } from '../../Services/RequestHandler';
import { Button, Modal } from 'react-bootstrap';
import './Style.css'

export default function FuncionarioDelete({ cpfid = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (cpfid === undefined || cpfid === null) {
    cpfid = id;
  }

  const [funcionario, setFuncionario] = useState([]);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const handleClosePermissionModal = () => {
    setShowPermissionModal(false);
    navigate("/Funcionarios");
  };


  useEffect(() => {
    const gerente = sessionStorage.getItem('gerente');
    if (gerente === 'false') {
      setShowPermissionModal(true);
    } else {
      postApi('/funcionario/byid', { cpf: cpfid })
        .then((data) => {
          console.log(JSON.stringify(data));
          setFuncionario(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDelete = () => {
    postApi('/funcionario/delete', { cpf: cpfid }).then(() => {
      navigate('/Funcionarios');
    });
  };

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
      <div className='justify-content-center row'>
        <div className='col-11 col-md-8'>
          <div className='card mt-1'>
            <div className='card-header text-center'>
              <span className='h4'>Deletar Funcionário: {funcionario.nome}</span>
            </div>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>CPF do Funcionário: </span>{cpfid}
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome do Funcionário: </span>{funcionario.nome}
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                  <Button variant='danger' onClick={handleShowModal}>
                    <i className="bi bi-trash"></i>
                    <span className='mx-1'>Deletar Funcionário</span>
                  </Button>
                </div>
                <div className='col-md-auto'>
                  <Link to={'/Funcionarios'}>
                    <button className="btn shadow btn-success mb-2">
                      <i className="bi bi-arrow-left"></i>
                      <span className='mx-1'>Voltar</span>
                    </button>
                  </Link>
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
            Tem certeza que deseja deletar o funcionário {funcionario.nome}?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Deletar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
