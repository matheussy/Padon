import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { postApi } from '../../Services/RequestHandler';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';


export default function Venda({ venid = null }) {

  // Info
  const [venda, setVenda] = useState([]);
  const [prodVen, setProdVen] = useState([]);
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

  // ModalEdit
  const [modalEdit, setModalEdit] = useState({ show: false, prodNome: "", prodId: 0 });
  const handleCloseEdit = () => setModalEdit({ show: false, prodNome: "", prodId: 0 });
  const handleShowEdit = (prodNome, prodId) => setModalEdit({ show: true, prodNome: prodNome, prodId: prodId });

  const { id } = useParams();
  if (venid === undefined || venid === null) {
    venid = id;
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
    postApi('/venda/byid', { id: venid })
      .then((data) => {
        console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        //setCategoria(data);

        postApi('/produto/fromvenda', { id: venid })
          .then((data) => {
            console.log("from-> " + JSON.stringify(data) + "LENGHT ->" + data.length);
            setProdVen(data);
          })
          .catch((err) => {
            console.log(err.message);
          });

        postApi('/produto/outvenda', { id: venid })
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


  }, [venid]);

  const AdicionarProd = (venid, prodId) => {
    postApi('/categoria/add', { produtoId: prodId, categoriaId: venid })
      .then((data) => {
        alert("Produto Adicionado a Categoria com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const EditarProd = (venid, prodId) => {
    postApi('/categoria/edit', { produtoId: prodId, categoriaId: venid })
      .then((data) => {
        alert("Produto Adicionado a Categoria com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const RemoverProd = (venid, prodId) => {
    postApi('/categoria/remove', { produtoId: prodId, categoriaId: venid })
      .then((data) => {
        alert("Produto Removido da Categoria com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Venda Numero: {venda.vendaId}</span>
          </div>

          <div className='card-body'>
            {venda.comanda > 0 ?
              <div className="mb-3 h5">
                <span className="">Comanda Número: </span>
                <span>{venda.comanda}</span>
              </div>
              : <div></div>}

            <div className="mb-3 h5">
              <span className="">Valor Total: </span>
              <span>{venda.valorTotal}</span>
            </div>
            <div></div>

            <hr />

            <div className='row'>
              <div className='text-center'>
                <span className='h4'>Produtos na Venda</span>
              </div>
              <div>
                {prodVen.length > 0 ?
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço Individual</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {prodVen.map((p, index) =>
                        <tr key={p.produtoId}>
                          <td>{p.produtoId}</td>
                          <td>{p.nome}</td>
                          <td>{VerificaPreco(p)}</td>
                          <td>{p.quantidade}</td>
                          <td>{p.preco}</td>
                          <td className='text-center'>
                            <button onClick={() => handleShowDel(p.nome, p.produtoId)} className='btn btn-danger'>
                              <i className="bi bi-pencil-square"></i>
                              <span className='mx-1'>Editar</span>
                            </button>
                            <button onClick={() => handleShowDel(p.nome, p.produtoId)} className='btn btn-danger'>
                              <i className="bi bi-trash"></i>
                              <span className='mx-1'>Remover Produto da Venda</span>
                            </button>
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </Table>

                  :

                  <div className='row text-center mt-2'>
                    <span className='h5'>Sem Produtos na Venda</span>
                  </div>
                }
              </div>
            </div>

            <hr />
            <button onClick={() => setOpen(!open)} className='btn btn-success'>
              <i className="bi bi-plus-circle"></i>
              <span className='mx-1'>Adicionar Produto a Venda</span>
            </button>
            <Collapse in={open}>
              <div className='row'>
                <div className='text-center'>
                  <span className='h4'>Adicionar Produtos na Venda</span>
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
                                <span className='mx-1'>Adicionar Produto na Venda</span>
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
            Remoção de Produto na Venda
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja remover o produto {modalDel.prodNome} da venda na comanda {venda.comanda}?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => RemoverProd(venid, modalDel.prodId)} className='btn btn-danger'>
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
          <h4>Você tem certeza que deseja adicionar o produto {modalAdd.prodNome} da categoria { }?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => AdicionarProd(venid, modalAdd.prodId)} className='btn btn-success'>
            <i className="bi bi-plus-circle"></i>
            <span className='mx-1'>Adicionar Produto</span>
          </button>
          <button onClick={handleCloseAdd} className='btn btn-secondary'>
            <i className="bi bi-x-circle"></i>
            <span className='mx-1'>Cancelar</span>
          </button>
        </Modal.Footer>
      </Modal>

      <Modal show={modalAdd.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleCloseAdd} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edição de Produto na Venda
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja adicionar o produto {modalAdd.prodNome} da categoria { }?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => AdicionarProd(venid, modalAdd.prodId)} className='btn btn-success'>
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
  );
}