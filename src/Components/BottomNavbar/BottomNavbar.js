import './BottomNavbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const BottomNavbar = () => {
    return(
        <nav className="bottomNavbar">
            <div className="links">
                <a target="_blank" className="social" rel="noreferrer" href="https://www.linkedin.com/in/sukju-yoon-6095221b9"><FontAwesomeIcon icon={faLinkedin} color="#393E46" /></a>
                <a target="_blank" className="social" rel="noreferrer" href="https://www.facebook.com/ryan.yoon.549/"><FontAwesomeIcon icon={faFacebook} color="#393E46" /></a>
                <a target="_blank" className="social" rel="noreferrer" href="https://github.com/Ryayoon"><FontAwesomeIcon icon={faGithub} color="#393E46" /></a>
            </div>
        </nav>
    );
}

export default BottomNavbar;