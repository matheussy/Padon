import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { postApi } from '../../Services/RequestHandler';

export default function Categoria({ catid = null }) {
  const [categoria, setCategoria] = useState([]);
  const [prodCat, setProdCat] = useState([]);
  const [prod, setProd] = useState([]);

  const { id } = useParams();
  if (catid === undefined || catid === null) {
    catid = id;
  }


  useEffect(() => {
    postApi('/categoria/byid', { id: catid })
      .then((data) => {
        console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        setCategoria(data);
      })
      .catch((err) => {
        console.log(err.message);
      });


  }, []);

  /*let categoria = {
    categoriaId: catid,
    nome: "Teste",
    descricao: "Testando esse teste"
  }*/

  return (
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
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>


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

            <div className='row'>
              <div></div>
              <div></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

/*{prodCat.map((pc, index) =>
                      <tr key={pc}>
                        <td>{cat.categoriaId}</td>
                        <td>{cat.nome}</td>
                        <td className='text-center'>
                          <Link to={'/Categorias/'+cat.categoriaId}>
                            <button className='btn btn-primary'><i className="bi bi-journal-text"></i></button>
                          </Link>
                          <Link to={'/Categorias/Edit/'+cat.categoriaId}>
                            <button className='btn btn-info mx-3'><i className="bi bi-pencil-square"></i></button>
                          </Link>
                          <Link to={'/Categorias/Delete/'+cat.categoriaId}>
                            <button className='btn btn-danger'><i className="bi bi-trash"></i></button>
                          </Link>
                        </td>
                      </tr>
                    )}*/