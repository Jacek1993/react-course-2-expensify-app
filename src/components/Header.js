import {NavLink} from "react-router-dom";
import React from "react";

const Header = () => (
    <header>
        <h1>
            Expensify
        </h1>
        <ul>
            <ol>
                <NavLink to="/" activeClassName="is-active" exact={true}>Take me home</NavLink>
            </ol>
            <ol>
                <NavLink to="/create" activeClassName="is-active">Create something</NavLink>
            </ol>
            <ol>
                <NavLink to="/help" activeClassName="is-active">Help Yourself</NavLink>
            </ol>
        </ul>
    </header>
);
export default Header;