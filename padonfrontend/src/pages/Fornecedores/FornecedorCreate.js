import React from 'react';
import { useNavigate } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { Modal, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';

export default function FornecedorCreate() {
    let navigate = useNavigate();

    const [inputs, setInputs] = useState({});
    const [showPermissionModal, setShowPermissionModal] = useState(false);
    const handleClosePermissionModal = () => {
        setShowPermissionModal(false);
        navigate("/Fornecedores");
    };

    useEffect(() => {
        const gerente = sessionStorage.getItem('gerente');
        if (gerente === 'false') {
            setShowPermissionModal(true);
        }
    }, []);

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

        postApi('/fornecedor/create', data).then(data => {
            navigate("/Fornecedores/" + data.fornecedorId);
        });

    }
    return (
        <div>
            <Modal show={showPermissionModal} onHide={handleClosePermissionModal} backdrop="static" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Permissão Negada!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Você não tem permissão para acessar esta tela.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClosePermissionModal}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
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
        </div>
    );
}