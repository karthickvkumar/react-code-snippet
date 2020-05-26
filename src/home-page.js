import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import AboutPage from './components/about-page';
import ProfilePage from './components/profile-page';
import SettingPage from './components/setting-page';

class HomePage extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand">Logo</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link">About</a> */}
                                <NavLink
                                    to="/home"
                                    className="nav-link"
                                    activeClassName="header-active-class"
                                >About</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link">Profile</a> */}
                                <NavLink
                                    to="/home/pro"
                                    className="nav-link"
                                    activeClassName="header-active-class"
                                >Profile</NavLink>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link">Settings</a> */}
                                <NavLink
                                    to="/home/set"
                                    className="nav-link"
                                    activeClassName="header-active-class"
                                >Settings</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                <Switch>
                    <Route path="/home" exact component={AboutPage} />
                    <Route path="/home/pro" component={ProfilePage} />
                    <Route path="/home/set" component={SettingPage} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default HomePage;