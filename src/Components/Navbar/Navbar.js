import logo from '../../Assets/Images/logo.svg';
import './Navbar.scss'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="Navbar">
            <div className='NavbarContents'>
                <a href="https://www.therealseat.com/">
                    <img src={logo} alt="logo" />
                </a>
                <Link to="/product">
                    <button type="button" class="product-button">
                        Product Page
                    </button>
                </Link>
                <Link to="/shopping">
                    <button type="button" class="shopping-button">
                        Shopping Cart
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;