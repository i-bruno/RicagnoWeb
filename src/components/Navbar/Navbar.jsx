import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css"
import { useState } from 'react';


export const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg bg-white fixed-top border-bottom border-dark">
                    <div className="container-fluid">

                        <a class="navbar-brand" href="/">Rocío Ricagno</a>

                        <button className={`navbar-toggler ${isMenuOpen ? '' : 'collapsed'}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            onClick={toggleMenu}
                        >

                            <span className="navbar-toggler-icon"></span>

                        </button>

                        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/`} className="nav-link" aria-current="page">Inicio</NavLink>
                                </li>
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/bio`} className="nav-link">Bio</NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" href='/'>
                                        Obras
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/proyectoarana`} className="dropdown-item w-auto">
                                                Proyecto Arana
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/silencio`} className="dropdown-item w-auto">
                                                Hacer hablar al silencio
                                            </NavLink>

                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/capasabrigo`} className="dropdown-item w-auto">
                                                Capas de abrigo
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/pielderio`} className="dropdown-item w-auto">
                                                Piel de río
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/sintesis`} className="dropdown-item w-auto">
                                                Sintesis de la memoria
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/memoria`} className="dropdown-item w-auto">
                                                Memoria cartográfica
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/inestable`} className="dropdown-item w-auto">
                                                Inestable
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/devastacion`} className="dropdown-item w-auto">
                                                Devastación
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/devenirterritorio`} className="dropdown-item w-auto">
                                                Devenir territorio
                                            </NavLink>
                                        </li>
                                        <li onClick={closeMenu}>
                                            <NavLink to={`/seniorita`} className="dropdown-item w-auto">
                                                Señorita
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item" onClick={closeMenu}>
                                    <NavLink to={`/contacto`} className="nav-link">Contacto</NavLink>
                                </li>
                            </ul>
                            <div class="d-flex flex-column">
                                <div className="contenedorLink">
                                    <a href="/" class="linkStyle">
                                        Español
                                    </a>
                                </div>
                                <div className="contenedorLink">
                                    <a href="/" class="linkStyle">
                                        English
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>


        </>
    );
};

export default Navbar;