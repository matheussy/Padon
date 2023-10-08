import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar() {
  return (
    
    <div className="App">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/">
                    <Button variant="link" className="navbar-brand"> 
                        Padon
                    </Button>
                </Link>
                <Link to="/Produtos/Create">
                    <Button variant="link" className="navbar-brand"> 
                        Produto
                    </Button>
                </Link>
            </div>
        </nav>
    </div>
  );
}

export default Navbar;

/*
        <Link to="/">
            <button className="btn btn-primary" variant="outlined">
                Home
            </button>
        </Link>
        <Link to="/Teste">
            <button variant="outlined">
                Teste2
            </button>
        </Link>
        <Link to="/Pagina">
            <button variant="outlined">
                Teste
            </button>
        </Link>
*/ 
