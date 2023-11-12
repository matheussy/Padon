import React from 'react';
import { getApi } from '../../Services/RequestHandler';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';

export default function FornecedorIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi('/fornecedor/get')
      .then((data) => {
        //console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-9'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Fornecedores</span>
          </div>
          <div className='card-body'>
            <div className='m-2'>
              <div className='row mb-2'>
                <div className='col'>
                  <div>
                    <Link to="/Fornecedores/Create">
                      <button className='btn btn-success'>
                        <i className="bi bi-plus-circle"></i>
                        <span className='mx-1'>Adicionar Fornecedor</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {data.length > 0 ?
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th>Contato</th>
                      <th>Endereço</th>
                      <th>Telefone</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((forn, index) =>
                      <tr key={forn.fornecedorId}>
                        <td>{forn.fornecedorId}</td>
                        <td>{forn.nome}</td>
                        <td>{forn.contato}</td>
                        <td>{forn.endereco}</td>
                        <td>{forn.telefone}</td>
                        <td className='text-center'>
                          <Link to={'/Fornecedores/'+forn.fornecedorId}>
                            <button className='btn btn-primary'><i className="bi bi-journal-text"></i></button>
                          </Link>
                          <Link to={'/Fornecedores/Edit/'+forn.fornecedorId}>
                            <button className='btn btn-info mx-3'><i className="bi bi-pencil-square"></i></button>
                          </Link>
                          <Link to={'/Fornecedores/Delete/'+forn.fornecedorId}>
                            <button className='btn btn-danger'><i className="bi bi-trash"></i></button>
                          </Link>
                        </td>
                      </tr>
                    )}

                  </tbody>
                </Table>

                :

                <div className='row text-center'>
                  <span className='h3'>Sem Fornecedores Cadastrados</span>
                </div>
              }




            </div>

          </div>
        </div>
      </div>
    </div>
  );
}