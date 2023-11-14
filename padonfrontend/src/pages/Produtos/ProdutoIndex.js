import React from 'react';
import { getApi } from '../../Services/RequestHandler';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


export default function CategoriaIndex() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi('/produto/get')
      .then((data) => {
        //console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        setData(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  function VerificaPreco(prod) {
    if (prod.precoPorUnidade > 0)
      return "R$" + prod.precoPorUnidade + " un.";
    else
      return "Não definido";
  }

  function VerificaPrecoPorQuilo(prod) {
    if (prod.precoPorQuilo > 0)
      return "R$" + prod.precoPorQuilo + " kg.";
    else
      return "Não definido";
  }



  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-9'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Produtos</span>
          </div>
          <div className='card-body'>
            <div className='m-3'>
              <div className='row mb-2'>
                <div className='col'>
                  <div>
                    <Link to="/Produtos/Create">
                      <button className='btn btn-success'>
                        <i className="bi bi-plus-circle"></i>
                        <span className='mx-1'>Adicionar Produto</span>
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
                      <th>Código de barras</th>
                      <th>Fabricante</th>
                      <th>Preco por unidade</th>
                      <th>Preco por quilo</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((prod, index) => (
                      <tr key={prod.produtoId}>
                        <td>{prod.produtoId}</td>
                        <td>{prod.nome}</td>
                        <td>{prod.codigoDeBarras}</td>
                        <td>{prod.fabricante}</td>
                        <td>{VerificaPreco(prod)}</td>
                        <td>{VerificaPrecoPorQuilo(prod)}</td> {/* Correção aqui */}
                        <td className='text-center'>
                          <Link to={'/Produtos/Edit/' + prod.produtoId}>
                            <button className='btn btn-info mx-3'>
                              <i className="bi bi-pencil-square"></i>
                            </button>
                          </Link>
                          <Link to={'/Produtos/Delete/' + prod.produtoId}>
                            <button className='btn btn-danger'>
                              <i className="bi bi-trash"></i>
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