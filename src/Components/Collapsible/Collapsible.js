import React, { useRef } from "react";
import "./Collapsible.css"

function Collapsible(props) {
    const parentRef = useRef();


    return <div className="collapsible">
        <button className="projects" onClick={props.onClick}>
            <h4 className="proj-text">{props.label}</h4>
        </button>
        <div className="content-parent" ref={parentRef} style={
            props.isOpen ? { height: parentRef.current.scrollHeight + "px",} : {height: "0px",}
        }>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>;
}

export default Collapsible;