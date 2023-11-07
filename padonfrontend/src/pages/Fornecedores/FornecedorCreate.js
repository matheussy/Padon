import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function FornecedorCreate() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            nome: inputs.nome,
            endereco: inputs.nome,
            contato: inputs.contato,
            telefone: inputs.telefone,
        }

        /*postApi('/Fornecedor/create', data).then(data => {
            //navigate("/Fornecedores/"+data.id);
        });*/
        
    }
    return (
        <div className='justify-content-center row'>
            <div className='col-11 col-md-8'>
                <div className='card mt-1'>
                    <div className='card-header text-center'>
                        <span className='h4'>Adicionar Fornecedor</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='card-body'>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Nome do Fornecedor:</label>
                                <input type="text" name="nome" id="nome" className='form-control' value={inputs.nome || ""} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Endereço:</label>
                                <input type="text" name="endereco" id="nome" className='form-control' value={inputs.endereco || ""} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Contato:</label>
                                <input type="text" name="contato" id="nome" className='form-control' value={inputs.contato || ""} onChange={handleChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="nome" className="form-label">Telefone:</label>
                                <input type="text" name="telefone" id="nome" className='form-control' value={inputs.telefone || ""} onChange={handleChange} />
                            </div>

                            <button type="submit" className='btn btn-success'>
                                <i className="bi bi-plus-circle"></i> 
                                <span className='mx-1'>Adicionar Fornecedor</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}