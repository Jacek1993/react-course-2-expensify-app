import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>
            Portfolio
        </h1>
        <ul>
            <ol>
                <NavLink to="/" activeClassName="is-active" exact={true}>Take me home</NavLink>
            </ol>
            <ol>
                <NavLink to="/portfolio" activeClassName="is-active">Portfolio</NavLink>
            </ol>
            <ol>
                <NavLink to="/contact" activeClassName="is-active">Contact Me</NavLink>
            </ol>
        </ul>
    </header>
);
export default Header;