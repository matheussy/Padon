import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { postApi } from '../../Services/RequestHandler';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';

export default function Fornecedor({ fornid = null }) {

  // Info
  const [fornecedor, setFornecedor] = useState([]);
  const [prodForn, setProdForn] = useState([]);
  const [prod, setProd] = useState([]);

  const [preco, setPreco] = useState(0);

  const handleChange = (event) => {
    setPreco(event.target.value)
}

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
  if (fornid === undefined || fornid === null) {
    fornid = id;
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
    postApi('/fornecedor/byid', { id: fornid })
      .then((data) => {
        console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        setFornecedor(data);

        postApi('/produto/fromfornecedor', { id: fornid })
          .then((data) => {
            console.log("from-> " + JSON.stringify(data) + "LENGHT ->" + data.length);
            setProdForn(data);
          })
          .catch((err) => {
            console.log(err.message);
          });

        postApi('/produto/outfornecedor', { id: fornid })
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


  }, [fornid]);

  const AdicionarProd = (fornId, prodId, preco) => {
    postApi('/fornecedor/add', { produtoId: prodId, fornecedorId: fornId, preco:preco})
      .then((data) => {
        alert("Produto Adicionado ao Fornecedor com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const RemoverProd = (fornId, prodId) => {
    postApi('/fornecedor/remove', { produtoId: prodId, fornecedorId: fornId })
      .then((data) => {
        alert("Produto Removido do Fornecedor com Sucesso!");
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
            <span className='h4'>Fornecedor: {fornecedor.nome}</span>
          </div>

          <div className='card-body'>
            <div className="mb-3 h5">
              <span className="">Endereço: </span>
              <span>{fornecedor.endereco}</span>
            </div>

            <div className="mb-3 h5">
              <span className="">Contato: </span>
              <span>{fornecedor.contato}</span>
            </div>
            <div className="mb-3 h5">
              <span className="">Telefone: </span>
              <span>{fornecedor.telefone}</span>
            </div>

            <hr />

            <div className='row'>
              <div className='text-center'>
                <span className='h4'>Produtos Fornecidos</span>
              </div>
              <div>
                {prodForn.length > 0 ?
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço Vendido</th>
                        <th>Preço do Fornecedor</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {prodForn.map((p, index) =>
                        <tr key={p.produtoId}>
                          <td>{p.produtoId}</td>
                          <td>{p.nome}</td>
                          <td>{VerificaPreco(p)}</td>
                          <td>R${p.preco}</td>
                          <td className='text-center'>
                            <button onClick={() => handleShowDel(p.nome, p.produtoId)} className='btn btn-danger'>
                              <i className="bi bi-trash"></i>
                              <span className='mx-1'>Remover Produto do Fornecedor</span>
                            </button>
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </Table>

                  :

                  <div className='row text-center mt-2'>
                    <span className='h5'>Sem Produtos do Fornecedor</span>
                  </div>
                }
              </div>
            </div>

            <hr />
            <button onClick={() => setOpen(!open)} className='btn btn-success'>
              <i className="bi bi-plus-circle"></i>
              <span className='mx-1'>Adicionar Produto para o Fornecedor</span>
            </button>
            <Collapse in={open}>
              <div className='row'>
                <div className='text-center'>
                  <span className='h4'>Adicionar Produtos para o Fornecedor</span>
                </div>
                <div>
                  {prod.length > 0 ?
                    <Table responsive>
                      <thead>
                        <tr>
                          <th>Id</th>
                          <th>Nome</th>
                          <th>Preço Vendido</th>
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
                                <span className='mx-1'>Adicionar Produto para o Fornecedor</span>
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
            Remoção de Produto do Fornecedor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja remover o produto {modalDel.prodNome} do fornecedor {fornecedor.nome}?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => RemoverProd(fornid, modalDel.prodId)} className='btn btn-danger'>
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
            Adição de Produto ao Fornecedor
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja adicionar o produto {modalAdd.prodNome} da fornecedor {fornecedor.nome}?</h4>
          <div className='row'>
            <div>
              <div className="mb-3">
                <label htmlFor="preco" className="form-label">Preço do Fornecedor:</label>
                <input type="text" name="preco" id="preco" className='form-control' value={preco || 0} onChange={handleChange} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => AdicionarProd(fornid, modalAdd.prodId, preco)} className='btn btn-success'>
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