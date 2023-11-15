import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { getApiNoToken, postApi } from '../../Services/RequestHandler';
import { getApi } from '../../Services/RequestHandler';


export default function EstoqueAdiciona({ prodid = null }) {
  let navigate = useNavigate();

  const { id } = useParams();
  if (prodid === undefined || prodid === null) {
    prodid = id;
  }

  const [inputs, setInputs] = useState({});
  const [produto, setProduto] = useState([]);
  const [loja, setLoja] = useState([]);


  useEffect(() => {
    postApi('/produto/byid', { id: prodid })
      .then((data) => {
        console.log(JSON.stringify(data));
        setProduto(data);

      })
      .catch((err) => {
        console.log(err.message);
      });

      getApiNoToken('/loja/get')
      .then((data) => {
        //console.log(JSON.stringify(data) + "LENGHT ->" + data.length);
        setLoja(data);
      })
      .catch((err) => {
        console.log(err.message);
      });

  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }




  const handleSubmit = (event) => {
    event.preventDefault();


    let data = {
      produtoId: prodid,
      lojaId: loja.lojaId != null ? loja.lojaId : 1,
      estoque: inputs.estoque != null ? inputs.estoque : 0,
      quantidadeMinima: inputs.quantidadeMinima != null ? inputs.quantidadeMinima : 0,
    }

    let dataRemove = {
      produtoId: prodid,
      lojaId: loja.lojaId != null ? loja.lojaId : 1
    }

    postApi('/loja/removeproduto', dataRemove);

    postApi('/loja/addproduto', data).then(data => {
      navigate("/Produtos/Estoque");
    });


  }
  return (
    <div>
      <div className="justify-content-center row">
        <div className='col-11 col-md-8'>
          <div className='card mt-1'>
            <div className='card-header text-center'>
              <span className='h4'>Adicionar Estoque</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className='card-body'>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="cpf" className="form-label">Produto:</label>
                    <input type="text" name="cpf" id="cpf" className='form-control shadow-sm' value={produto.nome} onChange={handleChange} disabled />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="estoque" className="form-label">Estoque: </label>
                    <input type="text" className="form-control shadow-sm" id="estoque" name="estoque" value={inputs.estoque || 0} onChange={handleChange} />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="col-5">
                    <label htmlFor="quantidadeMinima" className="form-label">Quantidade Minima: </label>
                    <input type="text" className="form-control shadow-sm" id="quantidadeMinima" name="quantidadeMinima" value={inputs.quantidadeMinima || 0} onChange={handleChange} />
                  </div>
                </div>
                <button type="submit" className='btn btn-success'>
                  <i className="bi bi-plus-circle"></i>
                  <span className='mx-1'>Adicionar Estoque</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
