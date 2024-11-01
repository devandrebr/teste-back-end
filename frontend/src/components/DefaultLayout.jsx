import { Navigate, Outlet } from "react-router-dom";
import useStateContext from "../contexts/contextprovider";

export default function DefaultLayout() {
    const {user, token} = useStateContext();

    if (!token) {
        return <Navigate to='/login' />
    }

    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">Teste</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/categorias">Categorias</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/produtos">Produtos</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Pesquisar por..." aria-label="Pesquisar" />
                                <button className="btn btn-outline-success" type="submit">Pesquisar</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>

            <main className="box-main">
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </div>
    )
}