import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { Link } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

export default function ProdutoDelete({ catid = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }

  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const handleClosePermissionModal = () => {
    setShowPermissionModal(false);
    navigate("/Produtos");
  };

  useEffect(() => {
    const gerente = sessionStorage.getItem('gerente');
    if (gerente === 'false') {
      setShowPermissionModal(true);
    }
  }, []);

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


  const handleDelete = (event) => {
    event.preventDefault();
    postApi('/produto/delete', { id: catid }).then(data => {
      navigate("/Produtos");
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
      <div className='justify-content-center row' >
        <div className='col-11 col-md-8'>
          <div className='card mt-1'>
            <div className='card-header text-center'>
              <span className='h4'>Deletar Produto: {produto.nome}</span>
            </div>
            <div className='card-body'>
              <div className="mb-3">
                <span className='fw-bold'>Id do produto: </span>{catid}
              </div>
              <div className="mb-3">
                <span className='fw-bold'>Nome do produto: </span>{produto.nome}
              </div>
              <div className='row justify-content-md-left'>
                <div className='col-md-auto'>
                  <button type="submit" className='btn btn-danger' onClick={handleShowModal}>
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
          </div>
        </div>
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Confirmação</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Tem certeza que deseja deletar o produto {catid}?
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