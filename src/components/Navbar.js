import { FaBoxes, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div class="container-fluid">
                <Link class="navbar-brand" to="/">Star Wars Blog</Link>
                <div class="navbar-nav">
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/">
                        Home
                    </Link>
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/about">
                        Planets
                    </Link>
                    <Link class="nav-link d-flex flex-column align-items-center fw-bold" to="/contact">
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