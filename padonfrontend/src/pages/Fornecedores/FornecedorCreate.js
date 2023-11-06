import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';

export default function FornecedorCreate() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [textarea, setTextarea] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleChangeTextArea = (event) => {
        setTextarea(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let data = {
            nome: inputs.nome,
            descricao: textarea
        }

        postApi('/categoria/create', data).then(data => {
            navigate("/Categorias/"+data.categoriaId);
        });
        
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
                                <label htmlFor="desc" className="form-label">Descrição da Categoria</label>
                                <textarea className="form-control" id="desc" rows="3" value={textarea} onChange={handleChangeTextArea}></textarea>
                            </div>

                            <button type="submit" className='btn btn-success'>
                                <i className="bi bi-plus-circle"></i> 
                                <span className='mx-1'>Adicionar Categoria</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}