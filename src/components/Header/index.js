import React from "react";
import "./style.css";

function Header (props) {
    return(

    <div className="score">
        <nav>
        <h3>Score: {props.score}</h3>
        <h3>Top Score: {props.topScore}</h3>

        </nav>
    </div>
    );
}


export default Header;