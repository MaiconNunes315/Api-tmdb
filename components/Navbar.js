import { PesquisaContext } from "@/context/pesquisaContext";
import { useContext, useEffect, useState } from "react";


export default function Navbar() {

    const { filtro } = useContext(PesquisaContext);


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Filmes & Séries
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">
                                Filmes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Séries
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={(e) => {
                                filtro(e.target.value)
                            }}
                        />
                        <button className="btn btn-outline-success" type="submit">
                            Pesquisar

                        </button>
                    </form>
                </div>
            </div>
        </nav>

    )
}
