import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { postApi } from '../../Services/RequestHandler';
import { Link } from 'react-router-dom';

export default function Estoque() {

  const [data, setData] = useState([]);
  const [lojaId, setLojaId] = useState(sessionStorage.getItem("lojaId"));
  

  useEffect(() => {
    // Só faz a requisição se lojaId estiver definido
    if (lojaId !== undefined) {
      const request = { id: parseInt(lojaId) };

      postApi('/produto/fromloja', request)
        .then((data) => {
          setData(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, [lojaId]);

  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-9'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Produtos</span>
          </div>
          <div className='card-body'>
            <div className='m-3'>
              {data.length > 0 ?
                <Table responsive>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Nome</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((prod, index) => (
                      <tr key={prod.produtoId}>
                        <td>{prod.produtoId}</td>
                        <td>{prod.nome}</td>
                        <td className='text-center'>
                          <Link to={'/Produtos/Estoque/Adiciona/' + prod.produtoId}>
                            <button className='btn btn-dark mx-3'>
                              <i class="bi bi-plus-circle"></i>
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
