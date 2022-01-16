import logo from './logo.svg';
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className='NavbarContents'>
                <a href="https://www.therealseat.com/">
                    <img src={logo} alt="logo" />
                </a>
            </div>
        </div>
    )
}

export default Navbar;