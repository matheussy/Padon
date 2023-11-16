import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { postApi } from '../../Services/RequestHandler';
import Collapse from 'react-bootstrap/Collapse';
import { Modal, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function Categoria({ catid = null }) {
  let navigate = useNavigate();

  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const handleClosePermissionModal = () => {
    setShowPermissionModal(false);
    navigate("/Categorias");
  };
  // Info
  const [categoria, setCategoria] = useState([]);
  const [prodCat, setProdCat] = useState([]);
  const [prod, setProd] = useState([]);

  // Collapse
  const [open, setOpen] = useState(false);

  // ModalAdicionar
  const [modalAdd, setModalAdd] = useState({ show: false, prodNome: "", prodId: 0 });
  const handleCloseAdd = () => setModalAdd({ show: false, prodNome: "", prodId: 0 });
  const handleShowAdd = (prodNome, prodId) => setModalAdd({ show: true, prodNome: prodNome, prodId: prodId });

  // ModalDelete
  const [modalDel, setModalDel] = useState({ show: false, prodNome: "", prodId: 0 });
  const handleCloseDel = () => setModalDel({ show: false, prodNome: "", prodId: 0 });
  const handleShowDel = (prodNome, prodId) => setModalDel({ show: true, prodNome: prodNome, prodId: prodId });

  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }

  function VerificaPreco(prod) {
    if (prod.precoPorUnidade > 0)
      return "R$" + prod.precoPorUnidade + " un.";
    else if (prod.precoPorQuilo > 0)
      return "R$" + prod.precoPorQuilo + "/kg";
    else
      return "Não definido";
  }


  useEffect(() => {
    const gerente = sessionStorage.getItem('gerente');
    if (gerente === 'false') {
      setShowPermissionModal(true);
    }
    else {
      postApi('/categoria/byid', { id: catid })
        .then((data) => {
          console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
          setCategoria(data);

          postApi('/produto/fromcategoria', { id: catid })
            .then((data) => {
              console.log("from-> " + JSON.stringify(data) + "LENGHT ->" + data.length);
              setProdCat(data);
            })
            .catch((err) => {
              console.log(err.message);
            });

          postApi('/produto/outcategoria', { id: catid })
            .then((data) => {
              console.log("out-> " + JSON.stringify(data) + "LENGHT ->" + data.length);
              setProd(data);
            })
            .catch((err) => {
              console.log(err.message);
            });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }



  }, [catid]);

  const AdicionarProd = (catId, prodId) => {
    postApi('/categoria/add', { produtoId: prodId, categoriaId: catId })
      .then((data) => {
        alert("Produto Adicionado a Categoria com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const RemoverProd = (catId, prodId) => {
    postApi('/categoria/remove', { produtoId: prodId, categoriaId: catId })
      .then((data) => {
        alert("Produto Removido da Categoria com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
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
              <span className='h4'>Categoria: {categoria.nome}</span>
            </div>

            <div className='card-body'>
              <div className="mb-3 h5">
                <span className="">Descrição: </span>
                <span>{categoria.descricao}</span>
              </div>

              <hr />

              <div className='row'>
                <div className='text-center'>
                  <span className='h4'>Produtos na Categoria</span>
                </div>
                <div>
                  {prodCat.length > 0 ?
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Preço</th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {prodCat.map((p, index) =>
                          <tr key={p.produtoId}>
                            <td>{p.produtoId}</td>
                            <td>{p.nome}</td>
                            <td>{VerificaPreco(p)}</td>
                            <td className='text-center'>
                              <button onClick={() => handleShowDel(p.nome, p.produtoId)} className='btn btn-danger'>
                                <i className="bi bi-trash"></i>
                                <span className='mx-1'>Remover Produto da Categoria</span>
                              </button>
                            </td>
                          </tr>
                        )}

                      </tbody>
                    </Table>

                    :

                    <div className='row text-center mt-2'>
                      <span className='h5'>Sem Produtos na Categoria</span>
                    </div>
                  }
                </div>
              </div>

              <hr />
              <button onClick={() => setOpen(!open)} className='btn btn-success'>
                <i className="bi bi-plus-circle"></i>
                <span className='mx-1'>Adicionar Produto a Categoria</span>
              </button>
              <Collapse in={open}>
                <div className='row'>
                  <div className='text-center'>
                    <span className='h4'>Adicionar Produtos na Categoria</span>
                  </div>
                  <div>
                    {prod.length > 0 ?
                      <Table responsive>
                        <thead>
                          <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Preço</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {prod.map((p, index) =>
                            <tr key={p.produtoId}>
                              <td>{p.produtoId}</td>
                              <td>{p.nome}</td>
                              <td>{VerificaPreco(p)}</td>
                              <td className='text-center'>
                                <button onClick={() => handleShowAdd(p.nome, p.produtoId)} className='btn btn-success'>
                                  <i className="bi bi-plus-circle"></i>
                                  <span className='mx-1'>Adicionar Produto na Categoria</span>
                                </button>
                              </td>
                            </tr>
                          )}

                        </tbody>
                      </Table>

                      :

                      <div className='row text-center mt-2'>
                        <span className='h5'>Sem Produtos Restantes</span>
                      </div>
                    }
                  </div>
                </div>
              </Collapse>

            </div>

          </div>
        </div>
        <Modal show={modalDel.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleCloseDel} >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Remoção de Produto de Categoria
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Você tem certeza que deseja remover o produto {modalDel.prodNome} da categoria {categoria.nome}?</h4>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => RemoverProd(catid, modalDel.prodId)} className='btn btn-danger'>
              <i className="bi bi-trash"></i>
              <span className='mx-1'>Remover Produto</span>
            </button>
            <button onClick={handleCloseDel} className='btn btn-secondary'>
              <i className="bi bi-x-circle"></i>
              <span className='mx-1'>Cancelar</span>
            </button>
          </Modal.Footer>
        </Modal>

        <Modal show={modalAdd.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleCloseAdd} >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Adição de Produto de Categoria
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Você tem certeza que deseja adicionar o produto {modalAdd.prodNome} da categoria {categoria.nome}?</h4>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => AdicionarProd(catid, modalAdd.prodId)} className='btn btn-success'>
              <i className="bi bi-plus-circle"></i>
              <span className='mx-1'>Adicionar Produto</span>
            </button>
            <button onClick={handleCloseAdd} className='btn btn-secondary'>
              <i className="bi bi-x-circle"></i>
              <span className='mx-1'>Cancelar</span>
            </button>
          </Modal.Footer>
        </Modal>
      </div >
    </div>
  );
}