import React from "react";
import "../styles/Navbar.css";

const Navbar = props => (
    <div className="navbar sticky-top">
        <a className="navbar-brand" href="/React-Clicky-Game/">Pick A Flintstone Game</a>
        <li className="score">Score: {props.score} | Top Score: {props.topScore}</li>
    </div>
)
 

export default Navbar;

