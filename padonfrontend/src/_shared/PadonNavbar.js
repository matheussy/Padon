import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import './StyleNav.css';

function PadonNavbar() {
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
                                    <NavDropdown.Item href="/Funcionarios">Funcionarios</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/Funcionarios">Listar</NavDropdown.Item>
                                    <NavDropdown.Item href="/Funcionarios/Create">Adicionar Funcionario</NavDropdown.Item>
                                    <NavDropdown.Item href="/Funcionarios/Edit">Editar Funcionario</NavDropdown.Item>
                                    <NavDropdown.Item href="/Funcionarios/Delete">Deletar Funcionarios</NavDropdown.Item>
                                </NavDropdown>
                            }
                            
                            <NavDropdown title="Lojas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Lojas/Index">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Lojas/Create">Criar Loja</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>

                    <Form className=''>
                        <Form.Select >
                            <option>Lojas</option>
                            <option value="1">Loja 1</option>
                            <option value="2">Loja 2</option>
                        </Form.Select>
                    </Form>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Container>

            </Navbar>

        </div>
    );
}

export default PadonNavbar;
