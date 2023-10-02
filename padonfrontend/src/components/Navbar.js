import { Link } from "react-router-dom";

function Navbar({ nome="" }) {
  return (
    <div className="App">
        <Link to="/">
            <button variant="outlined">
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
