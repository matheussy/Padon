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

                            <NavDropdown title="Produtos" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Produtos">Produtos</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Produtos">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Produtos/Create">Adicionar Produto</NavDropdown.Item>
                                <NavDropdown.Item href="/Produtos/Edit">Editar Produto</NavDropdown.Item>
                                <NavDropdown.Item href="/Produtos/Delete">Deletar Produto</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Categorias" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/Categorias">Categorias</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/Categorias">Listar</NavDropdown.Item>
                                <NavDropdown.Item href="/Categorias/Create">Adicionar Categoria</NavDropdown.Item>
                                <NavDropdown.Item href="/Categorias/Edit">Editar Categoria</NavDropdown.Item>
                                <NavDropdown.Item href="/Categorias/Delete">Deletar Categoria</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
}

export default PadonNavbar;
