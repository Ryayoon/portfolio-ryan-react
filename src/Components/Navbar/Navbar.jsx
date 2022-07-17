import './Navbar.css';
import React, {useState} from "react";

function Navbar() {
    const [active, setActive] = useState("nav-menu");
    const [toggleIcon, setToggleIcon] = useState("nav-toggle");


    const navToggle = () => {
        active === 'nav-menu'
            ? setActive('nav-menu nav-active')
            : setActive("nav-menu");

        //  ToggleIcon

        toggleIcon === "nav-toggle"
            ? setToggleIcon("nav-toggle toggle")
            : setToggleIcon("nav-toggle")
    };


    return (
        <nav className="nav">
            <a href="/" className="title">My Portfolio</a>
            <ul className={active}>
                <li className="nav-items">
                    <a className="nav-link" href="/">
                        Home
                    </a>
                </li>
                <li className="nav-items">
                    <a className="nav-link" href="/About">
                        About Myself
                    </a>
                </li>
                <li className="nav-items">
                    <a className="nav-link" href="./Contact">
                        Contact
                    </a>
                </li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="first">

                </div>
                <div className="second">

                </div>
                <div className="third">

                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;