import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import NotFoundPage from "../components-portfolio/NotFoundPage";
import HomePage from "../components-portfolio/HomePage";
import ContactPage from "../components-portfolio/ContactPage";
import PortfolioItemPage from "../components-portfolio/PortfolioItemPage";
import PortfolioPage from "../components-portfolio/PortfolioPage";
import Header from "../components-portfolio/Header";

const AppRouter1=()=>(
    <BrowserRouter>
        <div>
        <Header component={Header}/>
            <Switch>
                <Route component={HomePage} path="/" exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route component={PortfolioItemPage} path="/portfolio/:id"/>
                <Route component={ContactPage} path="/contact"/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter1;