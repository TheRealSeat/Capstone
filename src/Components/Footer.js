import './Footer.scss'
import logo from '../Assets/Images/logo.svg';
import youtube_logo from '../Assets/Images/youtube_logo.png';

function Footer() {
    return (
        <div className="Footer">
            <div className='footer-container'>
                <a href="https://www.therealseat.com/">
                    <img src={logo} alt="logo" />
                </a>
                <a href="//https://www.youtube.com/channel/UCkocc2mzcG0fDg80vAtJgwA/featured">
                    <img src={youtube_logo} alt="youtube_logo" />
                </a>
            </div>
            <span className="capstone-group-container">
                <p className="capstone-group">
                    The RealSeat Capstone:
                    Abu Abukar, Caty Battjes, Steven Johnson, Elijah Moppins, Lam Nguyen, Jose Ramos
                </p>
            </span>
        </div>
    )
}

export default Footer;