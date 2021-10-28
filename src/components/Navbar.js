import { FaBoxes, FaEnvelope, FaHome, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <Link class="nav-link d-flex flex-column align-items-center" to="/">
                    <FaHome />
                    Home
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link d-flex flex-column align-items-center" to="/about">
                    <FaUser />
                    About
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link d-flex flex-column align-items-center" to="/contact">
                    <FaEnvelope />
                    Contact
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link d-flex flex-column align-items-center" to="/products">
                    <FaBoxes />
                    Products
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;