import React from 'react';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { getApi, postApi } from '../../Services/RequestHandler';
import Modal from 'react-bootstrap/Modal';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';

export default function VendaIndex() {
  // Info
  const [vendas, setVendas] = useState([]);

  // ModalDelete
  const [modalDel, setModalDel] = useState({ show: false, venid: 0, venCom: 0, vendata: "", vendTotal: 0 });
  const handleCloseDel = () => setModalDel({ show: false, venid: 0, venCom: 0, vendata: "", vendTotal: 0 });
  const handleShowDel = (id, com, data, total) => setModalDel({ show: true, venid: id, venCom: com, vendata: data, vendTotal: total });

  // ModalEdit
  const [modalEdit, setModalEdit] = useState({ show: false, venid: 0, venCom: 0, vendata: "", vendTotal: 0 });
  const handleCloseEdit = () => setModalEdit({ show: false, venid: 0, venCom: 0, vendata: "", vendTotal: 0 });
  const handleShowEdit = (id, com, data, total) => setModalEdit({ show: true, venid: id, venCom: com, vendata: data, vendTotal: total });


  useEffect(() => {
    getApi('/venda/gettrue')
      .then((data) => {
        console.log(data);
        setVendas(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);



  // Funcionabilidade de Editar
  const EditarVenda = (venid, data, com, total) => {
    let data2 = { id: venid, status: true, valor: total, comanda: com, data: data };
    console.log(data2);
    postApi('/venda/save', data2)
      .then((data) => {
        alert("Produto Editado com Sucesso!");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleChangeEdit = (event) => {
    var com = 1;
    if (event.target.value > 0) {
      com = event.target.value;
    }
    setModalEdit({
      show: modalEdit.show, venid: modalEdit.venid, venCom: com, vendata: modalEdit.vendata, vendTotal: modalEdit.vendTotal
    });
  }


  // Funcionabilidade de Deletar
  const DeletarVenda = (venid) => {
    postApi('/venda/delete', { id: venid })
      .then((data) => {
        alert("Venda Deletada com sucesso!");
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
            <span className='h4'>Vendas em Progresso</span>
          </div>

          <div className='card-body'>

            <div className='row'>
              <div>
                {vendas.length > 0 ?
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>Venda Id</th>
                        <th>Comanda</th>
                        <th>Data</th>
                        <th>Sub Total</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {vendas.map((v, index) =>
                        <tr key={v.vendaId}>
                          <td>{v.vendaId}</td>
                          <td>{v.comanda}</td>
                          <td>{format(parseISO(v.dataVenda), 'dd/MM/yyyy')}</td>
                          <td>R${v.valorTotal}</td>
                          <td className='text-center'>
                            <Link to={'/Vendas/' + v.vendaId}>
                              <button className='btn btn-primary'>
                                <i className="bi bi-bag"></i>
                                <span className='mx-1'>Visualizar Venda</span>
                              </button>
                            </Link>

                            <button onClick={() => handleShowEdit(v.vendaId, v.comanda, format(parseISO(v.dataVenda), 'dd/MM/yyyy'), v.valorTotal)} className='btn btn-info mx-2'>
                              <i className="bi bi-pencil-square"></i>
                              <span className='mx-1'>Editar Venda</span>
                            </button>

                            <button onClick={() => handleShowDel(v.vendaId, v.comanda, format(parseISO(v.dataVenda), 'dd/MM/yyyy'), v.valorTotal)} className='btn btn-danger'>
                              <i className="bi bi-trash"></i>
                              <span className='mx-1'>Deletar Venda</span>
                            </button>
                          </td>
                        </tr>
                      )}

                    </tbody>
                  </Table>

                  :

                  <div className='row text-center mt-2'>
                    <span className='h5'>Sem Vendas em Andamento</span>
                  </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={modalEdit.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleCloseEdit} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edição de Venda
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja editar a venda {modalEdit.venid} na comanda {modalEdit.venCom} de valor R${modalEdit.valorTotal}?</h4>
          <div className='row'>
            <div className='col'>
              <div className="mb-3">
                <label htmlFor="venCom" className="form-label">Comanda da Venda:</label>
                <input type="number" name="venCom" id="venCom" className='form-control' value={modalEdit.venCom || 0} onChange={handleChangeEdit} />
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label htmlFor="subtotal" className="form-label">Valor Total:</label>
                <input type="number" name="subtotal" id="subtotal" className='form-control' value={modalEdit.vendTotal || 0} disabled />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => EditarVenda(modalEdit.venid, modalEdit.vendata, modalEdit.venCom, modalEdit.vendTotal)} className='btn btn-info'>
            <i className="bi bi-check-circle"></i>
            <span className='mx-1'>Editar Produto</span>
          </button>
          <button onClick={handleCloseEdit} className='btn btn-secondary'>
            <i className="bi bi-x-circle"></i>
            <span className='mx-1'>Cancelar</span>
          </button>
        </Modal.Footer>
      </Modal>


      <Modal show={modalDel.show} size="lg" aria-labelledby="contained-modal-title-vcenter" centered onHide={handleCloseDel} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Remoção de Produto na Venda
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Você tem certeza que deseja daletar a venda: {modalDel.venid}, com a comanda {modalDel.venCom}, na data {modalDel.vendata}, com valor total de R${modalDel.vendTotal}?</h4>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => DeletarVenda(modalDel.venid)} className='btn btn-danger'>
            <i className="bi bi-trash"></i>
            <span className='mx-1'>Deletar</span>
          </button>
          <button onClick={handleCloseDel} className='btn btn-secondary'>
            <i className="bi bi-x-circle"></i>
            <span className='mx-1'>Cancelar</span>
          </button>
        </Modal.Footer>
      </Modal>
    </div >
  );
}