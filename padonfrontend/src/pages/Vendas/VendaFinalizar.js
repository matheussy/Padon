import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { postApi } from '../../Services/RequestHandler';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export default function VendaFinalizar({ venid = null }) {
  let navigate = useNavigate()

  // Info
  const [venda, setVenda] = useState([]);
  const [prodVen, setProdVen] = useState([]);
  const [total, setTotal] = useState(0);

  // Modal 
  const [modal, setModal] = useState(false);
  const handleClose = () => setModal(false);
  const handleShow = () => setModal(true);

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

  function VerificaPrecoNum(prod) {
    if (prod.precoPorUnidade > 0)
      return prod.precoPorUnidade
    else if (prod.precoPorQuilo > 0)
      return prod.precoPorQuilo
    else
      return 0;
  }


  const FinalizarCompra = () => {
    postApi('/venda/remove', {})
      .then((data) => {
        alert("Produto Removido da Venda com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  useEffect(() => {
    postApi('/venda/byid', { id: venid })
      .then((data) => {
        setVenda(data);

        postApi('/produto/fromvenda', { id: venid })
          .then((data) => {
            if(data.length<1){
              navigate('/Vendas/'+venid);
            }
            setProdVen(data);
            var sub = 0;
            data.forEach(p => {
              var n = p.precoTotal;

              if (!isNaN(n)) {
                sub += n;
              }
            })
            setTotal(sub);
          })
          .catch((err) => {
            console.log(err.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [venid]);




  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-8'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Finalizar Venda Numero: {venda.vendaId}</span>
          </div>

          <div className='card-body'>
            <div className='row'>
              <div className='col'>
                {venda.comanda > 0 ?
                  <div className="mb-3 h5">
                    <span className="">Comanda Número: </span>
                    <span>{venda.comanda}</span>
                  </div>
                  : <div className='col'></div>}
              </div>

              <div className='col'>
                <div className="mb-3 h4 text-end">
                  <span className="">Valor Total: </span>
                  <span>R${total}</span>
                </div>
              </div>
            </div>

            <hr />

            <div className='row'>
              <div className='text-center'>
                <span className='h4'>Revisão de Produtos Venda</span>
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
                      </tr>
                    </thead>
                    <tbody>
                      {prodVen.map((p, index) =>
                        <tr key={p.produtoId}>
                          <td>{p.produtoId}</td>
                          <td>{p.nome}</td>
                          <td>{VerificaPreco(p)}</td>
                          <td>{p.quantidade}</td>
                          <td>R${p.precoTotal}</td>
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

          </div>

          <div className='card-footer'>
            <div className='row'>
              <div className='col'>
                <Link to={'/Vendas/'+venda.vendaId}>
                  <button className='btn btn-secondary'>
                    <i className="bi bi-arrow-return-left"></i>
                    <span className='mx-1'>Voltar</span>
                  </button>
                </Link>
              </div>
              
              <div className='col text-end'>
                <button onClick={handleShow} className='btn btn-success'>
                  <i className="bi bi-check-circle"></i>
                  <span className='mx-1'>Finalizar Venda</span>
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
      <Modal show={modal} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Finalizar Venda
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja finalizar a Venda?</h4>
          <div className='row text-end h3'>
            Total da Compra: R$00
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={FinalizarCompra} className='btn btn-success'>
            <i className="bi bi-trash"></i>
            <span className='mx-1'>Finalizar Venda</span>
          </button>
          <button onClick={handleClose} className='btn btn-secondary'>
            <i className="bi bi-x-circle"></i>
            <span className='mx-1'>Cancelar</span>
          </button>
        </Modal.Footer>
      </Modal>
    </div >
  );
}