import './Navbar.css';
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

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
            <h1 className="title">Sukju Yoon</h1>
            <ul className={active} onClick={navToggle}>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/portfolio-ryan-react/" >
                        Home
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/portfolio-ryan-react/About">
                        About Myself
                    </NavLink>
                </li>
                <li className="nav-items">
                    <NavLink className="nav-link" to="/portfolio-ryan-react/Contact">
                        Contact
                    </NavLink>
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