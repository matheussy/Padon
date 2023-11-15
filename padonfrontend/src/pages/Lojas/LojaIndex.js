import React from 'react';
import { getApi } from '../../Services/RequestHandler';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


export default function LojaIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi('/loja/get')
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
            <span className='h4'>Lojas</span>
          </div>
          <div className='card-body'>
            <div className='m-3'>
              <div className='row mb-2'>
                <div className='col'>
                  <div>
                    <Link to="/Lojas/Create">
                      <button className='btn btn-success'>
                        <i className="bi bi-plus-circle"></i>
                        <span className='mx-1'>Adicionar Loja</span>
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
                      <th>Endereço</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((lojid, index) => (
                      <tr key={lojid.lojaId}>
                        <td>{lojid.lojaId}</td>
                        <td>{lojid.nome}</td>
                        <td>{lojid.endereco}</td>
                        <td className='text-center'>
                          <Link to={'/Lojas/Edit/' + lojid.lojaId}>
                            <button className='btn btn-info mx-3'>
                              <i className="bi bi-pencil-square"></i>
                            </button>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                :

                <div className='row text-center'>
                  <span className='h3'>Sem Produtos Cadastrados</span>
                </div>
              }




            </div>

          </div>
        </div>
      </div>
    </div>
  );
}