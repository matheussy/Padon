import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import './StyleNav.css';
import { getApi, getApiNoToken, postApi } from '../Services/RequestHandler';
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';

function PadonNavbar() {

    const [lojas, setLojas] = useState([]);
    const [lojaId, setLojaId] = useState();

    useEffect(() => {
        // Carrega a lista de lojas ao montar o componente

        const storedLojaId = sessionStorage.getItem("lojaId");
        setLojaId(storedLojaId ? parseInt(storedLojaId, 10) : 0);

        console.log("TOKEN -> " + sessionStorage.getItem("token"));

        getApiNoToken('/loja/get')
            .then((data) => {
                setLojas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    const handleLojaChange = (event) => {
        const selectedLojaId = event.target.value != null ? event.target.value : 0;

        // Armazena o valor no sessionStorage antes de recarregar a página
        sessionStorage.setItem("lojaId", selectedLojaId);

        // Recarrega a página
        window.location.reload();
    };
    return (
        <div className="App">
            <Navbar expand="lg" className="navbar navbar-dark bg-dark justify-content-between">
                <Container>
                    <Navbar.Brand href="/">Padon</Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <NavDropdown title="Relatórios" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Relatorios">Relatórios</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Relatorios">Relatório Basico</NavDropdown.Item>
                                <NavDropdown.Item href="/Relatorios/Produtos">Relatório com Produtos</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Vendas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Vendas">Vendas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Vendas">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Vendas/Create">Adicionar Venda</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Produtos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Produtos">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Produtos/Create">Adicionar Produto</NavDropdown.Item>
                                <NavDropdown.Item href="/Produtos/Estoque">Estoque</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Categorias">Categorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Categorias">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Categorias/Create">Adicionar Categoria</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Fornecedores" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Fornecedores">Fornecedores</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Fornecedores">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Fornecedores/Create">Adicionar Fornecedor</NavDropdown.Item>
                            </NavDropdown>

                            {true &&
                                <NavDropdown title="Funcionarios" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="/Funcionarios">Listar</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Funcionarios/Create">Adicionar Funcionario</NavDropdown.Item>
                                </NavDropdown>
                            }

                            <NavDropdown title="Lojas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Lojas/Index">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Lojas/Create">Criar Loja</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>

                    <Form className=''>
                        <Form.Select onChange={handleLojaChange} value={lojaId} className="bg-dark text-light">
                            <option disabled>Lojas</option>
                            {lojas.map((loja) => (
                                <option key={loja.lojaId} value={loja.lojaId}>
                                    Loja {loja.lojaId}
                                </option>
                            ))}
                        </Form.Select>
                    </Form>

                    <div className="d-flex justify-content-between me-1 ms-5">
                        {/* ... Outros elementos do Navbar ... */}
                        <Link to="/Login" className="btn btn-dark">Login</Link>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>

            </Navbar>

        </div>
    );
}

export default PadonNavbar;
