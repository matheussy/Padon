import React from 'react';
import { useState, useEffect } from 'react';
import { postApi } from '../../Services/RequestHandler';
import { generatePath, useNavigate } from "react-router-dom";
import { Modal, Button } from 'react-bootstrap';

export default function ProdutoCreate({ }) {
  let navigate = useNavigate();

  const [inputs, setInputs] = useState({});
  const [image, setImage] = useState(null);
  const [imageBase64, setImageBase64] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const gerente = sessionStorage.getItem('gerente');
    if (gerente === 'false') {
      setShowModal(true);
    }
  }, []);

  const handleClose = () => {
    setShowModal(false);
    navigate(-1); // Volta para a página anterior
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Data = e.target.result.split(',')[1]; // Obtém somente os dados em base64, excluindo o prefixo "data:image/jpeg;base64,"
        setImage(file);
        setImageBase64(base64Data); // Armazena somente os dados em base64
      };
      reader.readAsDataURL(file);
    };
  };

  const handleRemoveImage = () => {
    setImage(null);
    setImageBase64("");
    document.getElementById("image").value = ""; // Isso limpa o valor do campo de arquivo para que o usuário possa selecionar uma nova imagem posteriormente
  };



  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }


  const handleSubmit = (event) => {
    event.preventDefault();

    let data = {
      codigoDeBarras: inputs.codigoDeBarras != null ? inputs.codigoDeBarras : "",
      nome: inputs.nome != null ? inputs.nome : "",
      fabricante: inputs.fabricante != null ? inputs.fabricante : "",
      precoPorUnidade: inputs.precoPorUnidade != null ? inputs.precoPorUnidade : 0,
      precoPorQuilo: inputs.precoPorQuilo != null ? inputs.precoPorQuilo : 0,
      bloqueado: inputs.bloqueado === true,
      porQuilo: inputs.porQuilo === true,
      image: imageBase64
    }

    postApi('/produto/create', data).then(dataProd => {

      console.log(dataProd);

      var loja = sessionStorage.getItem("lojaId");

      let dataCriar = {
        lojaId: loja,
        produtoId: dataProd.produtoId,
        estoque: 0,
        quantidadeMinima: 0
      }

      postApi('/loja/addproduto', dataCriar);
      navigate("/Produtos/");
      window.location.reload();
    });
  }

  return (
    <div>
      <Modal show={showModal} onHide={handleClose} backdrop="static" centered>
        <Modal.Header closeButton>
          <Modal.Title>Permissão Negada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Você não tem permissão para acessar esta tela.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="justify-content-center row">
        <div className='col-md-8'>
          <div className='card mt-2'>
            <div className='card-header text-center'>
              <span className='h4'>Adicionar Produto</span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="container mt-2">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label htmlFor="nome" className="form-label">Nome do Produto:</label>
                      <input type="text" className="form-control shadow-sm" id="nome" name="nome" value={inputs.nome} onChange={handleChange} required placeholder="Digite o nome do produto..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="codigoDeBarras" className="form-label">Código de Barras:</label>
                      <input type="text" className="form-control shadow-sm" id="codigoDeBarras" name="codigoDeBarras" value={inputs.codigoDeBarras} onChange={handleChange} placeholder="Código de barras do produto..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="fabricante" className="form-label">Fabricante:</label>
                      <input type="text" className="form-control shadow-sm" id="fabricante" name="fabricante" value={inputs.fabricante} onChange={handleChange} placeholder="Digite a marca do produto..." />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="precoPorUnidade" className="form-label">Preço por unidade:</label>
                      <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorUnidade" name="precoPorUnidade" value={inputs.precoPorUnidade || 0} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="precoPorQuilo" className="form-label">Preço por quilo:</label>
                      <input type="number" className="form-control col-sm-6 shadow-sm" id="precoPorQuilo" name="precoPorQuilo" value={inputs.precoPorQuilo || 0} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input className="form-check-input shadow-sm" type="checkbox" id="bloqueado" name="bloqueado" checked={inputs.bloqueado} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="bloqueado">
                          Bloqueado
                        </label>
                      </div>
                      <div className="form-check">
                        <input className="form-check-input shadow-sm" type="checkbox" id="porQuilo" name="porQuilo" checked={inputs.porQuilo} onChange={handleChange} />
                        <label className="form-check-label" htmlFor="porQuilo">
                          Preço por quilo
                        </label>
                      </div>
                    </div>
                    <div className='row justify-content-md-left'>
                      <div className='col-md-auto'>
                        <button type="submit" className="btn btn-lg shadow btn-success mb-2" onClick={handleSubmit}>
                          <i class="bi bi-floppy-fill"></i>
                          <span className='mx-2'>Adicionar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 ">
                    <div className="mb">
                      <label htmlFor="image" className="form-label">Adicionar imagem:</label>
                    </div>
                    <div className="mb-2 d-flex align-items-center">
                      <input type="file" accept="image/*" className="form-control shadow-sm me-2" id="image" name='image' onChange={handleImageChange} />
                      <button type="button" className="btn btn-danger" onClick={() => handleRemoveImage()}>
                        <i class="bi bi-file-earmark-x"></i>
                      </button>
                    </div>
                    {imageBase64 && (
                      <div className="text-center">
                        <img src={`data:image/jpeg;base64,${imageBase64}`} className="img-fluid rounded" alt="Imagem do Produto" style={{ maxWidth: "300px", height: "auto" }} />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}