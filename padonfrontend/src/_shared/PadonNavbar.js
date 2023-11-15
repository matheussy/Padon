import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './StyleNav.css';

function PadonNavbar() {
    return (

        <div className="App">
            <Navbar expand="lg" className="navbar navbar-dark bg-dark">
                <Container>
                    <Navbar.Brand href="/">Padon</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/Relatorios">Relatórios</Nav.Link>

                            <NavDropdown title="Vendas" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Vendas">Vendas</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Vendas">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Vendas/Create">Adicionar Venda</NavDropdown.Item>
                                <NavDropdown.Item href="/Vendas/Edit">Editar Venda</NavDropdown.Item>
                                <NavDropdown.Item href="/Vendas/Delete">Deletar Venda</NavDropdown.Item>
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
                                <NavDropdown.Item href="/Categorias/Edit">Editar Categoria</NavDropdown.Item>
                                <NavDropdown.Item href="/Categorias/Delete">Deletar Categoria</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Fornecedores" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Fornecedores">Fornecedores</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Fornecedores">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Fornecedores/Create">Adicionar Fornecedor</NavDropdown.Item>
                                <NavDropdown.Item href="/Fornecedores/Edit">Editar Fornecedor</NavDropdown.Item>
                                <NavDropdown.Item href="/Fornecedores/Delete">Deletar Fornecedor</NavDropdown.Item>
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
                </Container>
            </Navbar>

        </div>
    );
}

export default PadonNavbar;
