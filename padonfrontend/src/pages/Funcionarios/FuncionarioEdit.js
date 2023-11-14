import React, { useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { postApi } from '../../Services/RequestHandler';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from 'react-bootstrap';

export default function FuncionarioEdit({ cpfid = null }) {
    let navigate = useNavigate();

    const { id } = useParams();
    if (cpfid === undefined || cpfid === null) {
        cpfid = id;
    }

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    const [funcionario, setFuncionario] = useState({});

    useEffect(() => {
        postApi('/funcionario/byid', { cpf: cpfid })
            .then((data) => {
                console.log(JSON.stringify(data));
                setFuncionario(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [cpfid]);    

    const [inputs, setInputs] = useState({
        cpf: '',
        usuario: '',
        nome: '',
        senha: '',
        email: '',
        telefone: '',
        gerente: false
    });

    useEffect(() => {
        setInputs({
            cpf: funcionario.cpf || '',
            usuario: funcionario.usuario || '',
            nome: funcionario.nome || '',
            senha: funcionario.senha || '',
            email: funcionario.email || '',
            telefone: funcionario.telefone || '',
            gerente: funcionario.gerente || false
        });
    }, [funcionario]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }


    const handleDelete = (event) => {
        event.preventDefault();

        let data = {
            cpf: cpfid,
            usuario: inputs.usuario != null ? inputs.usuario : "",
            nome: inputs.nome != null ? inputs.nome : "",
            senha: inputs.senha != null ? inputs.senha : "",
            email: inputs.email != null ? inputs.email : "",
            telefone: inputs.telefone != null ? inputs.telefone : "",
            gerente: inputs.gerente === true,
        }

        postApi('/funcionario/save', data).then(data => {
            navigate("/Funcionarios/");
        });


    }
    return (
        <div>
            <div className="justify-content-center row">
                <div className='col-11 col-md-8'>
                    <div className='card mt-1'>
                        <div className='card-header text-center'>
                            <span className='h4'>Editar Funcionários</span>
                        </div>
                        <div className='card-body'>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="cpf" className="form-label">CPF:</label>
                                    <input type="text" name="cpf" id="cpf" className='form-control shadow-sm' value={cpfid} onChange={handleChange} disabled placeholder='CPF...' />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="usuario" className="form-label">Usuário de LOGIN: </label>
                                    <input type="text" className="form-control shadow-sm" id="usuario" name="usuario" value={inputs.usuario} onChange={handleChange} required placeholder="Usuário de login..." />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="nome" className="form-label">Nome do Funcionário: </label>
                                    <input type="text" className="form-control shadow-sm" id="nome" name="nome" value={inputs.nome} onChange={handleChange} required placeholder="Nome do funcionário..." />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="senha" className="form-label">Senha: </label>
                                    <input type="text" className="form-control shadow-sm" id="senha" name="senha" value={inputs.senha} onChange={handleChange} required placeholder="Senha..." />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="email" className="form-label">E-mail: </label>
                                    <input type="text" className="form-control shadow-sm" id="email" name="email" value={inputs.email} onChange={handleChange} placeholder="E-mail..." />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="col-5">
                                    <label htmlFor="telefone" className="form-label">Telefone: </label>
                                    <input type="text" className="form-control shadow-sm" id="telefone" name="telefone" value={inputs.telefone} onChange={handleChange} placeholder="(11) 99999-9999..." />
                                </div>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input shadow-sm" type="checkbox" defaultValue id="flexCheckDefaultgerente" name="gerente" checked={inputs.gerente} onChange={handleChange} />
                                    <label className="form-check-label" htmlFor="flexCheckDefaultgerente">
                                        Gerente
                                    </label>
                                </div>
                            </div>
                            <div className='row justify-content-md-left'>
                                <div className='col-md-auto'>
                                    <button type="submit" className="btn btn-lg shadow btn-success mb-2" onClick={handleShowModal}>
                                        <i class="bi bi-floppy-fill"></i>
                                        <span className='mx-2'>Salvar</span>
                                    </button>
                                </div>
                                <div className='col-md-auto'>
                                    <Link to={'/Funcionarios'}>
                                        <button className="btn btn-lg shadow btn-success mb-2">
                                            <i class="bi bi-arrow-left"></i>
                                            <span className='mx-1'>Voltar</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tem certeza que deseja salvar o Funcionário?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={handleDelete}>
                        Salvar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}