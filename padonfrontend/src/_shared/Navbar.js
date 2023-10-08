import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

function Navbar({ nome="" }) {
  return (
    
    <div className="App">
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <Link to="/">
                    <Button variant="link" className="navbar-brand"> 
                        Padon
                    </Button>
                </Link>
            </div>
        </nav>
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
                Teste - {nome}
            </button>
        </Link>
    </div>
  );
}

export default Navbar;
