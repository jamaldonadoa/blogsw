import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";

const Navbar = () => {

    
    const { store } = useContext(Context)


    return (
        
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Star Wars Blog</Link>
                <div class="navbar-nav">
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/">
                        Home
                    </Link>
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/planets">
                        Planets
                    </Link>
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/ships">
                        Ships
                    </Link>
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/characters">
                        Characters
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;