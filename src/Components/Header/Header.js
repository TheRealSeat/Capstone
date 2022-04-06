import './Header.scss'
import Navbar from './Navbar';

function Header() {
    return (
        <div className="Header">
            <Navbar />
            <h1 className='Header-container'>
                <div className="orange_large">TheRealCapstone</div><div className="white_large">&nbsp;Capstone Project</div>
            </h1>
            <span className="Project-summary-container">
                <p className="Project-summary">
                    Summary of proposed project:
                    TheRealCapstone is an event ticketing platform that allows users to find events and purchase tickets. The
                    technical parts of this project use React, Python, Github Actions, and is serverlessly deployed using AWS.
                    The backend implementation also comes mainly from AWS, using DynamoDB for our databases and AWS SAM to serverlessly
                    deploy the project. TheRealSeat has provided guidance throughout the project.
                </p>
            </span>
        </div>
    )
}

export default Header;