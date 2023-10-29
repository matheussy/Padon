import { Link } from "react-router-dom";

function Leftmenu({ nome = "" }) {
    return (
        <div className="App">
            <Link to="/" className="">
                <button className="" variant="outlined"> Home </button>
            </Link>
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

export default Leftmenu;