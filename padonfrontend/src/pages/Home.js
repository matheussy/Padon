import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className='justify-content-center row'>
      <div className='col-11 col-md-9'>
        <div className='card mt-1'>
          <div className='card-header text-center'>
            <span className='h4'>Padon</span>
          </div>
          <div className='card-body'>
            <div className='row row-cols-2'>
              <div className='col mt-2 text-center'>
                <span className='h5'>Produtos</span><br />
                <span>Visualize todos os produtos aqui:</span><br />
                <Link to={'/Produtos/'}>
                  <button className='btn btn-primary'>
                    <i className="bi bi-bag"></i>
                    <span className='mx-1'>Produtos</span>
                  </button>
                </Link>
              </div>

              <div className='col mt-2 text-center'>
                <span className='h5'>Vendas</span><br />
                <span>Visualize as vendas em adamento ou adicione novas aqui:</span><br />
                <Link to={'/Vendas/'}>
                  <button className='btn btn-success'>
                    <i className="bi bi-bag-plus"></i>
                    <span className='mx-1'>Vendas</span>
                  </button>
                </Link>
              </div>

              <div className='col mt-5 text-center'>
                <span className='h5'>Estoque</span><br />
                <span>Visualize e gerencie seu estque por aqui:</span><br />
                <Link to={'/Produtos/Estoque'}>
                  <button className='btn btn-warning'>
                    <i className="bi bi-box2"></i>
                    <span className='mx-1'>Estoque</span>
                  </button>
                </Link>
              </div>

              <div className='col mt-5 text-center'>
                <span className='h5'>Relatórios</span><br />
                <span>Gere relatórios das ultimas vendas realizadas:</span><br />
                <Link to={'/Vendas/'}>
                  <button className='btn btn-light'>
                    <i className="bi bi-file-spreadsheet"></i>
                    <span className='mx-1'>Relatórios</span>
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}